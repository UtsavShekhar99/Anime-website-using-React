import { useState, useEffect } from "react";
import { Menu, X, Search, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/10 backdrop-blur-lg py-0.5' 
        : 'bg-white/10 backdrop-blur-lg py-1'
    } text-white rounded-b-2xl`}>

      <div className="w-full mx-auto px-2 sm:px-3 lg:px-6">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo */}
          <a href="/" className="flex-shrink-0 group relative">
            <img 
              src="/assets/navbar-section-name.png" 
              alt="Logo" 
              className="h-16 transition-all duration-300 group-hover:brightness-125" 
            />
            <div className="absolute inset-0 bg-red-500 opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>

          {/* Desktop Nav Links */}
          <div className="text-base hidden md:flex flex-grow justify-center ml-8 space-x-12">
            {['home', 'movies', 'series','gallery'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                onClick={() => setActiveLink(item)}
                className={`relative font-semibold text-white uppercase tracking-wider transition-all duration-300 ${
                  activeLink === item ? 'text-red-500' : 'hover:text-red-300'
                }`}
              >
                <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                <span 
                  className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ${
                    activeLink === item ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Desktop Search and Login */}
          <div className="text-base hidden md:flex items-center space-x-4 mr-1 md:mr-3">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white/10 text-white placeholder-white/70 px-3 py-1.5 rounded-full border border-white/20 focus:outline-none focus:ring-1 focus:ring-red-500 text-sm w-36 transition-all duration-300 group-hover:w-44"
              />
              <Search size={16} className="absolute right-3 top-2 text-white/70 group-hover:text-red-400 transition-colors duration-300" />
            </div>
            <button className="hover:text-red-400 transition duration-300 flex items-center space-x-2 group relative overflow-hidden py-1.5 px-3 rounded-full">
              <span className="absolute inset-0 w-0 bg-red-500/10 group-hover:w-full transition-all duration-500"></span>
              <User size={18} className="relative z-10" />
              <span className="font-medium uppercase tracking-wider text-sm relative z-10">Login</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden mr-1 p-1.5 rounded-full hover:bg-white/10 transition-colors duration-300" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/10 text-white backdrop-blur-lg border-t border-white/20 animate-slideDown">
          {['home', 'movies', 'series','gallery'].map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              className="block px-5 py-2.5 hover:bg-red-900/20 transition-colors duration-300 uppercase tracking-wider font-medium border-l-2 border-transparent hover:border-red-500"
              onClick={() => {
                setActiveLink(item);
                setIsOpen(false);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <div className="border-t border-white/20 mt-1 pt-1">
            <a href="#" className="px-5 py-2.5 hover:bg-red-900/20 transition-colors duration-300 flex items-center">
              <Search size={16} className="mr-2" />
              <span className="uppercase tracking-wider font-medium">Search</span>
            </a>
            <a href="#" className="px-5 py-2.5 hover:bg-red-900/20 transition-colors duration-300 flex items-center">
              <User size={16} className="mr-2" />
              <span className="uppercase tracking-wider font-medium">Login</span>
            </a>
          </div>  
        </div>
      )}
    </nav>
  );
};

export default Navbar;
