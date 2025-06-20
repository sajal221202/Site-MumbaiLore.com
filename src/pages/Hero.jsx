import React from 'react';
import { ArrowRight, Heart, Users, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-up">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6">
            Mumbai's
            <span className="text-coral block">Untold Stories</span>
          </h1>
          <p className="font-lora text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Where locals and visitors share the city's tales, hidden histories, and cultural insights—
            through photos, videos, poems, and street art. Discover the soul of Mumbai, one story at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-coral text-white px-8 py-4 rounded-full font-lora text-lg hover:bg-coral/90 transition-all duration-300 flex items-center justify-center gap-2 group">
              Start Exploring
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-charcoal text-charcoal px-8 py-4 rounded-full font-lora text-lg hover:border-coral hover:text-coral transition-colors">
              Share Your Story
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-3">
                <Heart className="h-8 w-8 text-coral" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-charcoal mb-2">2,847</h3>
              <p className="font-lora text-gray-600">Stories Shared</p>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-coral" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-charcoal mb-2">12,394</h3>
              <p className="font-lora text-gray-600">Community Members</p>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center justify-center mb-3">
                <MapPin className="h-8 w-8 text-coral" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-charcoal mb-2">156</h3>
              <p className="font-lora text-gray-600">Neighborhoods</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;