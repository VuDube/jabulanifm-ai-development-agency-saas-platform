import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Zap, Heart, CloudLightning, Scale, Users } from 'lucide-react';
export function AboutPage() {
  return (
    <div className="bg-background">
      <Section className="bg-slate-950 text-white overflow-hidden relative pt-32 pb-48">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-[0.9]">South African <span className="text-orange-500">AI Development</span> Agency.</h1>
          <p className="text-slate-400 text-2xl leading-relaxed max-w-3xl">
            We are a collective of industry veterans in Legal Tech, Facilities Management, and AI engineering,
            dedicated to solving the specific friction points of the South African market.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold">The Agency Story</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded by engineers who spent 15+ combined years in the trenches of commercial property management
                and corporate legal departments, JabulaniFM was created to address a glaring gap: global tech
                doesn't understand South African constraints.
              </p>
              <p>
                We saw world-class facilities managers defeated by load-shedding schedules and manual POPIA audits.
                Our mission is to bring high-performance, resilient AI tools that handle the "heavy thinking" so
                local teams can focus on growth and service excellence.
              </p>
              <p className="font-bold text-orange-600">
                Jabulani means "Rejoice" — we want our clients to rejoice in the power of their own data.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="aspect-[4/5] bg-orange-500 rounded-2xl overflow-hidden shadow-glow">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" alt="Office Culture" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="aspect-[4/5] bg-slate-900 rounded-2xl overflow-hidden mt-12">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" alt="Modern Architecture" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-slate-50 dark:bg-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Our Differentiators</h2>
          <p className="text-muted-foreground mt-4 text-xl">Engineered for the South African context from day one.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: CloudLightning,
              title: 'Load-Shedding Resilience',
              text: 'Our AI algorithms proactively reschedule heavy energy tasks and optimize battery systems based on real-time Eskom schedules.'
            },
            {
              icon: Scale,
              title: 'POPIA DNA',
              text: 'Data residency and encryption follow the strictest local governance standards. Compliance is baked into our code, not just a checkbox.'
            },
            {
              icon: Zap,
              title: 'Cloudflare Performance',
              text: 'Powered by the Edge. We deliver sub-100ms response times across the country, even on low-bandwidth field connections.'
            },
            {
              icon: ShieldCheck,
              title: 'Technical FM DNA',
              text: 'We understand technical assets. Our software is built by people who know the difference between a chiller and a cooling tower.'
            },
            {
              icon: Heart,
              title: 'Local Support',
              text: 'Based in Sandton and Cape Town. We are on-site when you need us, speaking your language and understanding your site constraints.'
            },
            {
              icon: Users,
              title: 'Team Experience',
              text: '15+ years of combined experience in high-stakes legal, FM, and software environments. We��ve been where you are.'
            }
          ].map((item, i) => (
            <Card key={i} className="border-none shadow-soft hover:shadow-glow transition-all">
              <CardContent className="p-10 space-y-4">
                <item.icon className="w-12 h-12 text-orange-500" />
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-display font-bold">Join the Agency</h2>
          <p className="text-muted-foreground text-xl">
            We're always looking for talented AI developers and FM consultants who want to
            build the future of South African business.
          </p>
          <Button size="lg" variant="link" className="text-orange-500 text-xl font-bold hover:text-orange-600 underline">
            View Open Roles
          </Button>
        </div>
      </Section>
    </div>
  );
}