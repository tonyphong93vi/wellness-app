'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Mic, BookOpen, MessageSquare, Headphones, Users, Briefcase, GraduationCap, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OnboardingSkills() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const router = useRouter();

  const skills = [
    {
      id: 'speaking',
      label: 'Speaking',
      description: 'Improve pronunciation and fluency',
      icon: Mic,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'listening',
      label: 'Listening',
      description: 'Better understand native speakers',
      icon: Headphones,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'reading',
      label: 'Reading',
      description: 'Comprehend texts and articles',
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'writing',
      label: 'Writing',
      description: 'Express ideas clearly in writing',
      icon: MessageSquare,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'business',
      label: 'Business English',
      description: 'Professional communication',
      icon: Briefcase,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'academic',
      label: 'Academic English',
      description: 'For studies and research',
      icon: GraduationCap,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'travel',
      label: 'Travel English',
      description: 'Navigate and communicate abroad',
      icon: Globe,
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'social',
      label: 'Social English',
      description: 'Casual conversations and networking',
      icon: Users,
      color: 'from-red-500 to-red-600'
    }
  ];

  const toggleSkill = (skillId: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleContinue = () => {
    router.push('/onboarding/social-proof');
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
          Step 4 of 12
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-4/12"></div>
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
            What skills would you like<br />
            to <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent">improve</span>?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Select all the areas you'd like to focus on. You can always change this later.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const isSelected = selectedSkills.includes(skill.id);
              
              return (
                <motion.button
                  key={skill.id}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    isSelected
                      ? 'border-white bg-white/10 backdrop-blur-sm'
                      : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40'
                  }`}
                  onClick={() => toggleSkill(skill.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {skill.label}
                      </h3>
                      <p className="text-sm text-white/70">
                        {skill.description}
                      </p>
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

          {/* Continue Button */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button
              onClick={handleContinue}
              disabled={selectedSkills.length === 0}
              className={`px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 mx-auto ${
                selectedSkills.length > 0
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  : 'bg-white/20 text-white/50 cursor-not-allowed'
              }`}
            >
              Continue
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {selectedSkills.length > 0 && (
              <p className="text-sm text-white/70 mt-3">
                {selectedSkills.length} skill{selectedSkills.length !== 1 ? 's' : ''} selected
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <p className="text-sm text-white/50">
          You can skip this step and select skills later
        </p>
      </div>
    </div>
  );
}
