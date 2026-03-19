import React from 'react'

function Input({value,onChange, placeholder}) {
  return (
    <input className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={value} onChange={onChange} placeholder={placeholder}></input>
  )
}

export default Input
