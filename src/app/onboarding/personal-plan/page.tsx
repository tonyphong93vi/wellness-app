'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Target, Calendar, TrendingUp, CheckCircle, Star, Clock, BookOpen, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OnboardingPersonalPlan() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const router = useRouter();

  const planOptions = [
    {
      id: 'intensive',
      title: 'Intensive Plan',
      description: 'Fast-track your English improvement',
      duration: '3 months',
      sessions: 'Daily practice',
      timePerDay: '20-30 minutes',
      icon: TrendingUp,
      color: 'from-red-500 to-pink-600',
      features: [
        'Daily AI conversations',
        'Weekly progress reviews',
        'Advanced vocabulary building',
        'Pronunciation coaching',
        'Business English focus'
      ],
      target: 'Reach advanced level in 3 months'
    },
    {
      id: 'balanced',
      title: 'Balanced Plan',
      description: 'Steady progress with flexibility',
      duration: '6 months',
      sessions: '4-5 times per week',
      timePerDay: '15-20 minutes',
      icon: Target,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Regular practice sessions',
        'Mixed skill development',
        'Real-world scenarios',
        'Progress tracking',
        'Flexible scheduling'
      ],
      target: 'Significant improvement in 6 months'
    },
    {
      id: 'casual',
      title: 'Casual Plan',
      description: 'Learn at your own pace',
      duration: '12 months',
      sessions: '2-3 times per week',
      timePerDay: '10-15 minutes',
      icon: Calendar,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Flexible practice schedule',
        'Basic to intermediate focus',
        'Conversation practice',
        'Vocabulary building',
        'Stress-free learning'
      ],
      target: 'Gradual improvement over 12 months'
    }
  ];

  const planBenefits = [
    {
      icon: Star,
      title: 'Personalized curriculum',
      description: 'AI adapts to your learning style and pace'
    },
    {
      icon: Clock,
      title: 'Flexible scheduling',
      description: 'Practice when it works for you'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive tracking',
      description: 'Monitor your progress with detailed analytics'
    },
    {
      icon: Users,
      title: 'Expert support',
      description: 'Access to learning specialists when needed'
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleCreatePlan = () => {
    router.push('/onboarding/sign-up-with-email');
  };

  const selectedPlanData = planOptions.find(plan => plan.id === selectedPlan);

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
          Step 11 of 12
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-11/12"></div>
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
            <Target className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Your personalized<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent">learning plan</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Choose the plan that best fits your goals, schedule, and learning style
          </p>
        </motion.div>

        {/* Plan Options */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planOptions.map((plan, index) => {
              const Icon = plan.icon;
              const isSelected = selectedPlan === plan.id;
              
              return (
                <motion.button
                  key={plan.id}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    isSelected
                      ? 'border-white bg-white/10 backdrop-blur-sm'
                      : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40'
                  }`}
                  onClick={() => handlePlanSelect(plan.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${plan.color} flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {plan.title}
                      </h3>
                      <p className="text-sm text-white/70 mb-3">
                        {plan.description}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Duration:</span>
                      <span className="text-white font-medium">{plan.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Sessions:</span>
                      <span className="text-white font-medium">{plan.sessions}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Time per day:</span>
                      <span className="text-white font-medium">{plan.timePerDay}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-white/70 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-white/80">
                      <strong>Goal:</strong> {plan.target}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Plan Benefits */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.h2 
            className="text-2xl font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            What you&apos;ll get with any plan:
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 text-xs">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Selected Plan Summary */}
        {selectedPlanData && (
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">
                  Perfect! You&apos;ve chosen the {selectedPlanData.title}
                </div>
                <p className="text-white/80">
                  Your personalized learning journey will begin with {selectedPlanData.sessions.toLowerCase()} sessions, 
                  {selectedPlanData.timePerDay} each day, designed to help you {selectedPlanData.target.toLowerCase()}.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Create Plan Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={handleCreatePlan}
            disabled={!selectedPlan}
            className={`px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 mx-auto ${
              selectedPlan
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                : 'bg-white/20 text-white/50 cursor-not-allowed'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            Create My Learning Plan
          </button>
          
          {selectedPlan && (
            <p className="text-sm text-white/70 mt-3">
              Ready to start your English learning journey!
            </p>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <p className="text-sm text-white/50">
          You can modify your plan anytime in your dashboard
        </p>
      </div>
    </div>
  );
}
