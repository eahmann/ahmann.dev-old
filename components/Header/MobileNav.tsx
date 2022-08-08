import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import MobileNavIcon from './MobileNavIcon'
import MobileNavLink from './MobileNavLink'

interface MobileNavProps {}

const MobileNav: React.FC<MobileNavProps> = () => {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button
            className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {({ open }) => <MobileNavIcon open={open} />}
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-gray-900/70" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="div"
                className="absolute inset-x-0 mx-4 sm:px-6 lg:px-8 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                <MobileNavLink href="#about">
                  <a onClick={() => close()}>About</a>
                </MobileNavLink>
                <MobileNavLink href="#experience">
                  <a onClick={() => close()}>Experience</a>
                </MobileNavLink>
                <MobileNavLink href="#projects">
                  <a onClick={() => close()}>Projects</a>
                </MobileNavLink>
                <MobileNavLink href="#contact">
                  <a onClick={() => close()}>Contact</a>
                </MobileNavLink>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

export default MobileNav
