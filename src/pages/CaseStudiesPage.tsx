import React from 'react';
import { Section } from '@/components/ui/Section';
import { CASE_STUDIES } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
export function CaseStudiesPage() {
  return (
    <div className="bg-background">
      <Section className="bg-slate-950 text-white py-24 md:py-32">
        <div className="max-w-4xl">
          <Badge className="bg-orange-500 hover:bg-orange-600 mb-6">Proven Success</Badge>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Real Results for <span className="text-orange-500">SA Industry</span></h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">
            See how JabulaniFM is transforming commercial operations through custom AI and resilient SaaS development.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {CASE_STUDIES.map((study) => (
            <Card key={study.id} className="overflow-hidden border-border/50 shadow-soft hover:shadow-glow transition-all flex flex-col">
              <CardHeader className="p-0">
                <div className="aspect-video bg-slate-100 dark:bg-slate-900 relative">
                  <img 
                    src={`https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800&h=450`} 
                    alt={study.title} 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-6 left-6">
                    <div className="bg-white dark:bg-slate-950 px-4 py-2 rounded-lg shadow-lg">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{study.title}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 flex-1">
                <div className="flex items-center gap-2 text-orange-600 mb-4">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-3xl font-bold tracking-tight">{study.metric}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{study.outcome}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {study.description}
                </p>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button variant="outline" className="group" asChild>
                  <Link to="/contact">Read Full Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="bg-orange-500 rounded-3xl mx-4 mb-16 overflow-hidden">
        <div className="text-center text-white space-y-8 py-16 px-4">
          <Sparkles className="w-12 h-12 mx-auto" />
          <h2 className="text-3xl md:text-5xl font-display font-bold">Ready to be our next success story?</h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto">
            Our AI architects are ready to evaluate your current systems and find the optimization gaps.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-slate-100 h-14 px-12 text-lg font-bold" asChild>
            <Link to="/contact">Book Your Free Audit</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}