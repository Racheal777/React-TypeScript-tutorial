import React from 'react'

//child of a react component props
type OscarProps ={
    children:React.ReactNode
}

export default function Oscar(props:OscarProps) {
  return (
    <div> {props.children} </div>
  )
}
