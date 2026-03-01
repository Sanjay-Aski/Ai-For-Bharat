'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Menu, X, LogOut, Settings, User } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-primary hidden sm:inline">BharatAccess</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/notices" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
              Notices
            </Link>
            <Link href="/eligibility" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
              Eligibility Check
            </Link>
            <Link href="/help" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
              Help
            </Link>
          </div>

          {/* User Menu - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/profile">
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-600 hover:text-slate-900"
              onClick={() => (window.location.href = '/')}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-600" />
            ) : (
              <Menu className="w-6 h-6 text-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 space-y-4 animate-fade-in">
            <Link
              href="/notices"
              className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded transition"
            >
              Notices
            </Link>
            <Link
              href="/eligibility"
              className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded transition"
            >
              Eligibility Check
            </Link>
            <Link
              href="/help"
              className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded transition"
            >
              Help
            </Link>
            <hr />
            <Link
              href="/profile"
              className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded transition"
            >
              Profile
            </Link>
            <button
              onClick={() => (window.location.href = '/')}
              className="w-full text-left px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
