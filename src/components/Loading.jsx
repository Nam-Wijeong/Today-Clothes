import React from 'react'
import { Oval } from 'react-loader-spinner'

export default function Loading() {
  return (
    <div className='flex items-center'>
      <Oval 
        height='120'
        width='120'
        color='#e8b5be'
        secondaryColor="#e93254"
        ariaLabel='oval-loading'
        visible={true}
      />
    </div>
  )
}
