import { Award, Users, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import storyImage from 'figma:asset/custom_fireplace.jpg';

const stats = [
  {
    icon: Clock,
    value: '3',
    label: 'Generations',
    description: 'Of masonry excellence',
  },
  {
    icon: Users,
    value: '60+',
    label: 'Years',
    description: 'Combined experience',
  },
  {
    icon: Award,
    value: '1000+',
    label: 'Projects',
    description: 'Successfully completed',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Satisfaction',
    description: 'Guaranteed quality',
  },
];

export function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three generations of craftsmanship, one family legacy
          </p>
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="sticky top-24">
              <img
                src={storyImage}
                alt="Custom fireplace"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-lg shadow-xl">
                <p className="text-5xl font-bold mb-1">60+</p>
                <p className="text-lg">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Right Column - Story */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                A Legacy Built on Solid Foundations
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Magic Touch Masonry is a family-owned business spanning three generations of master craftsmen. 
                Our legacy began with a passion for quality stonework and an unwavering commitment to excellence 
                that has been passed down through the decades.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Each generation has brought their expertise and dedication to the craft, ensuring that every 
                project we undertake meets the highest standards of quality and craftsmanship. From the foundation 
                laid by our founders to the innovations of today, we continue to honor traditional masonry 
                techniques while embracing modern advancements.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Today, we're proud to serve our community with the same values that built this company: integrity, 
                precision, and an absolute commitment to customer satisfaction. We've mastered every form of masonry—
                from classic brick facades to natural stone installations, concrete block foundations to decorative 
                veneer work.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                Our Expertise
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                With three generations of combined experience, we specialize in all forms of masonry construction:
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Brick Masonry:</strong> Traditional and modern brick construction, restoration, and repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Block Construction:</strong> Structural and decorative concrete block work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Stone Masonry:</strong> Natural and manufactured stone installation and design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Specialty Work:</strong> Custom fireplaces, outdoor living spaces, and architectural features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <p className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}