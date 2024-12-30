import React from 'react';
import { Trophy, Target, Flame } from 'lucide-react';
import type { GameStats } from '../types';

const stats: GameStats = {
  totalGames: 1000000,
  accuracy: 87,
  bestStreak: 42
};

export const GameStats = () => {
  return (
    <div className="bg-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-white">
            <Trophy className="w-12 h-12 mb-4" />
            <div className="text-4xl font-bold mb-2">
              {stats.totalGames.toLocaleString()}+
            </div>
            <p className="text-purple-200">Games Played</p>
          </div>
          <div className="flex flex-col items-center text-white">
            <Target className="w-12 h-12 mb-4" />
            <div className="text-4xl font-bold mb-2">{stats.accuracy}%</div>
            <p className="text-purple-200">Average Accuracy</p>
          </div>
          <div className="flex flex-col items-center text-white">
            <Flame className="w-12 h-12 mb-4" />
            <div className="text-4xl font-bold mb-2">{stats.bestStreak}</div>
            <p className="text-purple-200">Best Streak</p>
          </div>
        </div>
      </div>
    </div>
  );
};