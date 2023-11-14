import React from 'react'

export default function Button({ text, onClick }) {
  return (
    <button className='hover:text-neutral-900' onClick={onClick}>
      { text }
    </button>
  )
}
