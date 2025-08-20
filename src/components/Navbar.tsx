import { useEffect, useState } from 'react';
import cn from '../utils/cn';
import { log } from '../utils/logger';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: "Home", href: "#intro" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const handleMenuOpen = () => {
    log("handle menu open");
    console.log("hello")
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav
      className={cn(
        "fixed w-full bg-violet-400 z-40 flex items-center justify-between px-4",
        isScrolled
          ? "py-3 backdrop-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div
        className=''
      >
        <a
          className='text-lg font-bold text-amber-50'
          href="#nerd"
        >
          <span className='text-glow relative z-10'>
            Eucalyptus
          </span>
        </a>
      </div>

      <div className="flex items-center">
        {/* desktop nav start */}
        <div className='hidden md:flex gap-8'>
          {
            navItems.map((item, key) =>
              <a
                key={key + item.href}
                href={item.href}
              >
                {item.name}
              </a>
            )
          }
          <ThemeToggle />
        </div>
        {/* desktop nav end */}

        {/* mobile nav start */}
        <div className='md:hidden z-50 flex gap-4'>
          <button
            type='button'
            onClick={handleMenuOpen}
            aria-label={
              isMenuOpen
                ? "Close Menu"
                : "Open Menu"
            }
          >
            {
              isMenuOpen
                ? <X size={24} />
                : <Menu size={24} />
            }
          </button>
          <ThemeToggle />
        </div>
        <div
          className={cn(
            "fixed inset-0 backdrop-blur-md z-30 flex items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div
            className='flex flex-col gap-8 text-xl'
          >
            {
              navItems.map((item, key) =>
                <a
                  key={key + item.href}
                  href={item.href}
                  onClick={handleMenuOpen}
                >
                  {item.name}
                </a>
              )
            }
          </div>
        </div>
        {/* mobile nav end */}
      </div>
    </nav >
  )
}
