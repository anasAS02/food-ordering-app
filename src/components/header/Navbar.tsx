import { Routes } from '@/app/constants/enums'
import React from 'react'
import Link from '../link'

const Navbar = () => {
    const links = [
        {id: crypto.randomUUID(), title: 'Menu', href: Routes.MENU},
        {id: crypto.randomUUID(), title: 'About', href: Routes.ABOUT},
        {id: crypto.randomUUID(), title: 'Contact', href: Routes.CONTACT},
        {id: crypto.randomUUID(), title: 'Login', href: Routes.AUTH},
    ]
  return (
    <nav className='flex-1 justify-end flex'>
        <ul className='fixed lg:static top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all md:flex md:items-center gap-4'>
            {
                links.map((link) => (
                    <li key={link.id}>
                        <Link href={`/${link.href}`} className='text-accent hover:text-primary duration-200 transition-colors font-semibold'>{link.title}</Link>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Navbar