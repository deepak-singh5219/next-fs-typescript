import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex p-5 flex-col md:flex-row items-center justify-between">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    <Link href="/addhero" className="inline-flex items-center bg-slate-500 text-white bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">Add New Identity</Link>
  </div>
</header>
    </div>
  )
}

export default Navbar