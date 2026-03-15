import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { InquiryForm } from './components/InquiryForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-center" />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <InquiryForm />
      <Footer />
    </div>
  );
}