'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AlertCircle, CheckCircle2, Calendar, FileText } from 'lucide-react';

interface PlainLanguageSummaryProps {
  title: string;
  type: string;
  date: string;
  deadline?: string;
}

export function PlainLanguageSummary({ title, type, date, deadline }: PlainLanguageSummaryProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{title}</h1>
        <div className="flex flex-wrap gap-3 mb-4">
          <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">
            {type}
          </Badge>
          <Badge variant="outline" className="border-slate-200">
            Received: {date}
          </Badge>
          {deadline && (
            <Badge className="bg-red-50 text-red-700 border border-red-200">
              <AlertCircle className="w-3 h-3 mr-1" />
              Deadline: {deadline}
            </Badge>
          )}
        </div>
      </div>

      {/* Plain Language Summary */}
      <Card className="p-6 border border-slate-200 bg-gradient-to-br from-blue-50 to-blue-50/50">
        <div className="flex gap-4">
          <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="font-semibold text-slate-900 mb-3">In Simple Words</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              The government is notifying about the 12th installment of PM Kisan Scheme. This payment is for farmers who are registered in the scheme. If you are eligible, you will receive ₹2,000 directly in your bank account.
            </p>
            <div className="bg-white p-4 rounded-lg border border-blue-200 mt-4">
              <p className="text-sm text-slate-600">
                <strong>What you need to know:</strong> This is money meant for registered farmers. No action is needed from you if you're already registered. The payment will be automatic.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Details Accordion */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="who-eligible" className="border border-slate-200 rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <span className="font-semibold text-slate-900">Who is eligible?</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 text-slate-600">
              <p>You are eligible if you meet all these criteria:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>You are an Indian citizen</li>
                <li>You have agricultural land in your name</li>
                <li>You are already registered in PM Kisan Scheme</li>
                <li>Your land records (Khasra/Khatauni) are updated</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="what-to-do" className="border border-slate-200 rounded-lg px-4 mt-3">
          <AccordionTrigger className="hover:no-underline">
            <span className="font-semibold text-slate-900">What do you need to do?</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 text-slate-600">
              <p>Follow these steps:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Check if your land records are correct in government records</li>
                <li>If anything is wrong, file a correction at your Tehsil office</li>
                <li>Wait for the correction to be processed (usually 2-4 weeks)</li>
                <li>The payment will be sent automatically once everything is correct</li>
              </ol>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="amount" className="border border-slate-200 rounded-lg px-4 mt-3">
          <AccordionTrigger className="hover:no-underline">
            <span className="font-semibold text-slate-900">How much will you get?</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 text-slate-600">
              <p className="font-semibold text-lg text-slate-900">₹2,000 for this installment</p>
              <p>The payment is made in three installments of ₹2,000 each throughout the year. This is the second installment.</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="timeline" className="border border-slate-200 rounded-lg px-4 mt-3">
          <AccordionTrigger className="hover:no-underline">
            <span className="font-semibold text-slate-900">When will you get it?</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 text-slate-600">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Expected transfer date: Between March 10-15, 2024</span>
              </div>
              <p className="text-sm">Money will be sent to your registered bank account. Check your bank app or contact your bank if you don't receive it within 5 days of the announced date.</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="problems" className="border border-slate-200 rounded-lg px-4 mt-3">
          <AccordionTrigger className="hover:no-underline">
            <span className="font-semibold text-slate-900">What if there's a problem?</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 text-slate-600">
              <p>If you face any issues:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Visit pm-kisan.gov.in and check your application status</li>
                <li>Contact your Tehsil office with your documents</li>
                <li>Call PM Kisan Helpline: 1800-115-526 (toll-free)</li>
                <li>Send email to support@pm-kisan.gov.in</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Action Item */}
      <Card className="p-4 border border-green-200 bg-green-50">
        <div className="flex gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-green-900 mb-1">Next Steps</h3>
            <p className="text-sm text-green-800">
              No action needed if your land records are already updated. The payment will reach your account automatically. Keep checking your bank account around March 10-15.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
