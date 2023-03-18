import React from 'react'

interface ButtonProps {
  onClick?: () => void
  className?: string
  disabled?: boolean
  children: React.ReactNode
}

const Button = ({ onClick, className, disabled, children }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
