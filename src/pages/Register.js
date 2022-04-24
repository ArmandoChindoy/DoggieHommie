import React, { useState } from 'react'
import AppLogo from '../assets/img/4.png'
import LogInForm from '@features/auth/components/login-form'
import { Box, Grid, Hidden, Typography, Button } from '@material-ui/core/index'
import { Link } from 'react-router-dom/index'
import GoogleIcon from '@mui/icons-material/Google'
import AuthLayout from '@components/layout/auth.layout'
import RegisterForm from '@features/auth/components/register-form'

const Register = () => {
  const [state, setstate] = useState(() => ({ email: '', password: '' }))

  console.log('estado', state)

  const handleSubmit = async (event) => {
    // event.preventDefault()
    // console.log('estado',state)
    //   const data =  await axios.get('https://rickandmortyapi.com/api/character',{email,password})
    //   console.log('data',data)

  }
  return (
    <AuthLayout formComponent={RegisterForm} />
  )
}

export default Register
