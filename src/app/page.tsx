'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Users, CheckCircle, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [selectedImprovement, setSelectedImprovement] = useState<string | null>(null);
  const router = useRouter();

  const improvements = [
    { id: 'pronunciation', label: 'pronunciation' },
    { id: 'grammar', label: 'grammar' },
    { id: 'vocabulary', label: 'vocabulary' },
    { id: 'fluency', label: 'fluency' }
  ];

  const handleLetsImprove = () => {
    router.push('/onboarding/vocabulary-score');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-black">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-white">Fluently</div>
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          Log in
        </button>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What would you like<br />
          to <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-transparent">improve</span> in your English?
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {improvements.map((improvement) => (
            <motion.button
              key={improvement.id}
              className={`px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 ${
                selectedImprovement === improvement.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedImprovement(improvement.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {improvement.label}
            </motion.button>
          ))}
        </div>

        <motion.button 
          className="px-8 py-4 bg-black text-white rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLetsImprove}
        >
          Let&apos;s improve
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            96% of people spend years<br />
            learning English
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ... but still can&apos;t speak fluently
          </motion.h3>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="px-6 py-16 text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-black mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Try Fluently — the best AI Tutor<br />
          to progress in English
        </motion.h2>

        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-lg text-gray-600 mb-4">
            While other apps teach the basics...
          </p>
          <p className="text-2xl font-semibold text-black">
            we&apos;re here to take you to <span className="font-bold">Advanced level</span> and higher
          </p>
        </div>

        <motion.button 
          className="px-8 py-4 bg-black text-white rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try Fluently
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Get your real<br />
                English level
              </h3>
              <p className="text-gray-600">
                We&apos;ll assess your real English level and track your progress over time
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Improve with<br />
                a personal plan
              </h3>
              <p className="text-gray-600">
                Our AI analyzes your level and mistakes to create a personalized improvement program
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Practice with<br />
                AI tutor
              </h3>
              <p className="text-gray-600">
                Speaking practice on real-life topics: job interviews, meetings, sales, pitch calls—whatever you need
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Feedback Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-black mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get AI feedback<br />
            on your real-life calls
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect Fluently to your online calls to fix mistakes in your<br />
            grammar, pronunciation, and vocabulary
          </motion.p>

          <motion.p 
            className="text-lg text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Fluently supports every meeting platform
          </motion.p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            ...cheaper than<br />
            a human tutor.
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            And available 24/7
          </motion.p>

          <motion.button 
            className="mt-8 px-8 py-4 bg-black text-white rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Fluently
          </motion.button>
        </div>
      </section>

      {/* Users Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-black mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Join our users<br />
            from 34 countries
          </motion.h2>
        </div>
      </section>

      {/* Test Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-black mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get your real English level
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Make a quick 4-minute call with our AI tutor<br />
            and get your English score for FREE
          </motion.p>

          <motion.button 
            className="px-8 py-4 bg-black text-white rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Test My English Level
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-black text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 Fluently Inc.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors">Support</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Fluently iOS app</a>
          </div>
        </div>
      </footer>
    </div>
  );
}