import React from 'react';
import { Brain, Trophy, Zap, Crown, Target, Palette } from 'lucide-react';
import type { Feature } from '../types';

const features: Feature[] = [
  {
    name: 'Smart Predictions',
    icon: 'Brain',
    description: 'Train your eye to spot style patterns and trends'
  },
  {
    name: 'Daily Rewards',
    icon: 'Trophy',
    description: 'Earn points and unlock special achievements'
  },
  {
    name: 'Quick Rounds',
    icon: 'Zap',
    description: 'Perfect for short breaks and quick fun'
  },
  {
    name: 'Pro Levels',
    icon: 'Crown',
    description: 'Challenge yourself with advanced style combinations'
  },
  {
    name: 'Precision Points',
    icon: 'Target',
    description: 'Score based on accuracy and speed'
  },
  {
    name: 'Style Categories',
    icon: 'Palette',
    description: 'From hair color to accessories, test it all'
  }
];

const IconMap = {
  Brain,
  Trophy,
  Zap,
  Crown,
  Target,
  Palette
};

export const Features = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Game Features
          </h2>
          <p className="text-xl text-gray-600">
            Discover what makes our style guessing game unique
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = IconMap[feature.icon as keyof typeof IconMap];
            return (
              <div
                key={feature.name}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">
                    {feature.name}
                  </h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};