import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Toaster } from '@/components/ui/sonner';
import { ExitIntentModal } from '@/components/modals/ExitIntentModal';
import { MessageSquare } from 'lucide-react';
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
      {/* Global Conversions */}
      <ExitIntentModal />
      <Toaster richColors position="top-right" />
      {/* Live Chat Placeholder Widget */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <button 
          className="w-14 h-14 bg-orange-600 text-white rounded-full shadow-glow flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
          aria-label="Open Chat"
        >
          <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with an AI Architect
          </span>
        </button>
      </div>
    </div>
  );
}