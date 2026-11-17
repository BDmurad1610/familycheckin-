'use client';

import { useState } from 'react';
import { Plus, User, Phone, Clock } from 'lucide-react';

export default function MembersPage() {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Family Members</h1>
          <p className="text-gray-500">Manage who receives check-ins.</p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="bg-primary text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-600"
        >
          <Plus className="w-4 h-4" /> Add Member
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
          <h2 className="font-bold mb-4">Add New Member</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" className="w-full border p-2 rounded-lg" placeholder="e.g. Mom" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Role</label>
              <select className="w-full border p-2 rounded-lg">
                <option value="elder">Elderly Parent</option>
                <option value="child">Child</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">WhatsApp Number</label>
              <input type="text" className="w-full border p-2 rounded-lg" placeholder="+8801..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Check-in Time</label>
              <input type="time" className="w-full border p-2 rounded-lg" defaultValue="09:00" />
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <button onClick={() => setIsAdding(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">Cancel</button>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600">Save Member</button>
          </div>
        </div>
      )}

      {/* Members List Placeholder */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 text-center text-gray-500">
          <User className="w-12 h-12 mx-auto text-gray-300 mb-3" />
          <p>No members added yet.</p>
          <p className="text-sm">Click "Add Member" to get started.</p>
        </div>
      </div>
    </div>
  );
}
