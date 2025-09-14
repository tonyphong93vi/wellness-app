'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, User, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OnboardingAge() {
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const router = useRouter();

  const ageRanges = [
    {
      id: '13-17',
      label: '13-17',
      description: 'Teenager',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: '18-24',
      label: '18-24',
      description: 'Young adult',
      color: 'from-green-500 to-green-600'
    },
    {
      id: '25-34',
      label: '25-34',
      description: 'Early career',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: '35-44',
      label: '35-44',
      description: 'Mid-career',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: '45-54',
      label: '45-54',
      description: 'Established professional',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: '55-64',
      label: '55-64',
      description: 'Senior professional',
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: '65+',
      label: '65+',
      description: 'Retired/Experienced',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const handleAgeSelect = (ageId: string) => {
    setSelectedAge(ageId);
  };

  const handleContinue = () => {
    router.push('/onboarding/skills');
  };

  const selectedAgeData = ageRanges.find(age => age.id === selectedAge);

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
          Step 3 of 12
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-3/12"></div>
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
            How old<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent">are you</span>?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            This helps us personalize your learning experience and provide age-appropriate content
          </p>
        </motion.div>

        {/* Age Selection */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ageRanges.map((age, index) => {
              const isSelected = selectedAge === age.id;
              
              return (
                <motion.button
                  key={age.id}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    isSelected
                      ? 'border-white bg-white/10 backdrop-blur-sm'
                      : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40'
                  }`}
                  onClick={() => handleAgeSelect(age.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${age.color} flex-shrink-0`}>
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {age.label}
                      </h3>
                      <p className="text-sm text-white/70">
                        {age.description}
                      </p>
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

        {/* Selected Age Confirmation */}
        {selectedAgeData && (
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">
                  Perfect! We'll customize content for {selectedAgeData.description.toLowerCase()}s
                </div>
                <p className="text-white/80">
                  Our AI will adapt the learning materials, examples, and topics to be most relevant for your age group.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Continue Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button
            onClick={handleContinue}
            disabled={!selectedAge}
            className={`px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 mx-auto ${
              selectedAge
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                : 'bg-white/20 text-white/50 cursor-not-allowed'
            }`}
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {selectedAge && (
            <p className="text-sm text-white/70 mt-3">
              Age-appropriate content will be provided
            </p>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <p className="text-sm text-white/50">
          Your age information is kept private and secure
        </p>
      </div>
    </div>
  );
}
