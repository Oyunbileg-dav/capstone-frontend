import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const useAuth=()=>{
  const token = cookies.get("token")
  if(token){
    return true
  } else {
    return false
  }
}

const ProtectedRoutes=() => {
    const auth = useAuth()
    return auth ? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedRoutes;