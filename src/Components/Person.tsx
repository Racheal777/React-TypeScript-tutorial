import React from 'react'
import { PersonProps} from './Person.types'

export default function Person(props:PersonProps) {
  return (
    <div>
        <h1>
            {props.name.first} {props.name.last}
        </h1>

    </div>
  )
}
