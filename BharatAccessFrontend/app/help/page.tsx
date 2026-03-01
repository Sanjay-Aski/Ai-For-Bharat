'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Phone, Mail, Search, BookOpen, AlertCircle, HelpCircle } from 'lucide-react';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: 'Getting Started',
      items: [
        {
          question: 'How do I create an account on BharatAccess?',
          answer: 'Click on "Get Started" button on the landing page and fill in your details. You\'ll receive a confirmation email. Click the link in the email to verify your account.',
        },
        {
          question: 'Is BharatAccess free to use?',
          answer: 'Yes! BharatAccess is completely free. We believe government services should be accessible to everyone without cost.',
        },
        {
          question: 'What information do I need to provide?',
          answer: 'We only ask for basic information like your name, email, phone number, state, and occupation. This helps us provide personalized information about schemes you might be eligible for.',
        },
      ],
    },
    {
      category: 'Using the Platform',
      items: [
        {
          question: 'How do I upload a government notice?',
          answer: 'Go to your dashboard and click "Upload Notice". You can drag and drop a file or click to browse. We support PDF, JPG, and PNG formats up to 10MB.',
        },
        {
          question: 'How long does it take to analyze a document?',
          answer: 'Usually within 30 seconds to 1 minute. Complex documents might take a bit longer. You can see the progress in real-time.',
        },
        {
          question: 'Can I edit my profile information?',
          answer: 'Yes! Go to Profile & Settings from the navigation menu. You can update your personal details, language preference, and notification settings.',
        },
      ],
    },
    {
      category: 'Eligibility Checks',
      items: [
        {
          question: 'How accurate are the eligibility results?',
          answer: 'Our system is designed to be highly accurate based on the information you provide. However, final eligibility depends on official government verification. Always check official sources for final confirmation.',
        },
        {
          question: 'Can I check eligibility for multiple schemes?',
          answer: 'Yes! You can check eligibility for as many schemes as you want. Visit the "Check Eligibility" section to see all available schemes.',
        },
        {
          question: 'What if my eligibility shows "Partially Eligible"?',
          answer: 'This means you meet some but not all criteria. The results page will tell you exactly what you need to do to become fully eligible. Usually it involves gathering additional documents or correcting land records.',
        },
      ],
    },
    {
      category: 'Data & Privacy',
      items: [
        {
          question: 'Is my data safe?',
          answer: 'Yes. We use government-grade encryption and follow all data protection laws. Your information is never shared with anyone without your permission.',
        },
        {
          question: 'Who can access my information?',
          answer: 'Only you can access your information. We never share your data with third parties unless you explicitly give permission.',
        },
        {
          question: 'Can I delete my account?',
          answer: 'Yes. Go to Settings > Security and click "Delete Account". This will remove all your data from our servers permanently.',
        },
      ],
    },
    {
      category: 'Troubleshooting',
      items: [
        {
          question: 'My file upload failed. What should I do?',
          answer: 'Check that your file is under 10MB and in a supported format (PDF, JPG, PNG). Make sure your internet connection is stable. Try uploading again.',
        },
        {
          question: 'I didn\'t receive the verification email.',
          answer: 'Check your spam folder. If you still don\'t see it, go to login page and click "Resend Verification Email". If it still doesn\'t arrive, contact support.',
        },
        {
          question: 'The app is running slowly.',
          answer: 'Try refreshing the page. If it\'s still slow, it might be your internet connection. Try using a different browser or device.',
        },
      ],
    },
  ];

  const filteredFaqs = faqs.map((category) => ({
    ...category,
    items: category.items.filter(
      (item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.items.length > 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Help Center</h1>
          <p className="text-lg text-slate-600 mb-8">Find answers to common questions</p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-white"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 border border-slate-200 hover:border-primary/50 transition cursor-pointer card-hover">
            <BookOpen className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">Getting Started</h3>
            <p className="text-sm text-slate-600">Learn how to set up your account and start using BharatAccess</p>
          </Card>

          <Card className="p-6 border border-slate-200 hover:border-primary/50 transition cursor-pointer card-hover">
            <HelpCircle className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">Common Issues</h3>
            <p className="text-sm text-slate-600">Find quick fixes for common problems you might face</p>
          </Card>

          <Card className="p-6 border border-slate-200 hover:border-primary/50 transition cursor-pointer card-hover">
            <AlertCircle className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">FAQ</h3>
            <p className="text-sm text-slate-600">Browse frequently asked questions from other users</p>
          </Card>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>

          {filteredFaqs.length === 0 ? (
            <Card className="p-8 text-center border border-slate-200">
              <p className="text-slate-600">No results found for "{searchQuery}". Try a different search term.</p>
            </Card>
          ) : (
            filteredFaqs.map((category) => (
              <div key={category.category} className="mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Badge variant="outline" className="border-primary/30 bg-primary/5">
                    {category.category}
                  </Badge>
                </h3>
                <div className="space-y-3">
                  {category.items.map((item, index) => (
                    <Accordion key={index} type="single" collapsible>
                      <AccordionItem value={`${category.category}-${index}`} className="border border-slate-200 rounded-lg px-4">
                        <AccordionTrigger className="hover:no-underline py-4">
                          <span className="font-semibold text-slate-900 text-left">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 pb-4">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Contact Support */}
        <Card className="p-8 border border-slate-200 bg-gradient-to-br from-primary/5 to-accent/5">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Still Need Help?</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex gap-4">
              <MessageSquare className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Live Chat</h3>
                <p className="text-sm text-slate-600 mb-3">Chat with our support team (9 AM - 6 PM IST)</p>
                <Button variant="outline" size="sm">
                  Start Chat
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Phone Support</h3>
                <p className="text-sm text-slate-600 mb-3">Call us: 1800-115-526 (toll-free)</p>
                <Button variant="outline" size="sm">
                  Call Now
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Email Support</h3>
                <p className="text-sm text-slate-600 mb-3">support@bharataccess.ai</p>
                <Button variant="outline" size="sm">
                  Send Email
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">Send us a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                <Input placeholder="Enter your name" className="bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <Input type="email" placeholder="your@email.com" className="bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  placeholder="Describe your issue or question..."
                  rows={5}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <Button className="btn-primary">Send Message</Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
