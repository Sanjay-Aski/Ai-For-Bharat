'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, CheckCircle, Users, Zap, ArrowRight, Shield, Heart } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Simple Language Summaries',
    description: 'Complex government notices explained in plain language you can understand',
  },
  {
    icon: CheckCircle,
    title: 'Eligibility Checker',
    description: 'Find out instantly if you qualify for welfare schemes and benefits',
  },
  {
    icon: Zap,
    title: 'Step-by-Step Guidance',
    description: 'Get clear action steps to apply and track your progress',
  },
  {
    icon: Users,
    title: 'Your Information Safe',
    description: 'Your data is encrypted and protected with government-grade security',
  },
];

const benefits = [
  {
    title: 'Never Miss a Deadline',
    description: 'Get reminders for important dates and deadlines',
  },
  {
    title: 'Document Management',
    description: 'Keep all your documents organized in one secure place',
  },
  {
    title: 'Multi-Language Support',
    description: 'Available in your preferred language',
  },
  {
    title: '24/7 Support',
    description: 'Get help whenever you need it',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-primary hidden sm:inline">BharatAccess AI</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-sm text-slate-600 hover:text-slate-900 transition">
                Sign In
              </Link>
              <Link href="/register">
                <Button className="btn-primary">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Understand Government Notices{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                in Simple Language
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              BharatAccess AI transforms complex government notices and welfare schemes into simple, actionable steps. Get personalized guidance and never miss an opportunity or deadline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="btn-primary w-full sm:w-auto">
                  Start Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-6">
              ✓ No credit card required • ✓ Free forever for core features • ✓ Your data is safe
            </p>
          </div>

          {/* Hero Visual */}
          <div className="relative h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-slate-200 flex items-center justify-center animate-slide-up">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
            </div>
            <div className="relative text-center">
              <FileText className="w-20 h-20 text-primary/30 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Upload any government notice</p>
              <p className="text-slate-400 text-sm">Get instant, clear explanations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How BharatAccess AI Works
            </h2>
            <p className="text-lg text-slate-600">
              Four powerful features to guide you through every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 border border-slate-200 hover:border-primary/30 transition-all card-hover">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose BharatAccess AI?
            </h2>
            <p className="text-lg text-slate-600">
              Built with citizens in mind, from the ground up
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                <Heart className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Your Privacy & Security Matter
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            We follow government-grade security standards. Your personal information is encrypted, never shared, and only used to provide you better service. We're transparent about how we protect your data.
          </p>
          <Button variant="outline" className="text-primary hover:bg-primary/5">
            Read Our Privacy Policy
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Government Documents?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join thousands of citizens who now understand their government notices clearly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-50 w-full sm:w-auto">
                Get Started Free
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-primary border-white hover:bg-white/10 w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">BharatAccess AI</span>
              </div>
              <p className="text-sm">Making government simple for everyone</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2024 BharatAccess AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
