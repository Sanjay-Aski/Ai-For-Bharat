'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, CheckCircle2, HelpCircle, Settings } from 'lucide-react';

export function QuickActions() {
  const actions = [
    {
      href: '/notices/upload',
      icon: Upload,
      title: 'Upload Notice',
      description: 'Upload a new government notice or document',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      href: '/eligibility',
      icon: CheckCircle2,
      title: 'Check Eligibility',
      description: 'See if you qualify for welfare schemes',
      color: 'bg-green-100 text-green-600',
    },
    {
      href: '/help',
      icon: HelpCircle,
      title: 'Get Help',
      description: 'Browse FAQs and support resources',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      href: '/profile',
      icon: Settings,
      title: 'Settings',
      description: 'Manage your profile and preferences',
      color: 'bg-slate-100 text-slate-600',
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-slate-900 mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link key={action.href} href={action.href}>
              <Card className="p-6 border border-slate-200 hover:border-primary/50 transition-all cursor-pointer card-hover h-full">
                <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{action.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{action.description}</p>
                <Button size="sm" variant="outline" className="w-full">
                  Open
                </Button>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
