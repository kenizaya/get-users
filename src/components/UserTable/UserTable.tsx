import React from 'react'
import { User } from '../../App'
import styles from './UserTable.module.css'

const UserTable = ({ users }: { users: User[] }) => {
  return (
    <table className={styles['users-table']}>
      <thead>
        <tr className={styles.tr}>
          <th colSpan={2} className={styles['name-col']}>
            Name
          </th>
          <th className={styles['company-col']}>Company</th>
          <th className={styles['email-col']}>Email</th>
          <th className={styles['phone-col']}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.ID}>
              <td colSpan={2}>
                {user.FirstNameLastName}
                <br />
                <span className={styles['job']}>{user.JobTitle}</span>
              </td>
              <td>{user.Company}</td>
              <td>{user.Email}</td>
              <td>{user.Phone}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UserTable
