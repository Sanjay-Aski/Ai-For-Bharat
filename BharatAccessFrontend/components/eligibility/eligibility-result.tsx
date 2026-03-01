'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertCircle, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface EligibilityResultProps {
  eligible: boolean;
  percentage: number;
  scheme: string;
}

export function EligibilityResult({ eligible, percentage, scheme }: EligibilityResultProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Main Result Card */}
      <Card className={`p-8 border-2 text-center ${
        eligible
          ? 'border-green-200 bg-green-50'
          : percentage >= 50
          ? 'border-amber-200 bg-amber-50'
          : 'border-red-200 bg-red-50'
      }`}>
        <div className="flex justify-center mb-4">
          {eligible ? (
            <CheckCircle2 className="w-16 h-16 text-green-600" />
          ) : percentage >= 50 ? (
            <AlertCircle className="w-16 h-16 text-amber-600" />
          ) : (
            <AlertCircle className="w-16 h-16 text-red-600" />
          )}
        </div>

        <h2 className="text-3xl font-bold mb-2 text-slate-900">
          {eligible
            ? 'You Are Eligible!'
            : percentage >= 50
            ? 'Partially Eligible'
            : 'Not Eligible'}
        </h2>

        <p className={`text-lg mb-4 ${
          eligible
            ? 'text-green-700'
            : percentage >= 50
            ? 'text-amber-700'
            : 'text-red-700'
        }`}>
          {eligible
            ? `Great news! You meet the eligibility criteria for ${scheme}.`
            : percentage >= 50
            ? `You meet some but not all criteria for ${scheme}. See details below.`
            : `Based on your information, you may not qualify for ${scheme} at this time.`}
        </p>

        <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-slate-200">
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-900">{percentage}%</p>
            <p className="text-sm text-slate-600">Match Score</p>
          </div>
        </div>
      </Card>

      {/* Eligibility Details */}
      <Card className="p-6 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Your Eligibility Details</h3>

        <div className="space-y-4">
          {/* Criterion 1 */}
          <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-medium text-slate-900">Age Criteria</h4>
              <p className="text-sm text-slate-600 mt-1">
                You meet the age requirements for this scheme
              </p>
            </div>
            <Badge className="bg-green-100 text-green-700 border-0 flex-shrink-0">Pass</Badge>
          </div>

          {/* Criterion 2 */}
          <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-medium text-slate-900">Occupation Status</h4>
              <p className="text-sm text-slate-600 mt-1">
                Your occupation is eligible for this scheme
              </p>
            </div>
            <Badge className="bg-green-100 text-green-700 border-0 flex-shrink-0">Pass</Badge>
          </div>

          {/* Criterion 3 */}
          <div className="flex items-start gap-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-medium text-slate-900">Land Requirements</h4>
              <p className="text-sm text-slate-600 mt-1">
                You need to own at least 1 acre of agricultural land
              </p>
            </div>
            <Badge className="bg-amber-100 text-amber-700 border-0 flex-shrink-0">Check</Badge>
          </div>

          {/* Criterion 4 */}
          <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-medium text-slate-900">Documentation</h4>
              <p className="text-sm text-slate-600 mt-1">
                You have the required government documents
              </p>
            </div>
            <Badge className="bg-green-100 text-green-700 border-0 flex-shrink-0">Pass</Badge>
          </div>
        </div>
      </Card>

      {/* Next Steps */}
      <Card className="p-6 border border-slate-200 bg-gradient-to-br from-primary/5 to-accent/5">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">What's Next?</h3>

        {eligible ? (
          <div className="space-y-3">
            <p className="text-slate-700 font-medium mb-4">
              Follow these steps to apply for {scheme}:
            </p>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold flex-shrink-0">
                  1
                </span>
                <span className="text-slate-700">Gather required documents (Aadhar, Land records, etc.)</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold flex-shrink-0">
                  2
                </span>
                <span className="text-slate-700">Visit the official government website</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold flex-shrink-0">
                  3
                </span>
                <span className="text-slate-700">Fill the application form with your details</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-semibold flex-shrink-0">
                  4
                </span>
                <span className="text-slate-700">Submit and keep your reference number safe</span>
              </li>
            </ol>
          </div>
        ) : percentage >= 50 ? (
          <div className="space-y-3">
            <p className="text-slate-700 font-medium mb-4">
              You're close! Here's what you need to do to become fully eligible:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span className="text-slate-700">Check if you can acquire the required land</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span className="text-slate-700">Update your documents if needed</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                <span className="text-slate-700">Recheck your eligibility once criteria are met</span>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-slate-700 font-medium mb-4">
              This scheme may not be the best fit right now. Try these alternatives:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Ayushman Bharat Health Insurance</span>
              </li>
              <li className="flex gap-3">
                <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">MNREGA Employment Scheme</span>
              </li>
              <li className="flex gap-3">
                <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">State Government Welfare Programs</span>
              </li>
            </ul>
          </div>
        )}
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Link href="/dashboard" className="flex-1">
          <Button variant="outline" className="w-full">
            Back to Dashboard
          </Button>
        </Link>
        {eligible && (
          <Link href={`/actions/${scheme.replace(/\s+/g, '-').toLowerCase()}`} className="flex-1">
            <Button className="w-full btn-primary">
              View Action Steps
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
