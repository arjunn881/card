import React from 'react'

export const Card = ({input , setInput,confirm,setConfirm}) => {
  return (
    <div>
        {
            !confirm ? <span>Card</span> : <span>{input.name}</span>
        }
    </div>
  )
}
