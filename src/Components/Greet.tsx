import React from 'react'

//typescript types
type GreetProps = {
    name: string
    messageCount? : number
    isLoggedin : boolean
}
export default function Greet(props:GreetProps) {
    const{messageCount = 0} = props
  return (
    <div>

        
        <h2>
        {
            props.isLoggedin ? 
             <p>Welcome {props.name}! You have {messageCount} unread messages</p>
             : 'Welcome Guest' 
        }
            
           </h2>
    </div>
  )
}
