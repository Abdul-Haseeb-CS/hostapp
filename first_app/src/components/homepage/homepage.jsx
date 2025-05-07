import { useState } from "react";
import '../../index.css';
export default function VertioCloudHomepage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalSlides = 3; // Added more slides for testing
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  
  // Features data
  const features = [
    { icon: "server", title: "Private Servers" },
    { icon: "shield", title: "SOC 2 & FTC-Compliant" },
    { icon: "clock", title: "24/7 Expert Support" },
    { icon: "zap", title: "99.999% Uptime" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 lg:px-12 bg-gray-900">
        <div className="flex items-center space-x-6">
          <div className="font-bold text-xl mr-4">Vertio</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <div className="relative group">
              <button className="flex items-center space-x-1 py-2">
                <span>Services</span>
                <svg className="w-4 h-4 transform group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-gray-800 p-4 rounded shadow-lg w-48 z-10">
                <a href="#" className="block py-2 hover:text-green-400">Cloud Hosting</a>
                <a href="#" className="block py-2 hover:text-green-400">IT Security</a>
                <a href="#" className="block py-2 hover:text-green-400">Managed Services</a>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 py-2">
                <span>Solutions</span>
                <svg className="w-4 h-4 transform group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-gray-800 p-4 rounded shadow-lg w-48 z-10">
                <a href="#" className="block py-2 hover:text-green-400">For Tax Firms</a>
                <a href="#" className="block py-2 hover:text-green-400">For Accountants</a>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 py-2">
                <span>Pricing</span>
                <svg className="w-4 h-4 transform group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 py-2">
                <span>Resources</span>
                <svg className="w-4 h-4 transform group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded flex items-center">
            <span>Get Started</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <div className="py-2">
            <button className="flex items-center justify-between w-full py-2">
              <span>Services</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="py-2">
            <button className="flex items-center justify-between w-full py-2">
              <span>Solutions</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="py-2">
            <button className="flex items-center justify-between w-full py-2">
              <span>Pricing</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="py-2">
            <button className="flex items-center justify-between w-full py-2">
              <span>Resources</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="mt-4">
            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded w-full flex items-center justify-center">
              <span>Get Started</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Hero Section with Carousel */}
      <div className="relative overflow-hidden">
        {/* Carousel content */}
        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
          {/* Slide 1 */}
          <div className={`${activeSlide === 0 ? 'block' : 'hidden'} transition-all duration-300`}>
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                Secure, High-Performance Cloud Hosting
              </h1>
              <h2 className="text-xl lg:text-3xl font-semibold mb-6">
                Designed Exclusively for Tax & Accounting Firms
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Dedicated private servers with 99.999% uptime, SOC 2 & FTC compliance, and 24/7 expert support
              </p>
            </div>
            
            <div className="flex justify-center space-x-4 mb-12">
              <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded font-medium text-center">
                <div>Try Vertio Cloud</div>
                <div className="text-xs">No Credit Card Required</div>
              </button>
              <button className="border border-white hover:bg-gray-800 px-6 py-3 rounded font-medium">
                See How it Works
              </button>
            </div>
            
            {/* Globe Background */}
            <div className="relative h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-30 blur-xl"></div>
              </div>
              
              {/* Feature boxes */}
              <div className="absolute inset-0">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center justify-center"
                    >
                      <div className="mb-2 bg-gray-700 p-2 rounded-full">
                        {feature.icon === "server" && (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                          </svg>
                        )}
                        {feature.icon === "shield" && (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          </svg>
                        )}
                        {feature.icon === "clock" && (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        )}
                        {feature.icon === "zap" && (
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                        )}
                      </div>
                      <div className="text-sm lg:text-base text-center">{feature.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Slide 2 */}
          <div className={`${activeSlide === 1 ? 'block' : 'hidden'} transition-all duration-300`}>
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                Enterprise-Grade Security
              </h1>
              <h2 className="text-xl lg:text-3xl font-semibold mb-6">
                Protecting Your Clients' Sensitive Financial Data
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Advanced encryption, multi-factor authentication, and continuous monitoring of your systems
              </p>
            </div>
            
            <div className="flex justify-center space-x-4 mb-12">
              <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded font-medium text-center">
                <div>Free Security Assessment</div>
                <div className="text-xs">Limited Time Offer</div>
              </button>
              <button className="border border-white hover:bg-gray-800 px-6 py-3 rounded font-medium">
                Learn About Compliance
              </button>
            </div>
            
            {/* Background */}
            <div className="relative h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 opacity-30 blur-xl"></div>
              </div>
            </div>
          </div>
          
          {/* Slide 3 */}
          <div className={`${activeSlide === 2 ? 'block' : 'hidden'} transition-all duration-300`}>
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                24/7 Expert Support
              </h1>
              <h2 className="text-xl lg:text-3xl font-semibold mb-6">
                Dedicated Assistance When You Need It Most
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our team of specialized IT professionals understands the unique needs of tax and accounting firms
              </p>
            </div>
            
            <div className="flex justify-center space-x-4 mb-12">
              <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded font-medium text-center">
                <div>Contact Support</div>
                <div className="text-xs">Response in Minutes</div>
              </button>
              <button className="border border-white hover:bg-gray-800 px-6 py-3 rounded font-medium">
                View Support Plans
              </button>
            </div>
            
            {/* Background */}
            <div className="relative h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-green-400 to-teal-500 opacity-30 blur-xl"></div>
              </div>
            </div>
          </div>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === index ? 'w-8 bg-green-500' : 'w-2 bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Carousel Controls */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 transform -translate-y-1/2">
          <button 
            onClick={prevSlide}
            className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Call to Action Banner */}
      <div className="bg-green-500 p-4 lg:p-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h3 className="text-lg lg:text-xl font-medium">
              We also provide fully managed IT security solutions for tax & accounting firms
            </h3>
          </div>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-4 py-2 rounded flex items-center">
            <span>Learn More</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}