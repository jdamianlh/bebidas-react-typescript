import React from 'react'
import {  NavLink, useLocation } from 'react-router-dom'

export default function Header() {

    const {pathname} = useLocation()

    console.log(pathname);
    

  return (
    <header className='bg-slate-800'>
        <div className='mx-auto container px-5 py-16'>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='w-32' src="/logo.svg" alt="logotipo" />
                </div>

                <nav className='flex gap-4'>
                    <NavLink 
                        to="/"
                        className={({isActive}) => 
                        isActive ? 'text-orange-500 font-bold uppercase' : 'text-white font-bold uppercase'}
                    >Inicio</NavLink>
                    <NavLink 
                        to="/favoritos"
                        className={({isActive}) => 
                        isActive ? 'text-orange-500 font-bold uppercase' : 'text-white font-bold uppercase'}
                    >Favoritos</NavLink>
                </nav>
            </div>
        </div>
    </header>
  )
}
