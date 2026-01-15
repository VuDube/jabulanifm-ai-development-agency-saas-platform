import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Linkedin, Twitter, Github } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';
export function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-orange-500" />
              <span className="text-xl font-display font-bold">JabulaniFM</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering South African businesses with high-performance AI and smart Facilities Management solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-slate-400 hover:text-orange-500 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Expertise</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Facilities Management AI</li>
              <li>Business SaaS Development</li>
              <li>Predictive Energy Analytics</li>
              <li>Learning Management Systems</li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>POPIA Policy</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Status</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} JabulaniFM Agency. All rights reserved.</p>
          <p>Powered by Cloudflare Workers & React</p>
        </div>
      </div>
    </footer>
  );
}