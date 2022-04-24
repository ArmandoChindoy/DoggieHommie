import NotFound from '@pages/NotFound'
import PermissionDenied from 'pages/PermissionDenied'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import LayOut from '../Layout/LayOut'
import Home from '@pages/Home'
import LogIn from '@pages/LogIn'
import ProtectedRoutes from './protected.routes'
import PublicRoutes from './public.routes'
import ResetPassword from '@pages/ResetPassword'
import Register from '@pages/Register'

const isAuth = true
const RoutesComponent = () => (
  <Router>
    <Routes>
      {/** Protected Routes */}
      {/** Wrap all Route under ProtectedRoutes element */}
      <Route path='/' element={<ProtectedRoutes />}>
        <Route path='/' element={<LayOut />}>
          <Route path='/' element={<Navigate replace to='home' />} />
          <Route path='/home' element={<Home />} />
        </Route>
      </Route>
      {/** Public Routes */}
      {/** Wrap all Route under PublicRoutes element */}
      <Route path='/' element={<PublicRoutes />}>
        <Route path='/login' element={<LogIn />} />
        <Route path='/reset_password' element={<ResetPassword />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<LayOut />}>
          * Permission denied route
          <Route path='/denied' element={<PermissionDenied />} />
          * NotFound
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/*' element={<Navigate to='/notfound' />} />
        </Route>
      </Route>
    </Routes>
  </Router>
)

export default RoutesComponent
