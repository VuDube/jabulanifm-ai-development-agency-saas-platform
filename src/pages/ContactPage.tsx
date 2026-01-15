import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Clock } from 'lucide-react';
import { toast } from 'sonner';
export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Audit Request Received!", {
      description: "Our AI architects will reach out within 2 hours.",
    });
    (e.target as HTMLFormElement).reset();
  };
  return (
    <div className="bg-background">
      <Section className="bg-orange-500 text-white py-24">
        <div className="max-w-4xl">
          <Badge className="bg-white text-orange-600 mb-6 font-bold uppercase tracking-widest">Free System Audit</Badge>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6">Let's Build <span className="text-orange-950/20">Together</span></h1>
          <p className="text-white/90 text-2xl max-w-2xl leading-relaxed">
            Get a free 30-minute system audit and custom roadmap with our senior AI architects.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Our Team</h2>
              <div className="space-y-8">
                {[
                  { icon: Phone, label: 'Call Us', value: '+27 (0) 11 456 7890' },
                  { icon: Mail, label: 'Email Us', value: 'hello@jabulanifm.co.za' },
                  { icon: MapPin, label: 'Visit Us', value: '120 Rivonia Rd, Sandton, 2196' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-xl font-bold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-slate-950 text-white border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <ShieldCheck className="w-10 h-10 text-orange-500" />
                  <h3 className="text-lg font-bold">POPIA Compliant</h3>
                  <p className="text-slate-400 text-sm">
                    All data shared via this form is handled under strict local privacy protocols.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-950 text-white border-none shadow-soft">
                <CardContent className="p-8 space-y-4">
                  <Clock className="w-10 h-10 text-orange-500" />
                  <h3 className="text-lg font-bold">24/7 Enterprise</h3>
                  <p className="text-slate-400 text-sm">
                    Dedicated support line available for all Professional and Enterprise tier clients.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-12">
            <Card className="border-border/50 shadow-soft overflow-hidden">
              <div className="bg-slate-50 dark:bg-white/5 border-b p-4">
                <p className="text-center font-bold text-sm">Preferred: Book Directly in Our Calendar</p>
              </div>
              <CardContent className="p-0">
                {/* Calendly Placeholder */}
                <div className="w-full h-[600px] bg-slate-100 dark:bg-slate-900 flex flex-col items-center justify-center space-y-4">
                  <MessageCircle className="w-12 h-12 text-orange-500 animate-bounce" />
                  <p className="text-muted-foreground font-medium">Interactive Scheduler Loading...</p>
                  <Button variant="outline" onClick={() => window.open('https://calendly.com', '_blank')}>
                    Open Calendly in New Tab
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 shadow-soft">
              <CardHeader className="bg-slate-50 dark:bg-white/5 border-b">
                <CardTitle>Manual Inquiry</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="John" required className="bg-secondary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" required className="bg-secondary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="john@company.co.za" required className="bg-secondary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="solution">Primary Interest</Label>
                    <select id="solution" className="w-full h-10 rounded-md border border-input bg-secondary px-3 text-sm">
                      <option>Facilities Management SaaS</option>
                      <option>Custom SaaS Development (MVP)</option>
                      <option>AI Automation & Chatbots</option>
                      <option>Smart Building / IoT</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Facility/Business Challenge</Label>
                    <Textarea id="message" placeholder="Briefly describe what you'd like to automate..." className="min-h-[120px] bg-secondary" />
                  </div>
                  <Button type="submit" className="w-full btn-gradient h-14 text-lg font-bold">
                    Schedule Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}