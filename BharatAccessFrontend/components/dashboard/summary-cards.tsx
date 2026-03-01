'use client';

import { Card } from '@/components/ui/card';
import { FileText, AlertCircle, CheckCircle2, Clock } from 'lucide-react';

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  subtitle?: string;
  variant?: 'default' | 'warning' | 'success';
}

function SummaryCard({ icon, title, value, subtitle, variant = 'default' }: SummaryCardProps) {
  const variantStyles = {
    default: 'bg-blue-50 border-blue-200',
    warning: 'bg-amber-50 border-amber-200',
    success: 'bg-green-50 border-green-200',
  };

  return (
    <Card className={`p-6 border card-hover ${variantStyles[variant]}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${
          variant === 'warning' ? 'bg-amber-100' : 
          variant === 'success' ? 'bg-green-100' : 
          'bg-blue-100'
        }`}>
          {icon}
        </div>
      </div>
      <h3 className="text-sm font-medium text-slate-600 mb-1">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-slate-900">{value}</span>
        {subtitle && <span className="text-sm text-slate-500">{subtitle}</span>}
      </div>
    </Card>
  );
}

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <SummaryCard
        icon={<FileText className="w-6 h-6 text-blue-600" />}
        title="Total Notices"
        value="3"
        subtitle="documents"
      />
      <SummaryCard
        icon={<AlertCircle className="w-6 h-6 text-amber-600" />}
        title="Upcoming Deadlines"
        value="2"
        variant="warning"
        subtitle="in next 30 days"
      />
      <SummaryCard
        icon={<CheckCircle2 className="w-6 h-6 text-green-600" />}
        title="Action Items"
        value="5"
        variant="success"
        subtitle="to complete"
      />
      <SummaryCard
        icon={<Clock className="w-6 h-6 text-blue-600" />}
        title="Schemes Applied"
        value="2"
        subtitle="in progress"
      />
    </div>
  );
}
