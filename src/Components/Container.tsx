import React from 'react'

//style props
type ContainerProps = {
    styles:React.CSSProperties
}
export default function Container(props:ContainerProps) {
  return (
    <div>
        <h1 style={props.styles}>
            Text content goes here</h1>
    </div>
  )
}
