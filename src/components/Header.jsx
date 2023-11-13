import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const date = new Date();
  const dayArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const today = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${dayArray[date.getDay()]}`;

  return (
    <header className='flex justify-between items-center p-6'>
      <p>{today}</p>
      <p>위정님, 안녕하세요!</p>
      <nav className='flex gap-4'>
        <Link to='/search'>검색하기</Link>
        <Link to='/login'>로그인</Link>
      </nav>
    </header>
  )
}
