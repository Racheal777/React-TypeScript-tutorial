import React from 'react'

//event type props
type ButtonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, id:number)=> void
}
export default function Button(props:ButtonProps) {
  return (
    <div>
        <button className='bg-orange-600 p-2 m-4' onClick={(event)=> props.handleClick(event, 10)}>Click Me</button>
    </div>
  )
}
