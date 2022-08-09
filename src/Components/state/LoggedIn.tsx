import React, {useState} from 'react'

export default function LoggedIn() {

    const [isloggedin, setIsloggedin] = useState(false)
    const handleLogin = () => {
        setIsloggedin (true)
    }
    const handleLogout = () => {
        setIsloggedin(false)
    }


  return (
    <div>
        <button className='bg-cyan-400 p-2 m-4' onClick={handleLogin}>Login</button>
        <button className='bg-red-700 p-2 m-4' onClick={handleLogout}>Logout</button>

        <div>User is {isloggedin ? 'logged in' : 'logged out'} </div>
    </div>
  )
}
