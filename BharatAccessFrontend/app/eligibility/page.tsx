'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/navbar';
import { EligibilityCheck } from '@/components/eligibility/eligibility-check';
import { EligibilityResult } from '@/components/eligibility/eligibility-result';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface CheckResult {
  eligible: boolean;
  percentage: number;
  formData: any;
}

export default function EligibilityPage() {
  const [selectedScheme, setSelectedScheme] = useState('PM Kisan Scheme');
  const [checkResult, setCheckResult] = useState<CheckResult | null>(null);

  const schemes = [
    { id: 'pm-kisan', name: 'PM Kisan Scheme', description: 'Income support for farmers' },
    { id: 'ayushman', name: 'Ayushman Bharat', description: 'Health insurance scheme' },
    { id: 'mnrega', name: 'MNREGA', description: 'Rural employment scheme' },
    { id: 'ujjwala', name: 'Ujjwala Scheme', description: 'LPG connection scheme' },
  ];

  if (checkResult) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => setCheckResult(null)}
            className="flex items-center gap-2 text-primary hover:underline mb-6 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Scheme Selection
          </button>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Your Results</h1>
            <p className="text-lg text-slate-600">
              Based on your information for {selectedScheme}
            </p>
          </div>

          <EligibilityResult
            eligible={checkResult.eligible}
            percentage={checkResult.percentage}
            scheme={selectedScheme}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            Check Your Eligibility
          </h1>
          <p className="text-lg text-slate-600">
            Select a welfare scheme and answer a few questions to see if you qualify
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Scheme Selection */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Available Schemes</h2>
            <div className="space-y-3">
              {schemes.map((scheme) => (
                <Card
                  key={scheme.id}
                  className={`p-4 border-2 cursor-pointer transition ${
                    selectedScheme === scheme.name
                      ? 'border-primary bg-primary/5'
                      : 'border-slate-200 hover:border-primary/50'
                  }`}
                  onClick={() => {
                    setSelectedScheme(scheme.name);
                    setCheckResult(null);
                  }}
                >
                  <h3 className={`font-semibold ${
                    selectedScheme === scheme.name
                      ? 'text-primary'
                      : 'text-slate-900'
                  }`}>
                    {scheme.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">{scheme.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Eligibility Form */}
          <div className="lg:col-span-2">
            <EligibilityCheck
              scheme={selectedScheme}
              onResultsReady={(results) => setCheckResult(results)}
            />

            {/* Info Card */}
            <Card className="mt-6 p-6 border border-slate-200 bg-blue-50">
              <h3 className="font-semibold text-slate-900 mb-3">How It Works</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">1.</span>
                  <span>Select the scheme you want to check</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">2.</span>
                  <span>Answer a few simple questions about yourself</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">3.</span>
                  <span>Get instant results with clear explanations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold flex-shrink-0">4.</span>
                  <span>If eligible, see step-by-step application guide</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
