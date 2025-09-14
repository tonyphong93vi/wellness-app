'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Star, Quote, Users, Globe, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OnboardingSocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const router = useRouter();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'Google',
      location: 'San Francisco, CA',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Fluently helped me improve my English confidence in just 3 weeks. I went from being nervous in meetings to leading presentations confidently.',
      improvement: 'Speaking confidence +85%'
    },
    {
      id: 2,
      name: 'Marco Rodriguez',
      role: 'Software Engineer',
      company: 'Microsoft',
      location: 'Seattle, WA',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The AI feedback is incredible. It catches mistakes I never knew I was making and helps me sound more natural in conversations.',
      improvement: 'Grammar accuracy +92%'
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Marketing Director',
      company: 'Shopify',
      location: 'Toronto, ON',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'I was struggling with business English for years. Fluently gave me the personalized practice I needed to excel in my role.',
      improvement: 'Business communication +78%'
    },
    {
      id: 4,
      name: 'Alex Kim',
      role: 'Data Scientist',
      company: 'Netflix',
      location: 'Los Angeles, CA',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The real-time feedback during my video calls is a game-changer. I can see my progress immediately and fix issues on the spot.',
      improvement: 'Pronunciation clarity +88%'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active users', icon: Users },
    { number: '34', label: 'Countries', icon: Globe },
    { number: '96%', label: 'Success rate', icon: TrendingUp }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleContinue = () => {
    router.push('/onboarding/goal');
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
          Step 5 of 12
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="w-full bg-white/20 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-5/12"></div>
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
            Join thousands of professionals<br />
            who <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent">improved</span> their English
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            See how Fluently has helped professionals from top companies advance their careers
          </p>
        </motion.div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Testimonial Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex items-start gap-6">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-white text-lg leading-relaxed mb-4">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-white/70 text-sm">
                        {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                      </div>
                      <div className="text-white/50 text-xs">
                        {testimonials[currentTestimonial].location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white/70 mb-1">Improvement</div>
                      <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                        {testimonials[currentTestimonial].improvement}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </motion.div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-center text-white/70 mb-6">Trusted by professionals at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white/50 font-semibold text-lg">Google</div>
            <div className="text-white/50 font-semibold text-lg">Microsoft</div>
            <div className="text-white/50 font-semibold text-lg">Netflix</div>
            <div className="text-white/50 font-semibold text-lg">Shopify</div>
            <div className="text-white/50 font-semibold text-lg">Airbnb</div>
            <div className="text-white/50 font-semibold text-lg">Uber</div>
          </div>
        </motion.div>

        {/* Continue Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
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
          Join thousands of successful professionals
        </p>
      </div>
    </div>
  );
}
