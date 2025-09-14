'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, BookOpen, TrendingUp, Target } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OnboardingVocabularyScore() {
  const [score, setScore] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const router = useRouter();

  const finalScore = 78; // This would come from the vocabulary processing

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setScore(prev => {
          if (prev >= finalScore) {
            clearInterval(interval);
            return finalScore;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isAnimating, finalScore]);

  const getScoreLevel = (score: number) => {
    if (score >= 80) return { level: 'Advanced', color: 'from-green-500 to-emerald-600' };
    if (score >= 60) return { level: 'Intermediate', color: 'from-blue-500 to-cyan-600' };
    if (score >= 40) return { level: 'Pre-Intermediate', color: 'from-yellow-500 to-orange-600' };
    return { level: 'Beginner', color: 'from-red-500 to-pink-600' };
  };

  const scoreLevel = getScoreLevel(finalScore);

  const vocabularyInsights = [
    {
      category: 'Vocabulary Range',
      score: 82,
      description: 'You have a good range of vocabulary across different topics'
    },
    {
      category: 'Word Usage',
      score: 75,
      description: 'You use words appropriately in context most of the time'
    },
    {
      category: 'Complexity',
      score: 71,
      description: 'You can handle moderately complex vocabulary and expressions'
    },
    {
      category: 'Precision',
      score: 80,
      description: 'You choose words that accurately convey your intended meaning'
    }
  ];

  const recommendations = [
    {
      icon: BookOpen,
      title: 'Expand Academic Vocabulary',
      description: 'Focus on formal and academic terms to reach advanced level'
    },
    {
      icon: Target,
      title: 'Practice Context Usage',
      description: 'Work on using complex words in appropriate situations'
    },
    {
      icon: TrendingUp,
      title: 'Idiomatic Expressions',
      description: 'Learn common idioms and phrasal verbs for natural speech'
    }
  ];

  const handleContinue = () => {
    router.push('/onboarding/practice');
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
          Step 1 of 12
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-1/12"></div>
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
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Your vocabulary<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent">score</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Based on your responses, here&apos;s your current vocabulary assessment
          </p>
        </motion.div>

        {/* Score Display */}
        <div className="max-w-2xl mx-auto mb-12">
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 50}`}
                  strokeDashoffset={`${2 * Math.PI * 50 * (1 - score / 100)}`}
                  className="transition-all duration-1000 ease-out"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{score}</div>
                  <div className="text-sm text-white/70">/ 100</div>
                </div>
              </div>
            </div>
            
            <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${scoreLevel.color} text-white font-semibold mb-4`}>
              {scoreLevel.level}
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-2">
              Great vocabulary foundation!
            </h2>
            <p className="text-white/80">
              You have a solid vocabulary base. With focused practice, you can reach advanced level in 3-6 months.
            </p>
          </motion.div>
        </div>

        {/* Detailed Insights */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.h2 
            className="text-2xl font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Detailed Analysis
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vocabularyInsights.map((insight, index) => (
              <motion.div
                key={insight.category}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {insight.category}
                  </h3>
                  <div className="text-2xl font-bold text-white">
                    {insight.score}
                  </div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 mb-3">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${insight.score}%` }}
                  ></div>
                </div>
                <p className="text-white/70 text-sm">
                  {insight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.h2 
            className="text-2xl font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Recommended Focus Areas
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => {
              const Icon = rec.icon;
              return (
                <motion.div
                  key={rec.title}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {rec.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {rec.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Continue Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button
            onClick={handleContinue}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-medium hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <p className="text-sm text-white/50">
          Your vocabulary score will be updated as you practice
        </p>
      </div>
    </div>
  );
}
