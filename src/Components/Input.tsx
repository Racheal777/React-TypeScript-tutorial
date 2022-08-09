import React from 'react'

//event props
type InputProps = {
    value:string
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}
export default function Input({value, handleChange}:InputProps) {
  return (
    <div>
        <input className='border-solid border-2 border-indigo-600 m-4 p-3' type='text' value={value} onChange={handleChange}/>
    </div>
  )
}
