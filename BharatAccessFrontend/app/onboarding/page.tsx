'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Shield,
  ArrowRight,
  ArrowLeft,
  User,
  MapPin,
  Briefcase,
  Globe,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const STATES = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Odisha', 'Punjab',
  'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'Uttarakhand',
  'West Bengal',
];

const OCCUPATIONS = [
  'Student', 'Farmer / Agriculture', 'Daily Wage Worker',
  'Self-Employed / Business', 'Private Sector Employee',
  'Government Employee', 'Homemaker', 'Retired', 'Unemployed', 'Other',
];

const INCOME_RANGES = [
  'Below ₹1 Lakh / year',
  '₹1 – 2.5 Lakh / year',
  '₹2.5 – 5 Lakh / year',
  '₹5 – 10 Lakh / year',
  'Above ₹10 Lakh / year',
];

const LANGUAGES = [
  'English', 'हिन्दी (Hindi)', 'বাংলা (Bengali)', 'తెలుగు (Telugu)',
  'मराठी (Marathi)', 'தமிழ் (Tamil)', 'ગુજરાતી (Gujarati)',
  'ಕನ್ನಡ (Kannada)', 'ਪੰਜਾਬੀ (Punjabi)', ' മലയാളം (Malayalam)',
];

const INTEREST_AREAS = [
  { id: 'housing', label: '🏠 Housing & Shelter' },
  { id: 'health', label: '🏥 Health & Medical' },
  { id: 'education', label: '🎓 Education & Scholarships' },
  { id: 'agriculture', label: '🌾 Agriculture & Farming' },
  { id: 'employment', label: '💼 Employment & MSME' },
  { id: 'women', label: '👩 Women Empowerment' },
  { id: 'senior', label: '👴 Senior Citizen Benefits' },
  { id: 'tax', label: '📋 Tax & Legal Notices' },
  { id: 'disability', label: '♿ Disability Welfare' },
  { id: 'financial', label: '💰 Financial Assistance' },
];

// ─── Step Config ──────────────────────────────────────────────────────────────

const STEPS = [
  { id: 1, title: 'Personal Details', icon: User, description: 'Tell us a bit about yourself' },
  { id: 2, title: 'Your Location', icon: MapPin, description: 'Find schemes relevant to your area' },
  { id: 3, title: 'Occupation & Income', icon: Briefcase, description: 'Check your eligibility better' },
  { id: 4, title: 'Preferences', icon: Globe, description: 'Personalise your experience' },
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface OnboardingData {
  fullName: string;
  age: string;
  gender: string;
  state: string;
  district: string;
  pincode: string;
  occupation: string;
  incomeRange: string;
  language: string;
  interests: string[];
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [data, setData] = useState<OnboardingData>({
    fullName: '',
    age: '',
    gender: '',
    state: '',
    district: '',
    pincode: '',
    occupation: '',
    incomeRange: '',
    language: 'English',
    interests: [],
  });

  const totalSteps = STEPS.length;
  const progress = (currentStep / totalSteps) * 100;

  const update = (key: keyof OnboardingData, value: string) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const toggleInterest = (id: string) => {
    setData((prev) => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter((i) => i !== id)
        : [...prev.interests, id],
    }));
  };

  const canProceed = () => {
    if (currentStep === 1) return data.fullName.trim() && data.age && data.gender;
    if (currentStep === 2) return data.state && data.district.trim();
    if (currentStep === 3) return data.occupation && data.incomeRange;
    if (currentStep === 4) return data.language && data.interests.length > 0;
    return false;
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((s) => s + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const handleGoToDashboard = () => {
    router.push('/dashboard');
  };

  // ── Completion Screen ──────────────────────────────────────────────────────
  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            You&apos;re all set, {data.fullName.split(' ')[0]}!
          </h2>
          <p className="text-slate-600 mb-2">
            Your civic profile has been created. BharatAccess AI will now personalise every notice, scheme, and guidance step based on your context.
          </p>
          <p className="text-sm text-slate-400 mb-8">
            You can always update your profile from Settings.
          </p>

          {/* Summary Pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {[
              data.state,
              data.occupation,
              data.incomeRange,
              data.language,
              ...data.interests.slice(0, 3).map(
                (i) => INTEREST_AREAS.find((a) => a.id === i)?.label ?? i
              ),
            ].map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <Button
            size="lg"
            className="btn-primary w-full"
            onClick={handleGoToDashboard}
          >
            Go to My Dashboard
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  const currentStepConfig = STEPS[currentStep - 1];
  const StepIcon = currentStepConfig.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-primary hidden sm:inline">
                BharatAccess AI
              </span>
            </Link>
            <span className="text-sm text-slate-500">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100">
        <Progress value={progress} className="h-1 rounded-none" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl animate-fade-in">

          {/* Step Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <StepIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-0.5">
                Step {currentStep} of {totalSteps}
              </p>
              <h1 className="text-2xl font-bold text-slate-900">
                {currentStepConfig.title}
              </h1>
              <p className="text-slate-500 text-sm">
                {currentStepConfig.description}
              </p>
            </div>
          </div>

          {/* Step Dots */}
          <div className="flex gap-2 mb-8">
            {STEPS.map((step) => (
              <div
                key={step.id}
                className={`h-2 rounded-full transition-all duration-300 ${
                  step.id === currentStep
                    ? 'w-8 bg-primary'
                    : step.id < currentStep
                    ? 'w-4 bg-primary/50'
                    : 'w-4 bg-slate-200'
                }`}
              />
            ))}
          </div>

          {/* Step Card */}
          <Card className="p-6 sm:p-8 border border-slate-200 shadow-sm">

            {/* ── Step 1: Personal Details ── */}
            {currentStep === 1 && (
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-slate-700 font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="e.g. Priya Sharma"
                    value={data.fullName}
                    onChange={(e) => update('fullName', e.target.value)}
                    className="h-11"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-slate-700 font-medium">
                      Age
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="e.g. 32"
                      min={18}
                      max={100}
                      value={data.age}
                      onChange={(e) => update('age', e.target.value)}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Gender</Label>
                    <Select onValueChange={(v) => update('gender', v)} value={data.gender}>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer_not">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                  <p className="text-xs text-primary font-medium flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5" />
                    Your information is encrypted and never shared
                  </p>
                </div>
              </div>
            )}

            {/* ── Step 2: Location ── */}
            {currentStep === 2 && (
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">State / Union Territory</Label>
                  <Select onValueChange={(v) => update('state', v)} value={data.state}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {STATES.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="district" className="text-slate-700 font-medium">
                    District
                  </Label>
                  <Input
                    id="district"
                    placeholder="e.g. Pune"
                    value={data.district}
                    onChange={(e) => update('district', e.target.value)}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pincode" className="text-slate-700 font-medium">
                    PIN Code{' '}
                    <span className="text-slate-400 font-normal text-xs">(optional)</span>
                  </Label>
                  <Input
                    id="pincode"
                    placeholder="e.g. 411001"
                    maxLength={6}
                    value={data.pincode}
                    onChange={(e) => update('pincode', e.target.value)}
                    className="h-11"
                  />
                </div>

                <div className="bg-accent/5 rounded-lg p-4 border border-accent/10">
                  <p className="text-xs text-slate-600 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    We use your location to surface state-specific schemes and local notices
                  </p>
                </div>
              </div>
            )}

            {/* ── Step 3: Occupation & Income ── */}
            {currentStep === 3 && (
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">Occupation</Label>
                  <Select onValueChange={(v) => update('occupation', v)} value={data.occupation}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select your occupation" />
                    </SelectTrigger>
                    <SelectContent>
                      {OCCUPATIONS.map((o) => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">Annual Household Income</Label>
                  <Select onValueChange={(v) => update('incomeRange', v)} value={data.incomeRange}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select income range" />
                    </SelectTrigger>
                    <SelectContent>
                      {INCOME_RANGES.map((r) => (
                        <SelectItem key={r} value={r}>{r}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                  <p className="text-xs text-primary font-medium mb-1 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Why we ask this
                  </p>
                  <p className="text-xs text-slate-600">
                    Your occupation and income help us accurately check your eligibility for government schemes like PM-KISAN, PMAY, scholarships, and more.
                  </p>
                </div>
              </div>
            )}

            {/* ── Step 4: Language & Interests ── */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">Preferred Language</Label>
                  <Select onValueChange={(v) => update('language', v)} value={data.language}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      {LANGUAGES.map((l) => (
                        <SelectItem key={l} value={l}>{l}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-slate-400">
                    Summaries and guidance will be shown in this language
                  </p>
                </div>

                <div className="space-y-3">
                  <Label className="text-slate-700 font-medium">
                    Areas of Interest{' '}
                    <span className="text-slate-400 font-normal text-xs">
                      (select at least 1)
                    </span>
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {INTEREST_AREAS.map((area) => {
                      const selected = data.interests.includes(area.id);
                      return (
                        <button
                          key={area.id}
                          type="button"
                          onClick={() => toggleInterest(area.id)}
                          className={`text-left px-3 py-2.5 rounded-lg border text-sm font-medium transition-all duration-150 ${
                            selected
                              ? 'bg-primary/10 border-primary/40 text-primary'
                              : 'bg-white border-slate-200 text-slate-600 hover:border-primary/30 hover:bg-primary/5'
                          }`}
                        >
                          {area.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>

            <Button
              className="btn-primary gap-2"
              onClick={handleNext}
              disabled={!canProceed()}
            >
              {currentStep === totalSteps ? (
                <>
                  Complete Setup
                  <CheckCircle className="w-4 h-4" />
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            You can update these details anytime from your{' '}
            <Link href="/profile" className="text-primary hover:underline">
              Profile Settings
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}