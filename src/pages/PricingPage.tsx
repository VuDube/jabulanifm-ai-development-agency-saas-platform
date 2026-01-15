import React from 'react';
import { Section } from '@/components/ui/Section';
import { PRICING_TIERS } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Building2, Layout, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
export function PricingPage() {
  return (
    <div className="bg-background">
      <Section className="text-center bg-slate-950 text-white py-24 md:py-32">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">SaaS Development Pricing <span className="text-orange-500">South Africa</span></h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          Scale your intelligence with predictable costs. Transparent tiers designed for local enterprises.
        </p>
      </Section>
      <Section containerClassName="max-w-6xl -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "relative flex flex-col transition-all hover:-translate-y-2 duration-300 bg-white dark:bg-slate-950",
                tier.popular ? "border-orange-500 shadow-glow border-2 scale-105" : "border-border/50 shadow-soft"
              )}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-10">
                <CardTitle className="text-3xl font-bold">{tier.name}</CardTitle>
                <CardDescription className="min-h-[48px] mt-2 text-base leading-snug">{tier.description}</CardDescription>
                <div className="mt-8 flex flex-col items-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold tracking-tight">{tier.price}</span>
                    {tier.price.startsWith('R') && <span className="text-muted-foreground font-medium">/pm</span>}
                  </div>
                  {tier.name === 'Enterprise' && (
                    <span className="text-sm font-bold text-orange-600 mt-2 uppercase tracking-widest">Bespoke Roadmap</span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-5 px-8">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-foreground/90 font-medium">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-8 pb-10 px-8">
                <Button
                  asChild
                  className={cn(
                    "w-full h-14 text-lg font-bold shadow-lg",
                    tier.popular ? "btn-gradient" : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90"
                  )}
                >
                  <Link to="/contact">{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-16 text-center">Development Cost Transparency</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-soft bg-white dark:bg-slate-900">
              <CardHeader>
                <Building2 className="w-10 h-10 text-orange-500 mb-2" />
                <CardTitle>Facilities Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Standard JabulaniFM User</span>
                  <span className="font-bold">R99 /mo</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Power User (Admin)</span>
                  <span className="font-bold">R399 /mo</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">IoT Node Integration</span>
                  <span className="font-bold">From R1,200</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-soft bg-white dark:bg-slate-900">
              <CardHeader>
                <Layout className="w-10 h-10 text-orange-500 mb-2" />
                <CardTitle>Custom SaaS & AI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">MVP SaaS Roadmap</span>
                  <span className="font-bold text-orange-600">From R75,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-muted-foreground">Full Scale Platform</span>
                  <span className="font-bold text-orange-600">From R250,000</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Custom AI Chatbot Setup</span>
                  <span className="font-bold text-orange-600">R25,000 Once-off</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
      <Section className="text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <Zap className="w-12 h-12 text-orange-500 mx-auto" />
          <h2 className="text-3xl font-bold">Resilient Infrastructure Included</h2>
          <p className="text-muted-foreground text-lg">
            All plans include POPIA-compliant hosting on Cloudflare's global network, 
            ensuring sub-100ms response times and built-in DDoS protection for South African businesses.
          </p>
        </div>
      </Section>
    </div>
  );
}