import Link from 'next/link';
import { RegisterForm } from '@/components/auth/register-form';
import { Shield } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex flex-col">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white/50 backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-primary">BharatAccess AI</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="w-full">
          <RegisterForm />

          {/* Help Text */}
          <div className="mt-8 text-center text-sm text-slate-600">
            <p>Have questions? Check our{' '}
              <Link href="/help" className="text-primary hover:underline">
                FAQ
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-white/50 backdrop-blur-sm text-center text-sm text-slate-500">
        <p>&copy; 2024 BharatAccess AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
