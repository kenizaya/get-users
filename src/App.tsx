import React from 'react'
import styles from './App.module.css'
import Button from './components/Button/Button'
import UserTable from './components/UserTable/UserTable'
import UserTableMobile from './components/UserTableMobile/UserTableMobile'

export interface User {
  ID: string
  JobTitle: string
  EmailAddress: string
  FirstNameLastName: string
  Email: string
  Phone: string
  Company: string
}

export default function App() {
  const [users, setUsers] = React.useState<User[]>([])
  const [pageNum, setPageNum] = React.useState(1)
  const [showMobile, setShowMobile] = React.useState(false)

  React.useEffect(() => {
    const getUsers = async (num = 0) => {
      try {
        const response = await fetch(
          `https://give-me-users-forever.vercel.app/api/users/${num}/next`
        )
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setUsers(data.users)
      } catch (error) {
        console.error(error)
      }
    }
    getUsers(pageNum - 1)
  }, [pageNum])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPageNum(value === '' ? 0 : parseInt(value))
  }

  const handleWindowSizeChange = () => {
    setShowMobile(window.innerWidth <= 1000)
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles['title-container']}>
        <h1 className={styles.title}>Users</h1>
      </div>

      {showMobile ? (
        <UserTableMobile users={users} />
      ) : (
        <div className={styles['table-container']}>
          {typeof users === 'string' ? (
            <div className='error'>{users}</div>
          ) : (
            <UserTable users={users} />
          )}
        </div>
      )}

      <Button
        className='prev-btn'
        onClick={() => setPageNum((prev) => prev - 1)}
        disabled={pageNum < 1}
      >
        Previous
      </Button>
      <input
        className='page-input'
        value={pageNum}
        onChange={(e) => handleChange(e)}
      ></input>
      <Button
        className='next-btn'
        onClick={() => setPageNum((prev) => prev + 1)}
      >
        Next
      </Button>
    </div>
  )
}
