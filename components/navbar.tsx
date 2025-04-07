'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const userLoggedIn = false; // Fake auth for demo
    setIsAuthenticated(userLoggedIn);
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false); // Replace with actual logout logic
    window.location.href = '/'; // Redirect to login page
  };

  return (
    <nav
      ref={navbarRef}
      className="top-0 z-50 fixed place-content-center bg-white shadow-md py-2 w-full h-20 transition-all duration-300"
    >
      <div className="flex justify-between items-center mx-auto px-4 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="font-bold text-purple-600 text-2xl">
          <span>LOA Coach</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 font-bold text-[#000]/50 text-lg">
          <Link href="/" className='hover:text-[#1F2D3D] duration-200 ease-in'>Home</Link>
          <Link href="/about" className='hover:text-[#1F2D3D] duration-200 ease-in'>About Us</Link>
          <Link href="/courses" className='hover:text-[#1F2D3D] duration-200 ease-in' >Courses</Link>
          <Link href="/success-stories" className='hover:text-[#1F2D3D] duration-200 ease-in' >Success Stories</Link>
          <Link href="/resources" className='hover:text-[#1F2D3D] duration-200 ease-in' >Resources</Link>
          <Link href="/contact" className='hover:text-[#1F2D3D] duration-200 ease-in' >Contact</Link>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-[#1F2D3D]/50 hover:text-[#1F2D3D] duration-200 ease-in cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="bg-gradient-to-tl from-[#6198aa] to-[#fff] px-3 py-1.5 rounded-full text-[#1F2D3D] hover:scale-105 duration-200 ease-in">
              Join Now
            </Link>
          )}
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-purple-600 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 bg-white shadow-lg px-4 pt-4 pb-6 font-medium text-gray-700">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link href="/success-stories" onClick={() => setMenuOpen(false)}>Success Stories</Link>
          <Link href="/resources" onClick={() => setMenuOpen(false)}>Resources</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          {isAuthenticated ? (
            <button onClick={() => { setMenuOpen(false); handleLogout(); }} className="text-red-500 text-left">
              Logout
            </button>
          ) : (
            <Link href="/login" onClick={() => setMenuOpen(false)} className="bg-purple-600 px-4 py-2 rounded-full w-fit text-white">
              Join Now
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}