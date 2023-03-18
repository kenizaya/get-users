import React from 'react'
import './App.css'
import UserTable from './components/UserTable'

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

  return (
    <div className='App'>
      {typeof users === 'string' ? (
        <div className='error'>{users}</div>
      ) : (
        <UserTable users={users} />
      )}
      <button
        className='prev-btn'
        onClick={() => setPageNum((prev) => prev - 1)}
        disabled={pageNum < 1}
      >
        Previous
      </button>
      <input
        className='page-input'
        value={pageNum}
        onChange={(e) => handleChange(e)}
      ></input>
      <button
        className='next-btn'
        onClick={() => setPageNum((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  )
}
