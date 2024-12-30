import React from 'react';
import { Sparkles, Smartphone, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Style Scope
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Can you guess the right style?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="px-8 py-3 bg-white text-purple-700 rounded-full font-semibold hover:bg-purple-50 transition-colors">
              Download Now
            </button>
            <button className="px-8 py-3 bg-purple-500 text-white rounded-full font-semibold hover:bg-purple-400 transition-colors">
              Play Online
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-white">
              <Sparkles className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Daily Challenges</h3>
              <p className="text-purple-100">New style puzzles every day</p>
            </div>
            <div className="flex flex-col items-center text-white">
              <Users className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Rankings</h3>
              <p className="text-purple-100">Compete with players worldwide</p>
            </div>
            <div className="flex flex-col items-center text-white">
              <Smartphone className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Play Anywhere</h3>
              <p className="text-purple-100">Available on all devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};