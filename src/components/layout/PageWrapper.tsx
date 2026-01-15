import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Toaster } from '@/components/ui/sonner';
interface PageWrapperProps {
  children: React.ReactNode;
}
export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-orange-500/30 selection:text-orange-900">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}