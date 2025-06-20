import React from 'react';
import { BookOpen, MapPin, Clock, Users } from 'lucide-react';

const CulturalInsights = () => {
  const insights = [
    {
      icon: BookOpen,
      title: "Hidden Histories",
      content: "The forgotten tale of Mumbadevi Temple that gave the city its name",
      category: "Heritage"
    },
    {
      icon: MapPin,
      title: "Secret Spots",
      content: "Discover the quiet reading nooks inside Crawford Market's upper floors",
      category: "Local Tips"
    },
    {
      icon: Clock,
      title: "Time Capsules",
      content: "How the iconic red double-decker buses shaped Mumbai's transport culture",
      category: "Nostalgia"
    },
    {
      icon: Users,
      title: "Community Stories",
      content: "The Parsi fire temples and their 1,000-year legacy in the city",
      category: "Culture"
    }
  ];

  return (
    <section className="py-16 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Cultural Insights
          </h2>
          <p className="font-lora text-lg text-gray-600 max-w-2xl mx-auto">
            Uncover the hidden layers of Mumbai's rich cultural tapestry through local knowledge and insider perspectives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <div 
              key={insight.title}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-coral/10 p-3 rounded-full group-hover:bg-coral/20 transition-colors flex-shrink-0">
                  <insight.icon className="h-6 w-6 text-coral" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-playfair text-xl font-semibold text-charcoal group-hover:text-coral transition-colors">
                      {insight.title}
                    </h3>
                    <span className="bg-coral/10 text-coral px-2 py-1 rounded-full text-xs font-lora">
                      {insight.category}
                    </span>
                  </div>
                  <p className="font-lora text-gray-600 leading-relaxed">
                    {insight.content}
                  </p>
                  <button className="mt-4 text-coral hover:text-coral/80 font-lora transition-colors text-sm">
                    Read Full Story →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <button className="bg-coral text-white px-8 py-4 rounded-full font-lora text-lg hover:bg-coral/90 transition-colors">
            Explore All Insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default CulturalInsights;