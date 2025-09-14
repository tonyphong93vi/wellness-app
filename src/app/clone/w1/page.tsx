'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, 
  Home, 
  FileText, 
  Shield, 
  BookOpen, 
  Settings,
  Trophy,
  Star,
  Clock,
  BarChart3
} from 'lucide-react';

export default function CloneW1() {
  const [activeTab, setActiveTab] = useState('home');

  const monthlyData = [
    { month: 'June', lessons: 23, color: 'bg-orange-500' },
    { month: 'July', lessons: 43, color: 'bg-purple-500' },
    { month: 'August', lessons: 12, color: 'bg-gray-400' }
  ];

  const maxLessons = Math.max(...monthlyData.map(d => d.lessons));

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl"></div>

      {/* Header Section */}
      <header className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Profile Picture */}
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">J</span>
          </div>
          
          {/* Greeting and Progress */}
          <div>
            <h1 className="text-lg font-bold text-black">Hello, Jacob</h1>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Progress: 76%</span>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="relative">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Bell className="w-5 h-5 text-gray-600" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
      </header>

      {/* Main Banner */}
      <section className="px-6 mb-6">
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-6 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background decorations */}
          <div className="absolute top-2 right-8 w-4 h-4 bg-white/20 rounded-full"></div>
          <div className="absolute top-6 right-12 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-4 right-6 w-3 h-3 bg-white/20 rounded-full"></div>
          <div className="absolute top-4 right-16 w-2 h-2 bg-white/25 rounded-full"></div>
          
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">
                A series of Olympiads
              </h2>
              <p className="text-white/90 text-sm leading-relaxed">
                A series of Olympiads for erudite people from all over the world
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-yellow-400 font-semibold">Olympiads</span>
                <span className="text-white/70 text-sm">y=?</span>
              </div>
              
              {/* Start Button */}
              <button className="mt-4 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-1"></div>
              </button>
            </div>
            
            {/* Trophy Illustration */}
            <div className="relative">
              <div className="w-16 h-20 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-t-full flex items-end justify-center relative">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-2 w-20 h-4 bg-pink-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Statistics Cards */}
      <section className="px-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Lessons Card */}
          <motion.div
            className="bg-white rounded-2xl p-4 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-orange-600" />
              </div>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Lessons</h3>
            <p className="text-2xl font-bold text-gray-800">78</p>
          </motion.div>

          {/* Hours Card */}
          <motion.div
            className="bg-white rounded-2xl p-4 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-purple-600" />
              </div>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Hours</h3>
            <p className="text-2xl font-bold text-gray-800">43</p>
          </motion.div>
        </div>
      </section>

      {/* Progress Performance Section */}
      <section className="px-6 mb-20">
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800">Progress perfomance</h3>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          {/* Monthly Progress Chart */}
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <motion.div
                key={data.month}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="w-16 text-sm font-medium text-gray-600">
                  {data.month}
                </div>
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${data.color} h-3 rounded-full transition-all duration-1000`}
                      style={{ width: `${(data.lessons / maxLessons) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-20 text-sm text-gray-600">
                  {data.lessons} lessons
                </div>
                <div className={`w-2 h-2 ${data.color} rounded-full`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 rounded-t-3xl px-6 py-4">
        <div className="flex items-center justify-around">
          {[
            { id: 'home', icon: Home, active: true },
            { id: 'tasks', icon: FileText, active: false },
            { id: 'achievements', icon: Shield, active: false },
            { id: 'library', icon: BookOpen, active: false },
            { id: 'settings', icon: Settings, active: false }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                  item.active ? 'text-purple-400' : 'text-gray-400'
                }`}
              >
                <Icon className="w-6 h-6" />
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
