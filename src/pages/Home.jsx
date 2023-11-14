import React from 'react'
import Search from '../components/Search';

export default function Home() {
  return (
    <section className='flex justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 h-4/5 sm:h-section mt-4 py-2 sm:bg-main sm:rounded-2xl sm:shadow-lg overflow-hidden'>
      <Search />
    </section>
  )
}
