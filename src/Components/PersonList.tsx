import React from 'react'
import { Name } from './Person.types'

//array props
type PersonlistProps = {
    names: Name[]
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
