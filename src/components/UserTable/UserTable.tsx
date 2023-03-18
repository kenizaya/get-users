import React from 'react'
import { User } from '../../App'

const UserTable = ({ users }: { users: User[] }) => {
  return (
    <table className='users-table'>
      <thead>
        <tr>
          <th className='name-col'>Name</th>
          <th className='job-col'>Job Title</th>
          <th className='email-col'>Email</th>
          <th className='company-col'>Company</th>
          <th className='phone-col'>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.ID}>
              <td>{user.FirstNameLastName}</td>
              <td>{user.JobTitle}</td>
              <td>{user.Email}</td>
              <td>{user.Company}</td>
              <td>{user.Phone}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UserTable
