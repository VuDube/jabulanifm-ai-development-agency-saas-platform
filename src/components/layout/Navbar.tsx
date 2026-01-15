import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/lib/data';
import { cn } from '@/lib/utils';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-display font-bold text-foreground tracking-tight">
              Jabulani<span className="text-orange-500">FM</span>
            </span>
          </Link>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-orange-500",
                  location.pathname === link.href ? "text-orange-500" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="btn-gradient">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
          {/* Mobile Toggle */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-4 text-base font-medium rounded-md",
                  location.pathname === link.href ? "bg-accent text-orange-500" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full btn-gradient">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}