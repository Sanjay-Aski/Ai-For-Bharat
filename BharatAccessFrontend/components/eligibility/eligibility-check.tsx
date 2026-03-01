'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface EligibilityCheckProps {
  scheme: string;
  onResultsReady?: (results: any) => void;
}

export function EligibilityCheck({ scheme, onResultsReady }: EligibilityCheckProps) {
  const [formData, setFormData] = useState({
    age: '',
    state: '',
    occupation: '',
    landSize: '',
    income: '',
  });

  const [isChecking, setIsChecking] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.occupation) newErrors.occupation = 'Occupation is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsChecking(true);

    // Simulate API call
    setTimeout(() => {
      const results = {
        eligible: Math.random() > 0.3,
        percentage: Math.floor(Math.random() * 100),
        formData,
      };
      onResultsReady?.(results);
      setIsChecking(false);
    }, 1500);
  };

  return (
    <Card className="p-6 border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Check Your Eligibility</h2>
      <p className="text-slate-600 mb-6">
        Answer a few quick questions to see if you qualify for {scheme}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Age */}
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-slate-700 mb-2">
            Your Age
          </label>
          <Input
            id="age"
            name="age"
            type="number"
            placeholder="e.g., 35"
            value={formData.age}
            onChange={handleChange}
            disabled={isChecking}
            className={errors.age ? 'border-red-500' : ''}
          />
          {errors.age && <p className="text-sm text-red-600 mt-1">{errors.age}</p>}
        </div>

        {/* State */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-2">
            State / Union Territory
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            disabled={isChecking}
            className={`w-full px-3 py-2 border rounded-lg bg-white disabled:bg-slate-100 ${
              errors.state ? 'border-red-500' : 'border-slate-300'
            } focus:ring-2 focus:ring-primary/20 focus:border-primary`}
          >
            <option value="">Select your state</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="uttar-pradesh">Uttar Pradesh</option>
            <option value="bihar">Bihar</option>
            <option value="madhya-pradesh">Madhya Pradesh</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="others">Others</option>
          </select>
          {errors.state && <p className="text-sm text-red-600 mt-1">{errors.state}</p>}
        </div>

        {/* Occupation */}
        <div>
          <label htmlFor="occupation" className="block text-sm font-medium text-slate-700 mb-2">
            Primary Occupation
          </label>
          <select
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            disabled={isChecking}
            className={`w-full px-3 py-2 border rounded-lg bg-white disabled:bg-slate-100 ${
              errors.occupation ? 'border-red-500' : 'border-slate-300'
            } focus:ring-2 focus:ring-primary/20 focus:border-primary`}
          >
            <option value="">Select occupation</option>
            <option value="farmer">Farmer</option>
            <option value="student">Student</option>
            <option value="laborer">Agricultural Laborer</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="artisan">Artisan/Craftsperson</option>
            <option value="others">Others</option>
          </select>
          {errors.occupation && <p className="text-sm text-red-600 mt-1">{errors.occupation}</p>}
        </div>

        {/* Land Size */}
        <div>
          <label htmlFor="landSize" className="block text-sm font-medium text-slate-700 mb-2">
            Land Owned (in acres) - Optional
          </label>
          <Input
            id="landSize"
            name="landSize"
            type="number"
            step="0.1"
            placeholder="e.g., 2.5"
            value={formData.landSize}
            onChange={handleChange}
            disabled={isChecking}
          />
          <p className="text-xs text-slate-500 mt-1">Leave blank if you don't own land</p>
        </div>

        {/* Income */}
        <div>
          <label htmlFor="income" className="block text-sm font-medium text-slate-700 mb-2">
            Annual Income (Optional)
          </label>
          <select
            id="income"
            name="income"
            value={formData.income}
            onChange={handleChange}
            disabled={isChecking}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white disabled:bg-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option value="">Select income range</option>
            <option value="upto-2.5l">Up to ₹2.5 Lakh</option>
            <option value="2.5l-5l">₹2.5 - ₹5 Lakh</option>
            <option value="5l-10l">₹5 - ₹10 Lakh</option>
            <option value="above-10l">Above ₹10 Lakh</option>
          </select>
        </div>

        {/* Info Box */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800">
            Your information is used only for eligibility calculation and is never shared with anyone.
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isChecking}
          className="w-full btn-primary h-11 text-base font-semibold"
        >
          {isChecking ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Checking Eligibility...
            </>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Check Eligibility
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}
