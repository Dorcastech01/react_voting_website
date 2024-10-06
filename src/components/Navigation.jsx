
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import { UserIcon, UserPlusIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link, NavLink } from 'react-router-dom'

const products = [
  { name: 'Existing voter', description: 'Welcome back voter, click to vote', href: '/existingvoter', icon: UserIcon },
  { name: 'New voter', description: 'Welcome, click to register', href: '/newvoter', icon: UserPlusIcon },
]

export default function Navigation() {
  return (
    <header className="bg-white pb-6 sticky top-0">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between pt-8 pl-20">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
              <svg className='h-12 w-auto color-red-600' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
          </Link>
        </div>
        <PopoverGroup className="flex justify-end pr-24 lg:flex-1 hover:text-red-600 hover:stroke-red-600">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-900 hover:text-red-600">
              Vote here
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel className="absolute right-0 mt-3 max-w-md w-full sm:w-96 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-red-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </nav>
    </header>
  )
}
