import React from 'react';
import { Trophy, Star, ExternalLink } from 'lucide-react';

const AwardsPanels = () => {
  const panels = [
    {
      title: "Vote Top216",
      description: "Cast your vote for Mumbai's most remarkable stories and experiences",
      icon: Trophy,
      link: "https://top216.com/vote",
      color: "text-coral"
    },
    {
      title: "Explore TheTop36",
      description: "Discover the highlights of Mumbai's cultural treasures",
      icon: Star,
      link: "https://thetop36.com/highlights",
      color: "text-coral"
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {panels.map((panel, index) => (
            <a
              key={panel.title}
              href={panel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-charcoal rounded-lg shadow-lg p-6 hover:border-coral transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-coral/10 p-3 rounded-full group-hover:bg-coral/20 transition-colors">
                  <panel.icon className={`h-6 w-6 ${panel.color}`} />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-charcoal group-hover:text-coral transition-colors">
                  {panel.title}
                </h3>
              </div>
              <p className="font-lora text-gray-600 mb-4">
                {panel.description}
              </p>
              <div className="flex items-center gap-2 text-coral group-hover:text-coral/80 transition-colors">
                <span className="font-lora">Learn More</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsPanels;