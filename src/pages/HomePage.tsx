import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Brain, Rocket, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/components/ui/Section';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '@/lib/data';
export function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Section className="relative pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden bg-slate-950">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(243,128,32,0.1),transparent_50%)]" />
        <div className="relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-medium"
          >
            <Zap className="w-4 h-4" />
            Next-Gen AI for South African Facilities
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display text-white max-w-4xl mx-auto"
          >
            AI Development Agency for <span className="text-gradient">SA Business SaaS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body text-slate-400 max-w-2xl mx-auto"
          >
            We bridge the gap between complex Facilities Management and powerful AI, 
            delivering custom software solutions that thrive in the South African context.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button size="lg" className="btn-gradient text-lg h-14 px-8" asChild>
              <Link to="/contact">Schedule Free Consultation <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 text-lg h-14 px-8" asChild>
              <Link to="/solutions">Browse Solutions</Link>
            </Button>
          </motion.div>
        </div>
      </Section>
      {/* 3 Pillars Overview */}
      <Section className="bg-background">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Our Core Pillars</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Engineered for resilience, efficiency, and growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'AI Intelligence',
              description: 'Neural networks tailored for property yield, maintenance predictions, and staff efficiency.',
              icon: Brain,
            },
            {
              title: 'FM DNA',
              description: 'Software built with a deep understanding of physical facility operations and technical assets.',
              icon: Rocket,
            },
            {
              title: 'Local Resilience',
              description: 'Solutions designed to handle load-shedding, POPIA compliance, and South African market nuances.',
              icon: Shield,
            }
          ].map((pillar, idx) => (
            <Card key={idx} className="border-border/50 hover:border-orange-500/50 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      {/* Social Proof Logo Strip */}
      <Section className="bg-slate-50 dark:bg-slate-900 py-12">
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <span className="text-2xl font-bold italic">PRO-TECH</span>
          <span className="text-2xl font-bold italic">CAPITAL.CO</span>
          <span className="text-2xl font-bold italic">STELLAR_FM</span>
          <span className="text-2xl font-bold italic">SA_LOGISTICS</span>
        </div>
      </Section>
      {/* Testimonials */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Built for results.</h2>
            <div className="space-y-4">
              <div className="flex gap-2"><CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0" /> <span>60% Reduction in operational downtime</span></div>
              <div className="flex gap-2"><CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0" /> <span>Real-time POPIA data governance</span></div>
              <div className="flex gap-2"><CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0" /> <span>Native ZAR localized support</span></div>
            </div>
          </div>
          <div className="space-y-6">
            {(TESTIMONIALS || []).map((t, i) => (
              <Card key={i} className="bg-accent/30 border-none">
                <CardContent className="p-6">
                  <p className="italic text-lg mb-4">"{t.text}"</p>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
      {/* CTA Section */}
      <Section className="bg-orange-500">
        <div className="text-center text-white space-y-8">
          <h2 className="text-3xl md:text-6xl font-display font-bold">Ready to rejoice in automation?</h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto">
            Schedule a free 30-minute consultation to see how AI can transform your facilities.
          </p>
          <Button size="lg" variant="secondary" className="text-orange-600 bg-white hover:bg-slate-100 text-lg h-14 px-12" asChild>
            <Link to="/contact">Let's Talk Business</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}