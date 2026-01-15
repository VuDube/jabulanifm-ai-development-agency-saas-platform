import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Brain, Rocket, Shield, MonitorCheck, LayoutDashboard, BrainCircuit } from 'lucide-react';
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
            Empowering South African Enterprise
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display text-white max-w-5xl mx-auto"
          >
            AI Development Agency for <span className="text-gradient">South African Business</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body text-slate-400 max-w-2xl mx-auto"
          >
            Building high-performance SaaS, custom dashboards, and AI automation that thrive in the local market.
            We turn facility challenges into rejoiced digital outcomes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button size="lg" className="btn-gradient text-lg h-14 px-8" asChild>
              <Link to="/contact">Launch Your Custom Solution <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 text-lg h-14 px-8" asChild>
              <Link to="/solutions">Browse Solutions</Link>
            </Button>
          </motion.div>
        </div>
      </Section>
      {/* Pillars Section */}
      <Section className="bg-background">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold">We build what your operations need</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Resilient software architecture designed for South African constraints.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Facilities Management SaaS',
              description: 'AI-driven platforms that manage complex multi-site operations with native load-shedding intelligence.',
              icon: LayoutDashboard,
            },
            {
              title: 'Custom Business Dashboards',
              description: 'Real-time visibility into your KPIs, technical assets, and financial metrics via high-performance PWAs.',
              icon: MonitorCheck,
            },
            {
              title: 'AI Automation & Compliance',
              description: 'Custom NLP agents and robotic process automation with baked-in POPIA data residency governance.',
              icon: BrainCircuit,
            }
          ].map((pillar, idx) => (
            <Card key={idx} className="border-border/50 hover:border-orange-500/50 transition-colors shadow-soft">
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
      {/* Social Proof Section */}
      <Section className="bg-slate-50 dark:bg-slate-900 py-12">
        <div className="text-center mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Trusted by South African Leaders</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 mb-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <span className="text-2xl font-bold italic">PRO-TECH</span>
          <span className="text-2xl font-bold italic">CAPITAL.CO</span>
          <span className="text-2xl font-bold italic">STELLAR_FM</span>
          <span className="text-2xl font-bold italic">SA_LOGISTICS</span>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium text-orange-600">
            15+ SA companies | 500+ users | 99.9% uptime
          </p>
        </div>
      </Section>
      {/* Results Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Proven ROI in the Local Market</h2>
            <div className="space-y-6">
              {[
                '60% Reduction in operational downtime',
                'Real-time POPIA data governance',
                'Native ZAR localized support and billing',
                'Offline-first tech for mobile field work'
              ].map((text, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <CheckCircle2 className="text-orange-500 w-6 h-6 shrink-0" />
                  <span className="text-lg font-medium">{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button size="lg" className="btn-gradient" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            {TESTIMONIALS.map((t, i) => (
              <Card key={i} className="bg-orange-500/5 border-orange-500/10 shadow-soft">
                <CardContent className="p-8">
                  <p className="italic text-xl mb-6 text-foreground/90">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
      {/* CTA Section */}
      <Section className="bg-orange-600">
        <div className="text-center text-white space-y-8">
          <h2 className="text-3xl md:text-6xl font-display font-bold">Start Your Project Today</h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto">
            Schedule a free 30-minute system audit. We'll show you exactly where AI can save you costs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-orange-600 bg-white hover:bg-slate-100 text-lg h-14 px-12" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}