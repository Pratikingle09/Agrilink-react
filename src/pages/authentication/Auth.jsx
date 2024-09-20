import React from 'react'
import { useState } from 'react'

import Style from '../../components/auth/auth.module.css'
import Login from '../../components/auth/Login'
import Register from '../../components/auth/Register'

function Auth() {
    const [register, setRegister] = useState(true)

  return (
    <div className={Style?.authorisation_container}>
      {register?<Register/>:<Login/>}
      <div className={Style?.islogin}>
        <p>{register?<>Already have an account?</>:<>Don’t have an account?</>}</p>
        <div className={Style?.link} onClick={()=>setRegister(!register)}>{register?<>Log In</>:<>Register</>}</div>
      </div>
    </div>
  )
}

export default Auth
