import React from 'react';
import { Section } from '@/components/ui/Section';
import { PRICING_TIERS } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
export function PricingPage() {
  return (
    <div className="bg-background">
      <Section className="text-center">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Transparent Pricing</h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          Scale your facility intelligence with predictable monthly costs. No hidden fees.
        </p>
      </Section>
      <Section containerClassName="max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => (
            <Card 
              key={tier.name} 
              className={cn(
                "relative flex flex-col transition-transform hover:-translate-y-1 duration-300",
                tier.popular ? "border-orange-500 shadow-glow border-2" : "border-border/50 shadow-soft"
              )}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription className="min-h-[40px] mt-2">{tier.description}</CardDescription>
                <div className="mt-6 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-muted-foreground font-medium">/pm</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-8">
                <Button 
                  asChild
                  className={cn(
                    "w-full h-12 text-lg font-bold",
                    tier.popular ? "btn-gradient" : "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                  )}
                >
                  <Link to="/contact">{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="bg-slate-50 dark:bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Included in Every Plan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="font-bold">Security First</h4>
              <p className="text-sm text-muted-foreground">POPIA compliance is built into every database schema we design.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold">Lightning Performance</h4>
              <p className="text-sm text-muted-foreground">Powered by Cloudflare Workers for sub-100ms response times across SA.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold">Mobile Native</h4>
              <p className="text-sm text-muted-foreground">All solutions work perfectly as Progressive Web Apps on field technician smartphones.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold">Local Training</h4>
              <p className="text-sm text-muted-foreground">On-site training sessions for teams in Gauteng, KZN, and Western Cape.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}