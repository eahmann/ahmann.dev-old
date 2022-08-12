import clsx from 'clsx'
import { useState, useEffect } from 'react'
import NavLink from './NavLink'
import MobileNav from './MobileNav'
import ButtonLink from '../shared/ButtonLink'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false)
      } else {
        // if scroll up show the navbar
        setShow(true)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY])

  return (
    <header id="#">
      <nav
        className={clsx(
          'top-0 z-[1000] fixed w-full py-2 px-10 transition duration-[400ms] bg-gray-600',
          !show && '-translate-y-full'
        )}
      >
        <div className="flex items-center justify-between text-brand">
          <div className="flex-1 min-w-0">
            <NavLink href={'#'}>ahmann.dev</NavLink>
          </div>
          <div className="hidden md:flex md:gap-x-6 items-center">
            <NavLink href={'#about'}>About</NavLink>
            <NavLink href={'#experience'}>Experience</NavLink>
            <NavLink href={'#projects'}>Projects</NavLink>
            <NavLink href={'#blog'}>Blog</NavLink>
            <NavLink href={'#Contact'}>Contact</NavLink>
            <ButtonLink
              link={{ href: 'assets/documents/resume.pdf' }}
              className="p-2 mt-0"
            >
              <span>Resume</span>
            </ButtonLink>
          </div>
          <div className="-mr-1 md:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
