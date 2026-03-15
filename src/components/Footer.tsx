import logo from 'figma:asset/Official_magic_touch_logo_updated.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Magic Touch Masonry" className="h-20 w-auto mb-4" />
            <p className="text-gray-400">
              Three generations of masonry excellence. Serving our community with pride, 
              specializing in brick, block, and stone construction.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#inquiry" className="text-gray-400 hover:text-white transition-colors">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>(403) 973-9746</li>
              <li>Walid@magictouchstone.com</li>
              <li>Calgary, Alberta</li>
              <li className="pt-2 text-sm">
                Licensed & Insured | Family Owned & Operated
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Magic Touch Masonry. All rights reserved. | Three Generations of Excellence</p>
        </div>
      </div>
    </footer>
  );
}