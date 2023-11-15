import React from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/UserContext';
import { AiOutlineHome } from 'react-icons/ai'
import Button from './Button';

export default function Header() {
  const { user, login, logout } = useUserContext();
  const date = new Date();
  const dayArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const today = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${dayArray[date.getDay()]}`;

  return (
    <header className='flex justify-between items-center px-4 py-5 2xl:py-10 font-semibold text-neutral-700'>
      <p className='text-lg hidden sm:block'>{today}</p>
      <Link to='/' className='sm:hidden'>
        <AiOutlineHome className='text-2xl sm:text-3xl'/>
      </Link>
      <div className='flex justify-center items-center gap-2'>
        { user && <>
          <img className='w-8 rounded-full' src={user?.photoURL} alt="프로필 이미지" />
          <p className='hidden sm:block sm:text-xl'>{user?.displayName}님, 안녕하세요! 👋</p>
        </>
        }
        { !user && <p className='hidden sm:block sm:text-xl'>안녕하세요! 👋</p>}
      </div>
      
      <nav className='flex gap-4 text-sm sm:text-lg'>
        { !user && <Button text={'Login'} onClick={login} />}
        { user && <Button text={'Logout'} onClick={logout} />}
      </nav>
    </header>
  )
}
