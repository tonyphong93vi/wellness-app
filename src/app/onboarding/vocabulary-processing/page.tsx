'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, BookOpen, Brain, Target, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OnboardingVocabularyProcessing() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const processingSteps = [
    {
      icon: Brain,
      title: 'Analyzing vocabulary patterns',
      description: 'Identifying your current vocabulary level and usage patterns'
    },
    {
      icon: Target,
      title: 'Mapping learning gaps',
      description: 'Finding areas where you can expand your vocabulary'
    },
    {
      icon: BookOpen,
      title: 'Creating personalized lists',
      description: 'Building custom vocabulary sets based on your goals'
    },
    {
      icon: TrendingUp,
      title: 'Setting learning targets',
      description: 'Establishing achievable vocabulary growth milestones'
    }
  ];

  const vocabularyInsights = [
    {
      category: 'Current Level',
      value: 'Intermediate',
      description: 'Based on your responses and usage patterns'
    },
    {
      category: 'Strong Areas',
      value: 'Business & Technology',
      description: 'You show confidence in professional vocabulary'
    },
    {
      category: 'Growth Areas',
      value: 'Academic & Creative',
      description: 'Opportunities to expand formal and expressive language'
    },
    {
      category: 'Learning Style',
      value: 'Contextual',
      description: 'You learn best through real-world examples and usage'
    }
  ];

  useEffect(() => {
    if (isProcessing) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsProcessing(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isProcessing]);

  const handleStartProcessing = () => {
    setIsProcessing(true);
    setProgress(0);
  };

  const handleContinue = () => {
    router.push('/onboarding/call-intro');
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
          Step 8 of 12
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-8/12"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        {!isProcessing ? (
          <>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Let&apos;s analyze your<br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent">vocabulary</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                We&apos;ll process your vocabulary patterns to create a personalized learning experience tailored to your needs
              </p>
            </motion.div>

            {/* Processing Steps Preview */}
            <div className="max-w-4xl mx-auto mb-12">
              <motion.h2 
                className="text-2xl font-bold text-white text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                What we&apos;ll analyze:
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {processingSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.title}
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
                            {step.title}
                          </h3>
                          <p className="text-white/70">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Start Processing Button */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <button
                onClick={handleStartProcessing}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-medium hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                <Brain className="w-5 h-5" />
                Start Vocabulary Analysis
              </button>
            </motion.div>
          </>
        ) : (
          <>
            {/* Processing Screen */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Processing your<br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent">vocabulary</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Analyzing your vocabulary patterns and creating personalized learning recommendations
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-2">{progress}%</div>
                  <p className="text-white/80">Processing complete</p>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 mb-4">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-center">
                  <Clock className="w-5 h-5 text-white/70" />
                  <span className="text-white/70 ml-2">This usually takes 30-60 seconds</span>
                </div>
              </div>
            </div>

            {/* Processing Steps */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {processingSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isCompleted = progress > (index + 1) * 25;
                  const isActive = progress > index * 25 && progress <= (index + 1) * 25;
                  
                  return (
                    <motion.div
                      key={step.title}
                      className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                        isCompleted 
                          ? 'bg-green-500/20 border-green-400/50' 
                          : isActive 
                            ? 'bg-blue-500/20 border-blue-400/50' 
                            : 'bg-white/5 border-white/20'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl flex-shrink-0 ${
                          isCompleted 
                            ? 'bg-green-500' 
                            : isActive 
                              ? 'bg-blue-500' 
                              : 'bg-white/20'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="w-6 h-6 text-white" />
                          ) : (
                            <Icon className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-white/70">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Results Preview */}
            {progress >= 100 && (
              <motion.div
                className="max-w-4xl mx-auto mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold text-white text-center mb-6">
                    Your Vocabulary Profile
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {vocabularyInsights.map((insight) => (
                      <div key={insight.category} className="text-center">
                        <div className="text-lg font-semibold text-white mb-1">
                          {insight.category}
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                          {insight.value}
                        </div>
                        <p className="text-white/70 text-sm">
                          {insight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Continue Button */}
            {progress >= 100 && (
              <motion.div 
                className="text-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <button
                  onClick={handleContinue}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-medium hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  Continue
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <p className="text-sm text-white/50">
          Your vocabulary data is processed securely and privately
        </p>
      </div>
    </div>
  );
}
