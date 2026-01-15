import React from 'react';
import { Section } from '@/components/ui/Section';
import { SOLUTIONS_DATA } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowUpRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
export function SolutionsPage() {
  const groups = ['Facilities', 'Custom Apps', 'AI', 'Learning'];
  return (
    <div className="bg-background">
      <Section className="bg-slate-950 text-white border-b border-white/5">
        <div className="max-w-4xl">
          <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Agency Catalogue</Badge>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Custom SaaS Platforms & AI Solutions</h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            12 specialized modules engineered for the South African industrial and corporate landscape.
            From field-ready PWAs to executive AI assistants.
          </p>
        </div>
      </Section>
      {groups.map((group) => (
        <Section key={group} className="border-b last:border-none">
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold flex items-center gap-4">
              <span className="w-8 h-1 bg-orange-500 rounded-full" />
              {group} Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS_DATA.filter(s => s.category === group).map((item) => (
              <Card 
                key={item.id} 
                className={cn(
                  "group hover:shadow-glow transition-all duration-300 flex flex-col",
                  item.hero ? "border-orange-500 border-2" : "border-border/50"
                )}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                      item.hero ? "bg-orange-500 text-white" : "bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white"
                    )}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    {item.hero && <Badge className="bg-orange-500">Flagship</Badge>}
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="aspect-video bg-slate-100 dark:bg-slate-900 rounded-lg mb-6 flex items-center justify-center overflow-hidden border relative group/video">
                    <img 
                      src={`https://images.unsplash.com/photo-1551288049-bbda4865cda1?auto=format&fit=crop&q=80&w=400&h=225`} 
                      alt={item.title} 
                      className="w-full h-full object-cover opacity-60 grayscale group-hover/video:grayscale-0 transition-all"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-12 h-12 text-orange-500 opacity-80" />
                    </div>
                    <span className="absolute bottom-2 right-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Demo Video</span>
                  </div>
                  <div className="space-y-2">
                    {item.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-6 bg-slate-50/50 dark:bg-white/5 rounded-b-lg">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">Starting At</span>
                    <span className="font-bold text-orange-600">{item.pricingHint}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform" asChild>
                    <Link to="/contact">Demo <ArrowUpRight className="ml-1 w-4 h-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Section>
      ))}
      <Section className="bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Don't see exactly what you need?</h2>
          <p className="text-white/90 text-lg">
            Our "Bespoke SaaS Engine" allows us to build entirely custom systems from the ground up for unique South African industrial requirements.
          </p>
          <Button size="lg" variant="secondary" className="text-orange-600 bg-white hover:bg-slate-100" asChild>
            <Link to="/contact">Inquire About Custom Dev</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}