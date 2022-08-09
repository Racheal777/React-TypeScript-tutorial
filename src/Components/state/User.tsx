import React, {useState} from 'react'

//type
type AuthUser = {
    name: string
    email:string
}
export default function User() {

    //adding the type either null or the type declared above
    //const [user, setUser] = useState<AuthUser| null>(null)
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: 'Racheal',
            email: 'racheal@gmail.com'
        })
    }
    // const handleLogout = () => {
    //     setUser({})
    // }
  return (
    <div>
         <button className='bg-cyan-400 p-2 m-4' onClick={handleLogin}>Login</button>
        {/* <button className='bg-red-700 p-2 m-4' onClick={handleLogout}>Logout</button> */}

     {/* if user exist, display it or its null */}
        <div>User name is {user.name} </div>
        <div>User email is {user.email} </div>
    </div>
  )
}
