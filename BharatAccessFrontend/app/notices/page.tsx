'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { FileText, Search, Calendar, ArrowRight, Upload } from 'lucide-react';

export default function NoticesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const notices = [
    {
      id: '1',
      title: 'PM Kisan Scheme - 12th Installment Notice',
      type: 'Welfare Scheme',
      date: 'March 1, 2024',
      deadline: 'March 15, 2024',
      status: 'urgent',
      daysLeft: 5,
    },
    {
      id: '2',
      title: 'Ayushman Bharat - Health Insurance Registration',
      type: 'Government Scheme',
      date: 'February 28, 2024',
      deadline: 'March 25, 2024',
      status: 'active',
      daysLeft: 22,
    },
    {
      id: '3',
      title: 'MNREGA Latest Notice and Guidelines',
      type: 'Employment Scheme',
      date: 'February 20, 2024',
      deadline: 'None',
      status: 'info',
      daysLeft: null,
    },
    {
      id: '4',
      title: 'Income Certificate Application - Approved',
      type: 'Government Document',
      date: 'February 15, 2024',
      deadline: 'None',
      status: 'completed',
      daysLeft: null,
    },
    {
      id: '5',
      title: 'Land Rights Notice - Action Required',
      type: 'Legal Notice',
      date: 'February 10, 2024',
      deadline: 'March 10, 2024',
      status: 'active',
      daysLeft: 8,
    },
    {
      id: '6',
      title: 'Ujjwala Scheme - LPG Connection',
      type: 'Energy Scheme',
      date: 'February 5, 2024',
      deadline: 'None',
      status: 'info',
      daysLeft: null,
    },
  ];

  const filteredNotices = notices.filter(
    (notice) =>
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'urgent':
        return 'bg-red-100 text-red-700 border border-red-200';
      case 'active':
        return 'bg-blue-100 text-blue-700 border border-blue-200';
      case 'completed':
        return 'bg-green-100 text-green-700 border border-green-200';
      default:
        return 'bg-slate-100 text-slate-700 border border-slate-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'urgent':
        return 'Urgent';
      case 'active':
        return 'Active';
      case 'completed':
        return 'Completed';
      default:
        return 'Info';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">My Documents</h1>
              <p className="text-lg text-slate-600">
                All your government notices and documents in one place
              </p>
            </div>
            <Link href="/notices/upload">
              <Button className="btn-primary hidden sm:flex">
                <Upload className="w-4 h-4 mr-2" />
                Upload New
              </Button>
            </Link>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              placeholder="Search notices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
          <Link href="/notices/upload" className="sm:hidden">
            <Button className="btn-primary">
              <Upload className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 border border-slate-200 text-center">
            <p className="text-2xl font-bold text-slate-900">{notices.length}</p>
            <p className="text-sm text-slate-600">Total Documents</p>
          </Card>
          <Card className="p-4 border border-slate-200 text-center">
            <p className="text-2xl font-bold text-red-600">{notices.filter(n => n.status === 'urgent').length}</p>
            <p className="text-sm text-slate-600">Urgent</p>
          </Card>
          <Card className="p-4 border border-slate-200 text-center">
            <p className="text-2xl font-bold text-blue-600">{notices.filter(n => n.status === 'active').length}</p>
            <p className="text-sm text-slate-600">Active</p>
          </Card>
          <Card className="p-4 border border-slate-200 text-center">
            <p className="text-2xl font-bold text-green-600">{notices.filter(n => n.status === 'completed').length}</p>
            <p className="text-sm text-slate-600">Completed</p>
          </Card>
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {filteredNotices.length === 0 ? (
            <Card className="p-12 text-center border border-slate-200">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600 text-lg mb-4">No documents found</p>
              <Link href="/notices/upload">
                <Button className="btn-primary">Upload First Document</Button>
              </Link>
            </Card>
          ) : (
            filteredNotices.map((notice) => (
              <Link key={notice.id} href={`/notices/${notice.id}`}>
                <Card className="p-6 border border-slate-200 hover:border-primary/50 transition card-hover cursor-pointer">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 line-clamp-2 mb-2">
                          {notice.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 items-center mb-3">
                          <Badge variant="outline" className="border-slate-300">
                            {notice.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-slate-500">
                            <Calendar className="w-4 h-4" />
                            {notice.date}
                          </div>
                        </div>
                        {notice.daysLeft && (
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getStatusColor(notice.status)}`}>
                              {getStatusLabel(notice.status)}
                            </span>
                            <span className={`text-xs font-medium ${
                              notice.daysLeft <= 7 ? 'text-red-600' : 'text-amber-600'
                            }`}>
                              {notice.daysLeft} days left • Deadline: {notice.deadline}
                            </span>
                          </div>
                        )}
                        {!notice.daysLeft && (
                          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${getStatusColor(notice.status)}`}>
                            {getStatusLabel(notice.status)}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex-shrink-0">
                      View
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
