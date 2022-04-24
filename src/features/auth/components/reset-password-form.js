import React, { useState } from 'react'
import AppLogo from '@img/4.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FormControl, IconButton, InputLabel, OutlinedInput, InputAdornment, Grid, Hidden, Typography, Button } from '@material-ui/core/index'

import { Visibility, VisibilityOff } from '@material-ui/icons/index'
import LoadingButton from '@mui/lab/LoadingButton'
import GoogleIcon from '@mui/icons-material/Google'

const ResetPasswordForm = () => {
  const [values, setValues] = React.useState({
    email: '',
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
      <Grid style={{ padding: '1rem', width: '320px' }} container direction='column' alignItems='center' spacing={2} gap={5}>
        <Grid item container xs={12}>
          <FormControl variant='outlined' style={{ width: '100%' }}>
            <InputLabel htmlFor='outlined-adornment-password'>Email</InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type='email'
              value={values.email}
              onChange={(e, value) => setValues({ ...values, email: value })}
              label='Email'
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
            Recuperar
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  )

  return (
    <>
      <Hidden mdUp>
        <img
          alt='ProEs Logo'
          src={AppLogo}
          style={{ width: '30%', minWidth: '200px' }}
        />
      </Hidden>
      <Typography variant='h3' style={{ padding: '3rem 0', color: '#C6AB7C' }}>
        Olvidé mi contraseña
      </Typography>
      {renderForm()}
    </>
  )
}

export default ResetPasswordForm
