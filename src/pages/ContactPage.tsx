import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Consultation Scheduled!", {
      description: "Our team will reach out within 2 hours.",
    });
    (e.target as HTMLFormElement).reset();
  };
  return (
    <div className="bg-background">
      <Section className="bg-orange-500 text-white">
        <h1 className="text-5xl md:text-6xl font-display font-bold">Let's Build Together</h1>
        <p className="mt-4 text-white/90 text-xl max-w-2xl">
          Get a free 30-minute system audit and consultation with our AI architects.
        </p>
      </Section>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-orange-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Call Us</p>
                    <p className="text-lg font-bold">+27 (0) 11 456 7890</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-orange-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Email Us</p>
                    <p className="text-lg font-bold">hello@jabulanifm.co.za</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-orange-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Visit Us</p>
                    <p className="text-lg font-bold">120 Rivonia Rd, Sandton, 2196</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-slate-950 text-white border-none">
              <CardContent className="p-8 space-y-4">
                <MessageCircle className="w-10 h-10 text-orange-500" />
                <h3 className="text-xl font-bold">Instant Support</h3>
                <p className="text-slate-400">
                  Our WhatsApp support line is available 24/7 for Enterprise customers 
                  during critical load-shedding stage 6+ emergencies.
                </p>
              </CardContent>
            </Card>
          </div>
          {/* Form */}
          <div>
            <Card className="border-border/50 shadow-soft">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="solution">Solution of Interest</Label>
                    <select id="solution" className="w-full h-10 rounded-md border border-input bg-secondary px-3 text-sm">
                      <option>Facilities Command Center</option>
                      <option>Smart Inventory AI</option>
                      <option>POPIA Compliance Vault</option>
                      <option>Bespoke SaaS Development</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help?</Label>
                    <Textarea id="message" placeholder="Tell us about your facility challenges..." className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full btn-gradient h-14 text-lg">
                    Schedule Free Consultation
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to our POPIA-compliant data handling policy.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}