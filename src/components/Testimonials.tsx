import React from 'react';
import type { Testimonial } from '../types';
import { Star } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah K.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    comment: "This game has seriously improved my style awareness. It's addictive!",
    rating: 5
  },
  {
    id: 2,
    name: "Mike R.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    comment: "Perfect way to kill time while learning about fashion trends.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma L.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    comment: "The daily challenges keep me coming back for more!",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Player Reviews
          </h2>
          <p className="text-xl text-gray-600">
            See what our community has to say
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};