import React from 'react'
import { User } from '../../App'
import styles from './UserTable.module.css'

const UserTable = ({ users }: { users: User[] }) => {
  return (
    <table className={styles['users-table']}>
      <thead>
        <tr>
          <th className={styles['name-col']}>Name</th>
          <th className={styles['job-col']}>Job Title</th>
          <th className={styles['email-col']}>Email</th>
          <th className={styles['company-col']}>Company</th>
          <th className={styles['phone-col']}>Phone</th>
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
