import React from 'react'

//event props
type InputProps = {
    value:string
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}
export default function Input(props:InputProps) {
  return (
    <div>
        <input className='border-solid border-2 border-indigo-600 ' type='text' value={props.value} onChange={props.handleChange}/>
    </div>
  )
}
