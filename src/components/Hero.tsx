import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/Official_magic_touch_logo_updated.png';

export function Hero() {
  const scrollToInquiry = () => {
    const inquirySection = document.getElementById('inquiry');
    inquirySection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1760774716625-b9a9f3077237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMG1hc29ucnklMjB3YWxsJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzE2MzQzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Stone masonry background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-blue-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto py-8">
        <div className="mb-3">
          <span className="inline-block bg-blue-600/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">
            Three Generations of Excellence
          </span>
        </div>
        <div className="mb-4 flex justify-center">
          <img src={logo} alt="Magic Touch Stone Masonry" className="h-64 md:h-[640px] w-auto max-w-[90vw]" />
        </div>
        <p className="text-lg md:text-2xl mb-3 text-gray-200">
          Master Craftsmen in Brick, Block & Stone
        </p>
        <p className="text-base md:text-xl mb-6 text-gray-300 max-w-3xl mx-auto">
          Building dreams with precision and passion. From traditional brickwork to elegant stone installations, 
          we bring 60+ years of family expertise to every project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToInquiry}
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            onClick={scrollToAbout}
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 backdrop-blur-sm"
          >
            Our Story
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}