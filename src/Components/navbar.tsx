import React from 'react'

//children props
type HeadingProps = {
    children:string
}

export default function Navbar(props:HeadingProps) {
  return (
    <div>
       <h1>{props.children}</h1>
    </div>
  )
}
