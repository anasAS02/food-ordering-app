'use client'

import { Pages, Routes } from '@/app/constants/enums'
import React, { useState } from 'react'
import Link from '../link'
import { Button, buttonVariants } from '../ui/button'
import { Menu, XIcon } from 'lucide-react'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const links = [
        {id: crypto.randomUUID(), title: 'Menu', href: Routes.MENU},
        {id: crypto.randomUUID(), title: 'About', href: Routes.ABOUT},
        {id: crypto.randomUUID(), title: 'Contact', href: Routes.CONTACT},
        {id: crypto.randomUUID(), title: 'Login', href: `${Routes.AUTH}/${Pages.LOGIN}`},
    ]

  return (
    <nav className='flex-1 justify-end flex'>
        <Button
            variant='secondary'
            size='sm'
            className='lg:hidden'
            onClick={() => setOpenMenu(true)}
        >
            <Menu className='!w-6 !h-6' />
        </Button>
        <ul className={`max-lg:w-full max-lg:h-full ${openMenu ? 'left-0 z-50' : '-left-full'} fixed lg:static top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all lg:flex md:items-center gap-4`}>
            <Button
                variant='secondary'
                size='sm'
                className='absolute top-10 right-10 lg:hidden'
                onClick={() => setOpenMenu(false)}
            >
                <XIcon className='!w-6 !h-6' />
            </Button>
            {
                links.map((link) => (
                    <li key={link.id}>
                        <Link href={`/${link.href}`} 
                            className={`${
                                link.href === `${Routes.AUTH}/${Pages.LOGIN}`
                                ? `${buttonVariants({ size: 'lg' })} !px-8 !rounded-full`
                                : 'text-accent hover:text-primary duration-200 transition-colors'
                            } font-semibold`}
                        >
                            {link.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Navbar