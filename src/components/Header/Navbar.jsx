import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
   const links =  <>
    <NavLink to ='/'>
    <button className='mr-2 btn btn-ghost hover:bg-[#23BE0A] hover:text-white'>Home</button>
    </NavLink>
    <NavLink to ='/listed-books'>
    <button className='mr-2 btn btn-ghost hover:bg-[#23BE0A] hover:text-white'>Listed Books</button>
    </NavLink>
    <NavLink to ='/pages-to-read'>
    <button className='mr-2 btn btn-ghost hover:bg-[#23BE0A] hover:text-white'>Pages to Read</button>
    </NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            id='res-bar'
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul id='bar' className="menu menu-horizontal px-1">
                    {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <a className="btn btn-success text-white">Sign in</a>
                    <a className="btn btn-info text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;