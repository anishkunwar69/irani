"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import Container from './Container';

interface NavbarSimpleProps {
  activeItem?: string;
}

function NavbarSimple({ activeItem = 'Home' }: NavbarSimpleProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/#our-story' },
    { name: 'Badda\'s Chiya', path: '/joint-venture' },
    { name: 'Contact', path: '/#find-us' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
      scrolled ? 'bg-[#0C1F0E]/90 backdrop-blur-md shadow-lg' : 'bg-[#0C1F0E]/80 backdrop-blur-sm'
    }`}>
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Irani Chiya" 
              width={65} 
              height={65} 
            />
            <div>
              <h1 className="text-xl font-bold font-lora text-white">
                Irani <span className="text-[#C7962D]">Chiya</span>
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-quicksand">JOINT VENTURE</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.path}
                className={`relative transition-colors duration-300 font-medium ${
                  activeItem === item.name 
                    ? 'text-[#C7962D]' 
                    : 'text-white hover:text-[#C7962D]'
                }`}
              >
                <span>{item.name}</span>
                {activeItem === item.name && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-[#C7962D]"></span>
                )}
                {activeItem !== item.name && (
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C7962D] group-hover:w-full transition-all duration-300"></span>
                )}
              </Link>
            ))}
            
            <Link 
              href="/#find-us" 
              className="ml-3 px-5 py-2 bg-[#C7962D]/10 hover:bg-[#C7962D]/20 text-[#C7962D] border border-[#C7962D]/30 rounded-lg font-medium transition-all duration-300 hover:shadow-glow-sm"
            >
              Visit Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden text-white focus:outline-none relative z-10"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiOutlineMenuAlt3 className="" size={30} />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0C1F0E]/95 backdrop-blur-md border-t border-white/10">
          <Container>
            <nav className="flex flex-col py-5 space-y-1">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg transition-colors duration-300 ${
                    activeItem === item.name 
                      ? 'text-[#C7962D] bg-white/5' 
                      : 'text-white hover:text-[#C7962D] hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/#find-us"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 mt-3 bg-[#C7962D]/10 hover:bg-[#C7962D]/20 text-[#C7962D] border border-[#C7962D]/30 rounded-lg transition-all duration-300"
              >
                Visit Us
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

export default NavbarSimple; 