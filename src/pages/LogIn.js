import React, { useState } from 'react'
import AppLogo from '../assets/img/4.png'
import LogInForm from '@features/auth/components/login-form'
import { Box, Grid, Hidden, Typography, Button } from '@material-ui/core/index'
import { Link, useNavigate } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google'
import AuthLayout from '@components/layout/auth.layout'
import axios from 'axios'

const LogIn = () => {
  const [state, setstate] = useState(() => ({ email: '', password: '' }))

  console.log('estado', state)

  const navigate = useNavigate()

  // console.log('estado', navigate)

  const handleSubmit = async (event) => {
    // event.preventDefault()
    // console.log('estado',state)
    // const data = await axios.get('http://localhost:8000/hello')
    //   console.log('data',data)
    localStorage.setItem('user', JSON.stringify({ role: 'user' }))
    navigate('/home')
  }
  return (
    <AuthLayout formComponent={LogInForm} onSubmit={handleSubmit} />
  )
}

export default LogIn
