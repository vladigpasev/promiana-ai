import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost nav:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href='/posts/post/6'>Изкуствен интелект</Link></li>
            <li><Link href='/posts/post/23'>Прогнози</Link></li>
            <li><Link href="/posts">Статии</Link></li>
            <li><Link href="/posts/post/22">Защо да се информирам?</Link></li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" href='/'>Промяна AI</Link>
      </div>
      <div className="navbar-end hidden nav:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href='/posts/post/6'>Изкуствен интелект</Link></li>
          <li><Link href='/posts/post/23'>Прогнози</Link></li>
          <li><Link href="/posts">Статии</Link></li>
          <li><Link href="/posts/post/22">Защо да се информирам?</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar