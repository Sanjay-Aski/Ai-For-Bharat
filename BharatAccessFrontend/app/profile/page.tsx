'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Bell, Lock, ShieldAlert, LogOut, Save, X } from 'lucide-react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 98765 43210',
    state: 'Maharashtra',
    occupation: 'Farmer',
    language: 'Marathi',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    deadlineReminders: true,
    schemeUpdates: true,
    generalUpdates: false,
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (key: string) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            Profile & Settings
          </h1>
          <p className="text-lg text-slate-600">
            Manage your account information and preferences
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-slate-200/40 p-1 rounded-lg">
            <TabsTrigger value="profile" className="data-[state=active]:bg-white">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-white">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-white">
              <Lock className="w-4 h-4 mr-2" />
              Security
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-slate-900">Personal Information</h2>
                {!isEditing && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </Button>
                )}
              </div>

              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  {isEditing ? (
                    <Input
                      name="name"
                      value={profileData.name}
                      onChange={handleProfileChange}
                      className="bg-slate-50"
                    />
                  ) : (
                    <p className="text-slate-900 font-medium">{profileData.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  {isEditing ? (
                    <Input
                      name="email"
                      type="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      className="bg-slate-50"
                    />
                  ) : (
                    <p className="text-slate-900 font-medium">{profileData.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  {isEditing ? (
                    <Input
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      className="bg-slate-50"
                    />
                  ) : (
                    <p className="text-slate-900 font-medium">{profileData.phone}</p>
                  )}
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    State / Union Territory
                  </label>
                  {isEditing ? (
                    <select
                      name="state"
                      value={profileData.state}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-slate-50 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="maharashtra">Maharashtra</option>
                      <option value="uttar-pradesh">Uttar Pradesh</option>
                      <option value="bihar">Bihar</option>
                      <option value="madhya-pradesh">Madhya Pradesh</option>
                    </select>
                  ) : (
                    <p className="text-slate-900 font-medium">{profileData.state}</p>
                  )}
                </div>

                {/* Occupation */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Occupation
                  </label>
                  {isEditing ? (
                    <select
                      name="occupation"
                      value={profileData.occupation}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-slate-50 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="farmer">Farmer</option>
                      <option value="student">Student</option>
                      <option value="laborer">Agricultural Laborer</option>
                      <option value="entrepreneur">Entrepreneur</option>
                    </select>
                  ) : (
                    <p className="text-slate-900 font-medium">{profileData.occupation}</p>
                  )}
                </div>

                {/* Language */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Language
                  </label>
                  {isEditing ? (
                    <select
                      name="language"
                      value={profileData.language}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-slate-50 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Marathi">Marathi</option>
                      <option value="Tamil">Tamil</option>
                      <option value="Telugu">Telugu</option>
                    </select>
                  ) : (
                    <p className="text-slate-900 font-medium">{profileData.language}</p>
                  )}
                </div>

                {/* Edit/Save Buttons */}
                {isEditing && (
                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setIsEditing(false)}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                    <Button
                      className="flex-1 btn-primary"
                      onClick={() => setIsEditing(false)}
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            {/* Account Status */}
            <Card className="p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Account Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900">Account Status</p>
                    <p className="text-sm text-slate-600">Your account is active and verified</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-0">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900">Joined Date</p>
                    <p className="text-sm text-slate-600">January 15, 2024</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Notification Preferences</h2>

              <div className="space-y-4">
                {/* Email Notifications */}
                <label className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={notificationSettings.emailNotifications}
                    onChange={() => handleNotificationChange('emailNotifications')}
                    className="w-5 h-5 rounded border-slate-300 text-primary cursor-pointer"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Email Notifications</p>
                    <p className="text-sm text-slate-600">Get updates via email</p>
                  </div>
                </label>

                {/* SMS Notifications */}
                <label className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={notificationSettings.smsNotifications}
                    onChange={() => handleNotificationChange('smsNotifications')}
                    className="w-5 h-5 rounded border-slate-300 text-primary cursor-pointer"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">SMS Notifications</p>
                    <p className="text-sm text-slate-600">Get urgent updates via SMS</p>
                  </div>
                </label>

                {/* Deadline Reminders */}
                <label className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={notificationSettings.deadlineReminders}
                    onChange={() => handleNotificationChange('deadlineReminders')}
                    className="w-5 h-5 rounded border-slate-300 text-primary cursor-pointer"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Deadline Reminders</p>
                    <p className="text-sm text-slate-600">Reminders for upcoming deadlines</p>
                  </div>
                </label>

                {/* Scheme Updates */}
                <label className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={notificationSettings.schemeUpdates}
                    onChange={() => handleNotificationChange('schemeUpdates')}
                    className="w-5 h-5 rounded border-slate-300 text-primary cursor-pointer"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Scheme Updates</p>
                    <p className="text-sm text-slate-600">New schemes and eligibility changes</p>
                  </div>
                </label>

                {/* General Updates */}
                <label className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={notificationSettings.generalUpdates}
                    onChange={() => handleNotificationChange('generalUpdates')}
                    className="w-5 h-5 rounded border-slate-300 text-primary cursor-pointer"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">General Updates</p>
                    <p className="text-sm text-slate-600">General platform news and tips</p>
                  </div>
                </label>
              </div>

              <Button className="mt-6 btn-primary">Save Preferences</Button>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card className="p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Security Settings</h2>

              {/* Change Password */}
              <div className="mb-6 pb-6 border-b border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Change Password</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Password
                    </label>
                    <Input type="password" placeholder="Enter current password" className="bg-slate-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      New Password
                    </label>
                    <Input type="password" placeholder="Enter new password" className="bg-slate-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Confirm Password
                    </label>
                    <Input type="password" placeholder="Confirm new password" className="bg-slate-50" />
                  </div>
                  <Button className="btn-primary">Update Password</Button>
                </div>
              </div>

              {/* Two-Factor Authentication */}
              <div className="mb-6 pb-6 border-b border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Two-Factor Authentication</h3>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3 mb-4">
                  <ShieldAlert className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800">
                    Two-factor authentication adds an extra layer of security to your account
                  </p>
                </div>
                <Button variant="outline">Enable Two-Factor Authentication</Button>
              </div>

              {/* Logout */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Logout</h3>
                <Button variant="outline" className="text-red-600 hover:bg-red-50 hover:text-red-700">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout from All Devices
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
