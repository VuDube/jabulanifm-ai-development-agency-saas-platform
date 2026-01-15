import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
export function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);
  const handleClose = () => setIsVisible(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Success!", {
      description: "The AI SaaS Checklist is on its way to your inbox.",
    });
    setIsVisible(false);
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 z-[101] pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-slate-950 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden pointer-events-auto relative"
            >
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-1"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="bg-orange-500 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Sparkles className="w-32 h-32" />
                </div>
                <Badge className="bg-white/20 text-white mb-4 border-white/40">Limited Offer</Badge>
                <h3 className="text-3xl font-display font-bold">Wait! Don't Miss Out.</h3>
                <p className="text-white/80 mt-2 text-lg">
                  Get our <strong>AI SaaS Development Checklist (FREE)</strong> for South African founders.
                </p>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-950 flex items-center justify-center text-orange-500 shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Learn the exact tech stack we use to build resilient, POPIA-compliant apps in 8 weeks or less.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    placeholder="Your Work Email" 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-secondary"
                  />
                  <Button type="submit" className="w-full h-12 btn-gradient font-bold text-lg">
                    Send My Checklist <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
                  Trusted by 15+ SA Enterprise Partners
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border ${className}`}>
      {children}
    </span>
  );
}