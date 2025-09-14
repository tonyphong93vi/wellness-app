'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Monitor, Smartphone, Users, Briefcase, BookOpen, Headphones, MessageSquare, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OnboardingEnglishUsage() {
  const [selectedUsages, setSelectedUsages] = useState<string[]>([]);
  const router = useRouter();

  const usageContexts = [
    {
      id: 'work',
      title: 'At work',
      description: 'Meetings, emails, presentations, and professional communication',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600',
      examples: ['Team meetings', 'Client calls', 'Email writing', 'Presentations']
    },
    {
      id: 'social',
      title: 'Social situations',
      description: 'Casual conversations, networking, and social gatherings',
      icon: Users,
      color: 'from-green-500 to-green-600',
      examples: ['Parties', 'Networking events', 'Casual chats', 'Social media']
    },
    {
      id: 'online',
      title: 'Online & digital',
      description: 'Video calls, messaging, and digital communication',
      icon: Monitor,
      color: 'from-purple-500 to-purple-600',
      examples: ['Zoom calls', 'WhatsApp', 'Slack', 'Online forums']
    },
    {
      id: 'mobile',
      title: 'Mobile apps',
      description: 'Using English through mobile applications and services',
      icon: Smartphone,
      color: 'from-orange-500 to-orange-600',
      examples: ['Social apps', 'News apps', 'Entertainment', 'Travel apps']
    },
    {
      id: 'media',
      title: 'Media & entertainment',
      description: 'Movies, TV shows, podcasts, and reading content',
      icon: Headphones,
      color: 'from-pink-500 to-pink-600',
      examples: ['Netflix', 'Podcasts', 'YouTube', 'News articles']
    },
    {
      id: 'education',
      title: 'Learning & education',
      description: 'Courses, books, and educational content in English',
      icon: BookOpen,
      color: 'from-indigo-500 to-indigo-600',
      examples: ['Online courses', 'Books', 'Tutorials', 'Research papers']
    },
    {
      id: 'travel',
      title: 'Travel & tourism',
      description: 'Using English while traveling or in international contexts',
      icon: Globe,
      color: 'from-teal-500 to-teal-600',
      examples: ['Hotels', 'Restaurants', 'Transportation', 'Tourist attractions']
    },
    {
      id: 'writing',
      title: 'Writing & messaging',
      description: 'Text messages, emails, and written communication',
      icon: MessageSquare,
      color: 'from-red-500 to-red-600',
      examples: ['Text messages', 'Emails', 'Reports', 'Blog posts']
    }
  ];

  const toggleUsage = (usageId: string) => {
    setSelectedUsages(prev => 
      prev.includes(usageId) 
        ? prev.filter(id => id !== usageId)
        : [...prev, usageId]
    );
  };

  const handleContinue = () => {
    router.push('/onboarding/vocabulary-processing');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-black">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-2xl font-bold text-white">Fluently</div>
        </div>
        <div className="text-sm text-white/70">
          Step 7 of 12
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-7/12"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Where do you currently<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent">use English</span>?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Select all the contexts where you use English. This helps us understand your current experience level.
          </p>
        </motion.div>

        {/* Usage Contexts Grid */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {usageContexts.map((context, index) => {
              const Icon = context.icon;
              const isSelected = selectedUsages.includes(context.id);
              
              return (
                <motion.button
                  key={context.id}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    isSelected
                      ? 'border-white bg-white/10 backdrop-blur-sm'
                      : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40'
                  }`}
                  onClick={() => toggleUsage(context.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${context.color} flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {context.title}
                      </h3>
                      <p className="text-sm text-white/70 mb-3">
                        {context.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {context.examples.map((example, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Continue Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button
            onClick={handleContinue}
            disabled={selectedUsages.length === 0}
            className={`px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 mx-auto ${
              selectedUsages.length > 0
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                : 'bg-white/20 text-white/50 cursor-not-allowed'
            }`}
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {selectedUsages.length > 0 && (
            <p className="text-sm text-white/70 mt-3">
              {selectedUsages.length} context{selectedUsages.length !== 1 ? 's' : ''} selected
            </p>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <p className="text-sm text-white/50">
          Ready to start your English learning journey!
        </p>
      </div>
    </div>
  );
}
