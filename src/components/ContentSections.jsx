import React from 'react';
import { Camera, Video, PenTool, Palette } from 'lucide-react';

const ContentSections = () => {
  const sections = [
    {
      id: 'gallery',
      title: 'Photo Stories',
      description: 'Capture Mumbai through your lens - from bustling streets to quiet corners',
      icon: Camera,
      items: [
        {
          image: 'https://images.pexels.com/photos/1097491/pexels-photo-1097491.jpeg?auto=compress&cs=tinysrgb&w=400',
          title: 'Dawn at Marine Drive',
          author: 'Priya S.'
        },
        {
          image: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=400',
          title: 'Street Food Chronicles',
          author: 'Rahul M.'
        },
        {
          image: 'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=400',
          title: 'Monsoon Reflections',
          author: 'Sneha K.'
        }
      ]
    },
    {
      id: 'videos',
      title: 'Video Narratives',
      description: 'Moving stories that bring Mumbai to life through motion and sound',
      icon: Video,
      items: [
        {
          image: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=400',
          title: 'Local Train Tales',
          author: 'Arjun P.',
          duration: '3:45'
        },
        {
          image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=400',
          title: 'Festival Colors',
          author: 'Maya R.',
          duration: '2:12'
        },
        {
          image: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=400',
          title: 'Night Market Vibes',
          author: 'Kiran D.',
          duration: '4:20'
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white" id="stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Stories in Every Format
          </h2>
          <p className="font-lora text-lg text-gray-600 max-w-2xl mx-auto">
            From still moments to moving narratives, discover Mumbai through diverse storytelling mediums
          </p>
        </div>

        {sections.map((section, sectionIndex) => (
          <div key={section.id} className="mb-20 last:mb-0">
            <div className="flex items-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: `${sectionIndex * 0.2}s` }}>
              <div className="bg-coral/10 p-3 rounded-full">
                <section.icon className="h-6 w-6 text-coral" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-semibold text-charcoal">
                  {section.title}
                </h3>
                <p className="font-lora text-gray-600">
                  {section.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, itemIndex) => (
                <div 
                  key={item.title}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-up"
                  style={{ animationDelay: `${(sectionIndex * 0.2) + (itemIndex * 0.1)}s` }}
                >
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    {item.duration && (
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-lora">
                        {item.duration}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-playfair text-lg font-semibold text-charcoal mb-2">
                      {item.title}
                    </h4>
                    <p className="font-lora text-sm text-gray-600">
                      by {item.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Poetry and Street Art Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          <div id="poetry" className="animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-coral/10 p-3 rounded-full">
                <PenTool className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-charcoal">
                Poetry Corner
              </h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <blockquote className="font-lora text-lg text-charcoal italic mb-4">
                "In the symphony of honking cars,<br />
                I find my city's heartbeat..."
              </blockquote>
              <cite className="font-lora text-sm text-gray-600">— From "Mumbai Monsoon" by Kavita J.</cite>
              <button className="mt-4 text-coral hover:text-coral/80 font-lora transition-colors">
                Read More Poetry →
              </button>
            </div>
          </div>

          <div id="street-art" className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-coral/10 p-3 rounded-full">
                <Palette className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-charcoal">
                Street Art Gallery
              </h3>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mumbai street art"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h4 className="font-playfair text-lg font-semibold text-charcoal mb-2">
                  Colors of Dharavi
                </h4>
                <p className="font-lora text-gray-600 mb-4">
                  Vibrant murals that tell stories of hope and resilience
                </p>
                <button className="text-coral hover:text-coral/80 font-lora transition-colors">
                  Explore Gallery →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSections;