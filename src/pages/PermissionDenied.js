import React from 'react'
import Lottie from 'react-lottie'
import * as deniedAnimation from '@animations/dog.json'
const PermissionDenied = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: deniedAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <>
      <div className='container w-100'>
        <Lottie options={defaultOptions} height={400} width={400} />
        <h1 className='text-center'>Not found</h1>
      </div>
    </>
  )
}

export default PermissionDenied
