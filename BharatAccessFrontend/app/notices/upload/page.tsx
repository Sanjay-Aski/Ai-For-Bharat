'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/navbar';
import { DragDropUpload } from '@/components/notices/drag-drop-upload';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';

export default function NoticeUploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [step, setStep] = useState(1);

  const handleFilesSelected = (files: File[]) => {
    setUploadedFiles(files);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Upload Your Document</h1>
          <p className="text-lg text-slate-600">
            Upload a government notice or document to get a simple explanation
          </p>
        </div>

        {/* Steps Progress */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-8">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition ${step >= 1 ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'}`}>
              1
            </div>
            <div className={`flex-1 h-2 rounded-full transition ${step >= 2 ? 'bg-primary' : 'bg-slate-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition ${step >= 2 ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'}`}>
              2
            </div>
            <div className={`flex-1 h-2 rounded-full transition ${step >= 3 ? 'bg-primary' : 'bg-slate-200'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition ${step >= 3 ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'}`}>
              3
            </div>
          </div>
          <div className="flex justify-between text-sm font-medium text-slate-600">
            <span>Upload</span>
            <span>Review</span>
            <span>Analyze</span>
          </div>
        </div>

        {/* Step 1: Upload */}
        {step === 1 && (
          <div className="space-y-8 animate-fade-in">
            <DragDropUpload onFilesSelected={handleFilesSelected} />

            {/* Helpful Tips */}
            <Card className="p-6 border border-slate-200 bg-blue-50">
              <h3 className="font-semibold text-slate-900 mb-4">Tips for best results:</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Upload a clear, readable image or PDF of the document</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Make sure all text is visible and not blurry</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>File size should not exceed 10MB</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>PDF files work best for official documents</span>
                </li>
              </ul>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Link href="/dashboard" className="flex-1">
                <Button variant="outline" className="w-full">
                  Back to Dashboard
                </Button>
              </Link>
              <Button
                className="flex-1 btn-primary"
                disabled={uploadedFiles.length === 0}
                onClick={() => setStep(2)}
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Review */}
        {step === 2 && (
          <div className="space-y-8 animate-fade-in">
            <Card className="p-6 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">Documents Ready for Analysis</h3>
              <div className="space-y-3">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{file.name}</p>
                      <p className="text-xs text-slate-500">{(file.size / 1024).toFixed(2)} KB</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </Card>

            {/* What's Next */}
            <Card className="p-6 border border-slate-200 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="font-semibold text-slate-900 mb-2">What Happens Next</h3>
              <p className="text-slate-600 text-sm mb-4">
                Our AI will analyze your document and provide:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Simple explanation of what the document says</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Important deadlines and dates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Steps you need to take</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Who to contact for help</span>
                </li>
              </ul>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button className="flex-1 btn-primary" onClick={() => setStep(3)}>
                Analyze Document
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Results */}
        {step === 3 && (
          <div className="space-y-8 animate-fade-in">
            <Card className="p-6 border border-green-200 bg-green-50">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-900 mb-1">Analysis Complete!</h3>
                  <p className="text-green-800 text-sm">
                    Your document has been successfully analyzed. View the detailed explanation below.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 border border-slate-200">
                <h4 className="text-sm font-semibold text-slate-600 uppercase mb-2">Document Type</h4>
                <p className="text-lg font-semibold text-slate-900">Welfare Scheme</p>
              </Card>
              <Card className="p-6 border border-slate-200">
                <h4 className="text-sm font-semibold text-slate-600 uppercase mb-2">Confidence Score</h4>
                <p className="text-lg font-semibold text-slate-900">98%</p>
              </Card>
              <Card className="p-6 border border-slate-200">
                <h4 className="text-sm font-semibold text-slate-600 uppercase mb-2">Read Time</h4>
                <p className="text-lg font-semibold text-slate-900">3-5 min</p>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Link href="/dashboard" className="flex-1">
                <Button variant="outline" className="w-full">
                  Back to Dashboard
                </Button>
              </Link>
              <Link href="/notices/1" className="flex-1">
                <Button className="w-full btn-primary">
                  View Full Analysis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
