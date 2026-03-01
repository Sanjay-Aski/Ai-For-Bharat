'use client';

import { Navbar } from '@/components/layout/navbar';
import { SummaryCards } from '@/components/dashboard/summary-cards';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { DeadlineAlerts } from '@/components/dashboard/deadline-alerts';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Zap } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            Welcome back, Rajesh!
          </h1>
          <p className="text-lg text-slate-600">
            Here's what's happening with your government documents today
          </p>
        </div>

        {/* Summary Cards */}
        <SummaryCards />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <QuickActions />

            {/* Recent Documents */}
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Recent Documents</h2>
              <div className="space-y-3">
                {[
                  {
                    title: 'PM Kisan Scheme - 12th Installment Notice',
                    type: 'Welfare Scheme',
                    date: 'Mar 1, 2024',
                  },
                  {
                    title: 'Income Certificate Application - Approved',
                    type: 'Government Document',
                    date: 'Feb 28, 2024',
                  },
                  {
                    title: 'Land Rights Notice - Action Required',
                    type: 'Legal Notice',
                    date: 'Feb 25, 2024',
                  },
                ].map((doc, index) => (
                  <Card key={index} className="p-4 border border-slate-200 hover:border-primary/50 transition cursor-pointer card-hover">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <h3 className="font-medium text-slate-900">{doc.title}</h3>
                          <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                            <span>{doc.type}</span>
                            <span>•</span>
                            <span>{doc.date}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Deadline Alerts */}
            <DeadlineAlerts />

            {/* Tip Card */}
            <Card className="p-6 border border-slate-200 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex gap-4">
                <Zap className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Pro Tip</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Enable notifications to get reminders about important deadlines before they expire.
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    Enable Notifications
                  </Button>
                </div>
              </div>
            </Card>

            {/* Help Card */}
            <Card className="p-6 border border-slate-200 bg-blue-50">
              <h3 className="font-semibold text-slate-900 mb-2">Need Help?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Check our help center for answers to common questions.
              </p>
              {/* <Button size="sm" className="w-full btn-primary" variant="outline"> */}
              <Button size="sm" className="w-full btn-outline-primary" variant="outline">
                Visit Help Center
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
