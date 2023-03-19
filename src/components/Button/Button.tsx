import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  onClick?: () => void
  className?: string
  disabled?: boolean
  children: React.ReactNode
}

const Button = ({ onClick, className, disabled, children }: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
