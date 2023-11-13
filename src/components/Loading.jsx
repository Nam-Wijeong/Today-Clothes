import React from 'react'
import { Hearts } from 'react-loader-spinner'

export default function Loading() {
  return (
    <div className='flex items-center'>
      <Hearts 
        height='140'
        width='140'
        color='#e8b5be'
        ariaLabel='hearts-loading'
        visible={true}
      />
    </div>
  )
}
