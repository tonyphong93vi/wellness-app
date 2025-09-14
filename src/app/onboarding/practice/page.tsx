'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Play, Mic, Headphones, Clock, CheckCircle, Star, Users, Target } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OnboardingPractice() {
  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);
  const router = useRouter();

  const practiceTypes = [
    {
      id: 'conversation',
      title: 'AI Conversation',
      description: 'Practice real conversations with our AI tutor',
      duration: '5-10 minutes',
      difficulty: 'Adaptive',
      icon: Mic,
      color: 'from-blue-500 to-blue-600',
      features: ['Real-time feedback', 'Natural dialogue', 'Contextual learning']
    },
    {
      id: 'pronunciation',
      title: 'Pronunciation Practice',
      description: 'Improve your accent and pronunciation',
      duration: '3-5 minutes',
      difficulty: 'Beginner to Advanced',
      icon: Headphones,
      color: 'from-green-500 to-green-600',
      features: ['Speech recognition', 'Accent training', 'Phonetic feedback']
    },
    {
      id: 'listening',
      title: 'Listening Comprehension',
      description: 'Enhance your listening skills with audio exercises',
      duration: '4-7 minutes',
      difficulty: 'All levels',
      icon: Headphones,
      color: 'from-purple-500 to-purple-600',
      features: ['Native speakers', 'Various accents', 'Comprehension tests']
    },
    {
      id: 'roleplay',
      title: 'Role-play Scenarios',
      description: 'Practice real-world situations and conversations',
      duration: '6-12 minutes',
      difficulty: 'Intermediate+',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      features: ['Job interviews', 'Business meetings', 'Social situations']
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Personalized feedback',
      description: 'Get instant corrections tailored to your level'
    },
    {
      icon: Target,
      title: 'Goal-oriented practice',
      description: 'Focus on areas that matter most to you'
    },
    {
      icon: Clock,
      title: 'Flexible scheduling',
      description: 'Practice anytime, anywhere at your own pace'
    }
  ];

  const handlePracticeSelect = (practiceId: string) => {
    setSelectedPractice(practiceId);
  };

  const handleStartPractice = () => {
    if (selectedPractice) {
      router.push(`/practice/${selectedPractice}`);
    }
  };

  const handleContinue = () => {
    router.push('/onboarding/age');
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
          Step 2 of 12
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-2/12"></div>
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
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Play className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Choose your<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent">practice</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Select the type of practice that best fits your learning goals and schedule
          </p>
        </motion.div>

        {/* Practice Types */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceTypes.map((practice, index) => {
              const Icon = practice.icon;
              const isSelected = selectedPractice === practice.id;
              
              return (
                <motion.button
                  key={practice.id}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    isSelected
                      ? 'border-white bg-white/10 backdrop-blur-sm'
                      : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40'
                  }`}
                  onClick={() => handlePracticeSelect(practice.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${practice.color} flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {practice.title}
                      </h3>
                      <p className="text-sm text-white/70 mb-3">
                        {practice.description}
                      </p>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-white/50" />
                          <span className="text-xs text-white/70">{practice.duration}</span>
                        </div>
                        <div className="text-xs text-white/70">
                          {practice.difficulty}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {practice.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full"
                          >
                            {feature}
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

        {/* Benefits */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.h2 
            className="text-2xl font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Why practice with Fluently?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {selectedPractice && (
            <button
              onClick={handleStartPractice}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg text-lg font-medium hover:from-green-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <Play className="w-5 h-5" />
              Start Practice Session
            </button>
          )}
          
          <button
            onClick={handleContinue}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-medium hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Continue Setup
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <p className="text-sm text-white/50">
          You can change your practice preferences anytime in settings
        </p>
      </div>
    </div>
  );
}
