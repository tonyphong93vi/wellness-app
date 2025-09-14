'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Target, Briefcase, GraduationCap, Globe, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OnboardingGoal() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const router = useRouter();

  const goals = [
    {
      id: 'career',
      title: 'Advance my career',
      description: 'Get promoted, land better jobs, or switch industries',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600',
      examples: ['Job interviews', 'Presentations', 'Team meetings', 'Client calls']
    },
    {
      id: 'academic',
      title: 'Academic success',
      description: 'Excel in studies, research, or academic writing',
      icon: GraduationCap,
      color: 'from-purple-500 to-purple-600',
      examples: ['Research papers', 'Academic presentations', 'Thesis writing', 'Conference talks']
    },
    {
      id: 'immigration',
      title: 'Immigration & relocation',
      description: 'Move to an English-speaking country successfully',
      icon: Globe,
      color: 'from-green-500 to-green-600',
      examples: ['Visa interviews', 'Cultural integration', 'Daily conversations', 'Professional networking']
    },
    {
      id: 'confidence',
      title: 'Build confidence',
      description: 'Feel comfortable speaking English in any situation',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      examples: ['Social gatherings', 'Networking events', 'Casual conversations', 'Public speaking']
    },
    {
      id: 'business',
      title: 'Business growth',
      description: 'Expand business internationally or work with global clients',
      icon: TrendingUp,
      color: 'from-indigo-500 to-indigo-600',
      examples: ['Sales calls', 'Partnership meetings', 'Investor pitches', 'International conferences']
    },
    {
      id: 'personal',
      title: 'Personal development',
      description: 'Learn for personal growth and cultural understanding',
      icon: Target,
      color: 'from-pink-500 to-pink-600',
      examples: ['Travel conversations', 'Cultural exchange', 'Media consumption', 'Online communities']
    }
  ];

  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId);
  };

  const handleComplete = () => {
    router.push('/onboarding/english-usage');
  };

  const selectedGoalData = goals.find(goal => goal.id === selectedGoal);

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
          Step 6 of 12
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-6/12"></div>
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
            What&apos;s your main<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent">goal</span> with English?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            This helps us personalize your learning experience and track your progress
          </p>
        </motion.div>

        {/* Goals Grid */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              const isSelected = selectedGoal === goal.id;
              
              return (
                <motion.button
                  key={goal.id}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    isSelected
                      ? 'border-white bg-white/10 backdrop-blur-sm'
                      : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40'
                  }`}
                  onClick={() => handleGoalSelect(goal.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${goal.color} flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {goal.title}
                      </h3>
                      <p className="text-sm text-white/70 mb-3">
                        {goal.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {goal.examples.map((example, idx) => (
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
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Selected Goal Details */}
        {selectedGoalData && (
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">
                  Perfect! We&apos;ll help you with {selectedGoalData.title.toLowerCase()}
                </div>
                <p className="text-white/80">
                  Our AI will create a personalized learning plan focused on your specific goals and track your progress along the way.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Complete Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button
            onClick={handleComplete}
            disabled={!selectedGoal}
            className={`px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 mx-auto ${
              selectedGoal
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                : 'bg-white/20 text-white/50 cursor-not-allowed'
            }`}
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {selectedGoal && (
            <p className="text-sm text-white/70 mt-3">
              Ready to start your English journey!
            </p>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <p className="text-sm text-white/50">
          You can change your goal anytime in settings
        </p>
      </div>
    </div>
  );
}
