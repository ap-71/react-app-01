import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavElement } from './NavElement'

export function Navigation(){
  const location = useLocation()

  const menu = {
    Main: '/',
    Backups: '/backups',
    Management: '/mng',
    Options: '/options',
  }
  return (
    <nav className='h-[50px] flex justify-between px-5 bg-[#29434e] items-center text-white'>
      <span className='font-bold'>TEST</span>
      <span className='h-[60px] flex'>
        {Object.keys(menu).map((key, index) =>  <NavElement to={menu[key]} key={index} isActive={location.pathname === menu[key]} >{key}</NavElement> )}
      </span>
    </nav>
  )
}