import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import logoImage from 'figma:asset/fc32a1188f420b43c5a81277275b1c17d9480550.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Objectives', href: '/objectives' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Teams', href: '/teams' },
    { name: 'Contact', href: '/contacts' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/60 corporate-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logoImage} 
              alt="T&ES Logo" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-corporate-blue leading-none transition-colors duration-300 group-hover:text-corporate-orange">
                TECHNICAL & ENGINEERING
              </span>
              <span className="text-sm font-bold text-corporate-orange leading-none">
                SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  isActiveLink(item.href)
                    ? 'bg-corporate-orange text-white orange-shadow hover:bg-corporate-orange-dark'
                    : 'text-corporate-blue hover:text-corporate-orange hover:bg-orange-50/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-corporate-blue hover:text-corporate-orange hover:bg-orange-50/80"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-white/95 backdrop-blur-md">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <img src={logoImage} alt="T&ES Logo" className="h-8 w-auto" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-corporate-blue leading-none">T&ES</span>
                      <span className="text-xs font-bold text-corporate-orange leading-none">SOLUTIONS</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-corporate-blue hover:text-corporate-orange"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                        isActiveLink(item.href)
                          ? 'bg-corporate-orange text-white orange-shadow'
                          : 'text-corporate-blue hover:text-corporate-orange hover:bg-orange-50/80'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}