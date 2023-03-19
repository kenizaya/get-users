import React from 'react'
import { User } from '../../App'
import styles from './UserTableMobile.module.css'

const UserTableMobile = ({ users }: { users: User[] }) => {
  return (
    <>
      {users.map((user) => {
        return (
          <div className={styles.container}>
            <div className={styles.row}>
              <h3>Name</h3>
              <p>{user.FirstNameLastName}</p>
            </div>
            <div className={styles.row}>
              <h3>Job Title</h3>
              <p>{user.JobTitle}</p>
            </div>
            <div className={styles.row}>
              <h3>Company</h3>
              <p>{user.Company}</p>
            </div>
            <div className={styles.row}>
              <h3>Email</h3>
              <p>{user.Email}</p>
            </div>
            <div className={styles.row}>
              <h3>Phone</h3>
              <p>{user.Phone}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default UserTableMobile
