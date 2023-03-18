import React from 'react'
import './App.css'

interface User {
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
        <div>{users}</div>
      ) : (
        <ol>
          {users.map((user) => {
            return (
              <li key={user.ID}>
                {user.ID}
                {user.FirstNameLastName}
              </li>
            )
          })}
        </ol>
      )}
      <button
        onClick={() => setPageNum((prev) => prev - 1)}
        disabled={pageNum < 1}
      >
        Previous
      </button>
      <input value={pageNum} onChange={(e) => handleChange(e)}></input>
      <button onClick={() => setPageNum((prev) => prev + 1)}>Next</button>
    </div>
  )
}
