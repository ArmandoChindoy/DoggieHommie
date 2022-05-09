import React from 'react'
import { Grid, Hidden, Typography, Button } from '@material-ui/core/index'
import LogInForm from '@features/auth/components/login-form'
import { Link } from 'react-router-dom'
import AppLogo from '@img/4.png'

const AuthLayout = ({ formComponent: FormComponent, onSubmit }) => {
  return (
    <Grid
      container
      alignItems='center'
      style={{
        height: '100%',
        width: '100%',
        background: 'linear-gradient(0deg, rgba(76, 44, 206, 0.93) 0%, rgba(68,201,204,1) 100%)'
      }}
    >
      <Grid
        item
        container
        direction='column'
        xs={12}
        sm={12}
        md={6}
        justifyContent='center'
        alignItems='center'
        style={{ backgroundColor: '#F0F0F0', height: 'inherit', borderRadius: ' 0 1rem 1rem 0' }}
      >
        <FormComponent onSubmit={onSubmit} />
      </Grid>
      <Hidden smDown>
        <Grid
          item
          container
          component={Grid}
          md={6}
          justifyContent='center'
          alignItems='center'
          style={{
            height: 'inherit'
          }}
        >
          <img
            alt='ProEs Logo'
            src={AppLogo}
            style={{ width: '50%', minWidth: '220px' }}
          />
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default AuthLayout
