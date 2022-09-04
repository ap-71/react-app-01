import React from 'react'
import { Link } from 'react-router-dom'

export function NavElement({ to, children, isActive }){
    return (
        <div className='flex flex-col'>
            <Link to={to} className={` h-[50px] px-3 py-4 text-white bg-[#29434e]'}`}>{children}</Link>
            <span className={`flex-col h-[5px] ${isActive ? 'bg-[#819ca9]  transition duration-300 delay-300 ease-out' : ''}`}></span>
        </div>
        
    )
}