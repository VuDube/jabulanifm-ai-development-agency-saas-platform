import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Zap, Heart } from 'lucide-react';
export function AboutPage() {
  return (
    <div className="bg-background">
      <Section className="bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">Empowering SA with <span className="text-orange-500">Intelligent</span> Software.</h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            JabulaniFM was born from a simple observation: South African Facilities Management 
            is complex, demanding, and underserved by global tech giants. We build solutions 
            that understand the nuance of our local market.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">The Founder's Story</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Started by industry veterans who spent years in the trenches of multi-site commercial operations, 
              JabulaniFM (meaning "Rejoice in FM") was founded to eliminate the friction between technical 
              work and digital reporting.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We saw talented facility managers drowning in spreadsheets and Eskom-induced chaos. 
              Our mission is to bring high-performance AI tools that handle the "thinking" so 
              the humans can focus on the "doing."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] bg-orange-500 rounded-2xl overflow-hidden shadow-glow">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" alt="Office Culture" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="aspect-[4/5] bg-slate-900 rounded-2xl overflow-hidden mt-8">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" alt="Modern Architecture" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-accent/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Our Differentiators</h2>
          <p className="text-muted-foreground mt-4">Why local giants trust JabulaniFM for their digital future.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-soft">
            <CardContent className="p-8 space-y-4">
              <Zap className="w-10 h-10 text-orange-500" />
              <h3 className="text-xl font-bold">Load-Shedding Resilience</h3>
              <p className="text-muted-foreground">
                Our AI algorithms proactively reschedule heavy energy tasks and optimize battery systems 
                based on real-time Eskom load-shedding schedules.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-soft">
            <CardContent className="p-8 space-y-4">
              <ShieldCheck className="w-10 h-10 text-orange-500" />
              <h3 className="text-xl font-bold">POPIA DNA</h3>
              <p className="text-muted-foreground">
                We don't just "follow" POPIA; it's baked into our architecture. 
                Data residency and encryption follow the strictest local governance standards.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-soft">
            <CardContent className="p-8 space-y-4">
              <Heart className="w-10 h-10 text-orange-500" />
              <h3 className="text-xl font-bold">Local Support</h3>
              <p className="text-muted-foreground">
                Based in Sandton and Cape Town. We are on-site when you need us, speaking your 
                language and understanding your site constraints.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
      <Section className="text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Join the Agency</h2>
          <p className="text-muted-foreground text-lg">
            We're always looking for talented AI developers and FM consultants who want to 
            build the future of South African business.
          </p>
          <button className="font-bold underline text-orange-500 hover:text-orange-600">View Open Roles</button>
        </div>
      </Section>
    </div>
  );
}