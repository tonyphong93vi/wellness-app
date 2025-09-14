'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, Phone, Mic, Headphones, Clock, CheckCircle, Star, Users, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OnboardingCallIntro() {
  const router = useRouter();

  const callFeatures = [
    {
      icon: Mic,
      title: 'Real-time feedback',
      description: 'Get instant corrections on pronunciation, grammar, and vocabulary during your call'
    },
    {
      icon: Headphones,
      title: 'AI conversation partner',
      description: 'Practice with an intelligent AI that adapts to your level and interests'
    },
    {
      icon: Clock,
      title: 'Flexible scheduling',
      description: 'Practice anytime, anywhere - no need to book with human tutors'
    },
    {
      icon: CheckCircle,
      title: 'Progress tracking',
      description: 'See your improvement over time with detailed analytics and insights'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Personalized experience',
      description: 'AI adapts to your learning style and pace'
    },
    {
      icon: Users,
      title: 'Safe environment',
      description: 'Practice without judgment in a comfortable setting'
    },
    {
      icon: Globe,
      title: 'Real-world scenarios',
      description: 'Practice conversations for work, travel, and daily life'
    }
  ];

  const handleStartCall = () => {
    router.push('/call');
  };

  const handleSkip = () => {
    router.push('/onboarding/personal-plan');
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
          Step 9 of 12
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-9/12"></div>
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
            <Phone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ready for your first<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent">AI call</span>?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience the power of AI-powered English practice with real-time feedback and personalized conversations
          </p>
        </motion.div>

        {/* Call Features */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.h2 
            className="text-2xl font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What you&apos;ll experience:
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {callFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
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
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Why choose AI calls?
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
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
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

        {/* Call Duration Info */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-white mb-2">4 minutes</div>
            <p className="text-white/80">
              Your first call will be a quick assessment to understand your current English level and create a personalized learning plan.
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <button
            onClick={handleStartCall}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-medium hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <Phone className="w-5 h-5" />
            Start My First Call
          </button>
          
          <button
            onClick={handleSkip}
            className="px-6 py-3 text-white/70 hover:text-white transition-colors"
          >
            Skip for now
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <p className="text-sm text-white/50">
          Your call is completely private and secure
        </p>
      </div>
    </div>
  );
}
