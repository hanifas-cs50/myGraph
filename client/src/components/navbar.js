import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full font-bold bg-cararra-300">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto py-4 px-8 lg:border-b-4 border-nepal-900">
        <Link to="/">
          <span className="self-center text-2xl whitespace-nowrap text-nepal-900 md:hover:text-nepal-950">MyGraph</span>
        </Link>
        <button onClick={() => setOpen(!open)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-nepal-900 rounded-lg md:hidden hover:bg-nepal-100">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={open ? 'block w-full md:block md:w-auto' : 'hidden w-full md:block md:w-auto'}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 border-4 border-nepal-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link to="/" className="block py-2 px-3 text-nepal-700 rounded hover:bg-nepal-100 md:hover:bg-transparent md:hover:text-nepal-950 md:p-0">Home</Link>
            </li>
            <li>
              <Link to="form" className="block py-2 px-3 text-nepal-700 rounded hover:bg-nepal-100 md:hover:bg-transparent md:hover:text-nepal-950 md:p-0">Add data</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}