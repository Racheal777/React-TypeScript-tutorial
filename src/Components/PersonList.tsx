import React from 'react'

//array props
type PersonlistProps = {
    names: {
        first:string
        last: string
    }[]
}

export default function PersonList(props:PersonlistProps) {
  return (
    <div>
        {props.names.map((name, id) => (
            <h2 key={id}>{name.first} {name.last}</h2>
        ))}
    </div>
  )
}
