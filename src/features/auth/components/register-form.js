import React, { useState } from 'react'
import AppLogo from '@img/4.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FormControl, IconButton, InputLabel, OutlinedInput, InputAdornment, Grid, Hidden, Typography, Button } from '@material-ui/core/index'

import { Visibility, VisibilityOff } from '@material-ui/icons/index'
import LoadingButton from '@mui/lab/LoadingButton'
import GoogleIcon from '@mui/icons-material/Google'

const RegisterForm = () => {
  const [values, setValues] = React.useState({
    name: '',
    dni: '',
    email: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    loading: false
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setValues({ ...values, loading: true })
    setTimeout(() => {
      setValues({ ...values, loading: false })
    }, 3000)
  }

  const renderForm = () => (
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%' }}>
      <Grid style={{ padding: '1rem', width: '700px' }} container alignItems='center' spacing={2} gap={5}>
        <Grid item container xs={12} md={6}>
          <FormControl variant='outlined' style={{ width: '100%' }}>
            <InputLabel htmlFor='outlined-adornment-password'>Nombre Completo</InputLabel>
            <OutlinedInput
              type={values.showPassword ? 'text' : 'password'}
              value={values.name}
              onChange={(e, value) => setValues({ ...values, name: value })}
              label='Name'
            />
          </FormControl>
        </Grid>
        <Grid item container xs={12} md={6}>
          <FormControl variant='outlined' style={{ width: '100%' }}>
            <InputLabel htmlFor='outlined-adornment-password'>DNI</InputLabel>
            <OutlinedInput
              type='number'
              value={values.dni}
              onChange={(e, value) => setValues({ ...values, dni: value })}
              label='dni'
            />
          </FormControl>
        </Grid>
        <Grid item container xs={12} md={6}>
          <FormControl variant='outlined' style={{ width: '100%' }}>
            <InputLabel htmlFor='outlined-adornment-password'>Email</InputLabel>
            <OutlinedInput
              type='email'
              value={values.email}
              onChange={(e, value) => setValues({ ...values, email: value })}
              label='Email'
            />
          </FormControl>
        </Grid>
        <Grid item container xs={12} md={6}>
          <FormControl variant='outlined' style={{ width: '100%' }}>
            <InputLabel htmlFor='outlined-adornment-password'>País</InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type='text'
              value={values.country}
              onChange={(e, value) => setValues({ ...values, country: value })}
              label='Pais'
            />
          </FormControl>
        </Grid>
        <Grid item container xs={12} md={6}>
          <FormControl variant='outlined' style={{ width: '100%' }}>
            <InputLabel htmlFor='outlined-adornment-password'>Contraseña</InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={(e, value) => setValues({ ...values, password: value })}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
          }
              label='Password'
            />
          </FormControl>
        </Grid>
        <Grid item container xs={12} md={6}>
          <FormControl variant='outlined' style={{ width: '100%' }}>
            <InputLabel htmlFor='outlined-adornment-password'>Ciudad</InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type='text'
              value={values.city}
              onChange={(e, value) => setValues({ ...values, city: value })}
              label='Ciudad'
            />
          </FormControl>
        </Grid>
        <Grid item container xs={12} md={6}>
          <FormControl variant='outlined' style={{ width: '100%' }}>
            <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={(e, value) => setValues({ ...values, password: value })}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
          }
              label='Password'
            />
          </FormControl>
        </Grid>
        <Grid item container xs={12} md={6}>
          <FormControl variant='outlined' style={{ width: '100%' }}>
            <InputLabel htmlFor='outlined-adornment-password'>Telefono</InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type='text'
              value={values.password}
              onChange={(e, value) => setValues({ ...values, password: value })}
              label='Phone'
            />
          </FormControl>
        </Grid>
        <Grid item container justifyContent='center'>
          <LoadingButton
            type='sumbit'
            style={{ width: '100%' }}
            loading={values.loading}
            variant='outlined'
            disabled={values.loading}
          >
            Sing Up
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  )

  return (
    <>
      <Grid container direction='column' justifyContent='center' alignItems='center'>
        <Hidden mdUp>
          <img
            alt='ProEs Logo'
            src={AppLogo}
            style={{ width: '30%', minWidth: '200px' }}
          />
        </Hidden>
        <Typography variant='h3' style={{ padding: '3rem 0', color: '#C6AB7C' }}>
          Regístrate
        </Typography>
        {renderForm()}
        <Link to='/login'><p>Iniciar sesion</p></Link>
      </Grid>
    </>
  )
}

export default RegisterForm
