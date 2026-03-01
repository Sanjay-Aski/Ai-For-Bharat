'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface DeadlineItem {
  id: string;
  title: string;
  daysLeft: number;
  date: string;
  scheme: string;
  priority: 'urgent' | 'high' | 'normal';
}

const deadlines: DeadlineItem[] = [
  {
    id: '1',
    title: 'PM Kisan Scheme - Document Submission',
    daysLeft: 5,
    date: 'March 6, 2024',
    scheme: 'PM Kisan',
    priority: 'urgent',
  },
  {
    id: '2',
    title: 'Ayushman Bharat - Health Insurance',
    daysLeft: 15,
    date: 'March 16, 2024',
    scheme: 'Ayushman',
    priority: 'high',
  },
  {
    id: '3',
    title: 'MNREGA - Latest Notice',
    daysLeft: 30,
    date: 'March 31, 2024',
    scheme: 'MNREGA',
    priority: 'normal',
  },
];

function getPriorityStyles(priority: string) {
  switch (priority) {
    case 'urgent':
      return 'bg-red-50 border-red-200';
    case 'high':
      return 'bg-amber-50 border-amber-200';
    default:
      return 'bg-blue-50 border-blue-200';
  }
}

function getPriorityBadge(priority: string) {
  const colors = {
    urgent: 'bg-red-100 text-red-700',
    high: 'bg-amber-100 text-amber-700',
    normal: 'bg-blue-100 text-blue-700',
  };
  return colors[priority as keyof typeof colors];
}

function getPriorityIcon(priority: string) {
  if (priority === 'urgent') {
    return <AlertCircle className="w-5 h-5 text-red-600" />;
  }
  return <Calendar className="w-5 h-5 text-slate-400" />;
}

export function DeadlineAlerts() {
  return (
    <Card className="border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
        <h2 className="text-lg font-semibold text-slate-900">Upcoming Deadlines</h2>
        <p className="text-sm text-slate-600">Don't miss important dates</p>
      </div>

      <div className="divide-y divide-slate-200">
        {deadlines.map((deadline) => (
          <Link key={deadline.id} href={`/notices/${deadline.id}`}>
            <div className={`p-4 hover:bg-slate-50 transition cursor-pointer border-l-4 ${
              deadline.priority === 'urgent' ? 'border-red-400' :
              deadline.priority === 'high' ? 'border-amber-400' :
              'border-blue-400'
            }`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  {getPriorityIcon(deadline.priority)}
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-900 line-clamp-2">{deadline.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{deadline.scheme}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-xs text-slate-500">{deadline.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <Badge className={`${getPriorityBadge(deadline.priority)} border-0`}>
                    {deadline.daysLeft} days left
                  </Badge>
                  <ChevronRight className="w-5 h-5 text-slate-300" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="p-4 bg-slate-50 border-t border-slate-200">
        <Link href="/notices" className="text-sm font-medium text-primary hover:underline">
          View all notices →
        </Link>
      </div>
    </Card>
  );
}
