'use client';

import Link from 'next/link';
import { Navbar } from '@/components/layout/navbar';
import { PlainLanguageSummary } from '@/components/notices/plain-language-summary';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Share2, Download, ArrowLeft, CheckCircle2, Clock } from 'lucide-react';

export default function NoticeDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/notices" className="flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Notices
          </Link>

          {/* Header with Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-0">PM Kisan Scheme</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <PlainLanguageSummary
              title="PM Kisan Scheme - 12th Installment Notice"
              type="Government Welfare Scheme"
              date="March 1, 2024"
              deadline="March 15, 2024"
            />
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <Card className="p-6 border border-slate-200 sticky top-20">
              <h3 className="font-semibold text-slate-900 mb-6">Quick Info</h3>

              <div className="space-y-4">
                {/* Status */}
                <div>
                  <p className="text-xs text-slate-500 uppercase font-semibold mb-2">Status</p>
                  <Badge className="bg-blue-100 text-blue-700 border-0 w-fit">Active</Badge>
                </div>

                {/* Deadline */}
                <div>
                  <p className="text-xs text-slate-500 uppercase font-semibold mb-2">Deadline</p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-900">Mar 15, 2024</span>
                  </div>
                </div>

                {/* Action Required */}
                <div>
                  <p className="text-xs text-slate-500 uppercase font-semibold mb-2">Action Required</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Check land records</span>
                  </div>
                </div>

                <hr className="my-4" />

                {/* Action Buttons */}
                <Button className="w-full btn-primary mb-2">Check Eligibility</Button>
                <Button variant="outline" className="w-full">
                  View Action Steps
                </Button>
              </div>
            </Card>

            {/* Related Schemes */}
            <Card className="p-6 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">Related Schemes</h3>
              <div className="space-y-3">
                <Link href="/notices/2" className="block p-3 rounded-lg hover:bg-slate-50 transition border border-slate-200">
                  <p className="text-sm font-medium text-slate-900">Ayushman Bharat</p>
                  <p className="text-xs text-slate-500 mt-1">Health Insurance Scheme</p>
                </Link>
                <Link href="/notices/3" className="block p-3 rounded-lg hover:bg-slate-50 transition border border-slate-200">
                  <p className="text-sm font-medium text-slate-900">MNREGA</p>
                  <p className="text-xs text-slate-500 mt-1">Rural Employment Scheme</p>
                </Link>
              </div>
            </Card>

            {/* Help Card */}
            <Card className="p-6 border border-slate-200 bg-blue-50">
              <h3 className="font-semibold text-slate-900 mb-2">Need Help?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Can't find the information you need?
              </p>
              <Link href="/help">
                <Button variant="outline" className="w-full text-primary hover:bg-primary/5">
                  Contact Support
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
