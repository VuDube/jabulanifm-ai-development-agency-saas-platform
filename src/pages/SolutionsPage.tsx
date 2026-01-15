import React from 'react';
import { Section } from '@/components/ui/Section';
import { SOLUTIONS_DATA } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function SolutionsPage() {
  return (
    <div className="bg-background">
      <Section className="bg-slate-950 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Core Offerings</h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            12 specialized AI and SaaS modules designed to integrate seamlessly into your business workflow.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS_DATA.map((item) => (
            <Card key={item.id} className="group hover:shadow-glow transition-all duration-300 border-border/50 flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="bg-accent/50">{item.category}</Badge>
                </div>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
                <p className="text-muted-foreground text-sm line-clamp-2 mt-2">{item.description}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-2 mt-4">
                  {item.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center border-t pt-6 bg-slate-50/50 dark:bg-white/5 rounded-b-lg">
                <span className="font-bold text-orange-600">{item.pricingHint}</span>
                <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform" asChild>
                  <Link to="/contact">Demo <ArrowUpRight className="ml-1 w-4 h-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="bg-accent/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Don't see exactly what you need?</h2>
          <p className="text-muted-foreground text-lg">
            Our "Bespoke SaaS Engine" allows us to build entirely custom systems from the ground up for unique South African industrial requirements.
          </p>
          <Button size="lg" className="btn-gradient" asChild>
            <Link to="/contact">Inquire About Custom Dev</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}