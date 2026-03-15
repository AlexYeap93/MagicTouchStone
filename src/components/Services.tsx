import { Card, CardContent } from './ui/card';
import { Building, Mountain, Flame, Hammer } from 'lucide-react';
import brickImage1 from 'figma:asset/brick.jpeg';
import brickImage2 from 'figma:asset/townhouse.jpeg';
import stoneImage1 from 'figma:asset/stone_house.jpeg';
import stoneImage2 from 'figma:asset/stone_house2.jpeg';
import fireplaceImage1 from 'figma:asset/outdoor_washroom.jpeg';
import fireplaceImage2 from 'figma:asset/indoor_fireplace.jpeg';
import customStoneImage from 'figma:asset/custom_fireplace.jpg';

const services = [
  {
    icon: Building,
    title: 'Brick Masonry',
    description: 'Expert brick construction, restoration, and repair for residential and commercial projects. Our skilled craftsmen bring decades of experience to create stunning brick facades, walls, and structures that stand the test of time.',
    features: ['New Construction', 'Brick Restoration', 'Tuckpointing', 'Brick Veneer'],
    images: [
      brickImage1,
      brickImage2,
    ],
  },
  {
    icon: Mountain,
    title: 'Stone Masonry',
    description: 'Beautiful natural and manufactured stone installations that add elegance and character to any property. From exterior cladding to interior accent walls, we create stunning stonework masterpieces.',
    features: ['Natural Stone Installation', 'Stone Veneer', 'Stone Walls', 'Stone Cladding'],
    images: [
      stoneImage1,
      stoneImage2,
    ],
  },
  {
    icon: Flame,
    title: 'Fireplaces & Outdoor Infrastructures',
    description: 'Create stunning focal points and functional outdoor spaces with our expert fireplace and infrastructure work. From breathtaking interior stone fireplaces to complete exterior transformations, we combine artistry with functionality.',
    features: ['Custom Stone Fireplaces', 'Exterior Stone Cladding', 'Outdoor Kitchens', 'Stone Entryways'],
    images: [
      fireplaceImage1,
      fireplaceImage2,
    ],
  },
  {
    icon: Hammer,
    title: 'Custom Stonework',
    description: 'Transform your outdoor living space with expertly crafted custom stonework. From elegant fire pits and patios to retaining walls and outdoor gathering areas, we create stunning functional spaces that bring your vision to life.',
    features: ['Fire Pits & Features', 'Stone Patios', 'Retaining Walls', 'Outdoor Seating Areas'],
    images: [
      customStoneImage,
    ],
  },
];

export function Services() {
  return (
    <section className="py-20 px-4 bg-gray-50" id="services">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to completion, we deliver exceptional masonry work that stands the test of time
          </p>
        </div>

        {/* Services Vertical Layout */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[700px] ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  {/* Images - Now displaying 2 images in a grid or single image */}
                  <div className={`relative overflow-hidden bg-gray-900 h-[400px] lg:h-auto ${isEven ? '' : 'lg:col-start-2'}`}>
                    {service.images.length > 1 ? (
                      <div className="grid grid-cols-2 h-full">
                        {service.images.map((image, imgIndex) => (
                          <div key={imgIndex} className="relative overflow-hidden">
                            <img
                              src={image}
                              alt={`${service.title} ${imgIndex + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute top-6 left-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-10">
                      <Icon className="h-10 w-10" />
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${isEven ? '' : 'lg:col-start-1'}`}>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-900 mb-3">Specialties:</p>
                      <div className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <span className="text-blue-600 mr-3 text-xl">✓</span>
                            <span className="text-gray-700 text-lg">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}