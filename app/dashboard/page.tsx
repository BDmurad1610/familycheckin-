'use client';

import { useEffect, useState } from 'react';
import { Bell, Users, ShieldAlert, CheckCircle2, Clock } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function DashboardOverview() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }
    getUser();
  }, []);

  if (loading) return <div className="p-8 text-center text-gray-500">Loading dashboard...</div>;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
        <p className="text-gray-500">
          {user ? `Logged in as ${user.email}` : 'You are not logged in. Go to /login to test.'}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <div>
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-500">Active Members</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
            <Bell className="w-6 h-6 text-amber-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-500">New Alerts</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-success" />
          </div>
          <div>
            <div className="text-2xl font-bold">100%</div>
            <div className="text-sm text-gray-500">Check-in Rate</div>
          </div>
        </div>
      </div>

      {/* Today's Check-ins */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-8">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-gray-400" /> Today's Check-ins
        </h2>
        <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-200">
          No members added yet. Go to the <strong>Members</strong> tab to add your first family member.
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-gray-400" /> Recent Alerts
        </h2>
        <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-200">
          No alerts. Everyone is doing great! 🎉
        </div>
      </div>
    </div>
  );
}
