import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const CareDuelBanner = () => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 border-2 border-coral rounded-lg shadow-lg p-6 animate-fade-up">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-coral/10 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-coral" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-1">
                  Topic of the Week
                </h3>
                <p className="font-lora text-gray-600">
                  Join the conversation on this week's featured discussion
                </p>
              </div>
            </div>
            <a 
              href="https://careduel.com/topic-of-the-week"
              target="_blank"
              rel="noopener noreferrer"
              className="font-lora text-lg text-coral hover:text-coral/80 transition-colors flex items-center gap-2 group border-b border-transparent hover:border-coral"
            >
              Explore Topic
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareDuelBanner;