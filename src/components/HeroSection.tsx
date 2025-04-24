
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = ({ onExploreClick, onLearnMoreClick }: { 
  onExploreClick: () => void;
  onLearnMoreClick: () => void;
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-healthcare-800 to-medical-900 text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-3/5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Empowering Your Global Healthcare Career
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              Take the first step towards international opportunities in healthcare with our Pearson BTEC qualifications. Join a community of healthcare professionals making a difference worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-healthcare-800 hover:bg-gray-100"
                onClick={onExploreClick}
              >
                Explore Courses
              </Button>
              <Button 
                size="lg" 
                className="bg-healthcare-600 text-white border-2 border-white"
                onClick={onLearnMoreClick}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="md:w-2/5 mt-8 md:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-xl">
              <h2 className="text-xl font-bold mb-2">Start Your Healthcare Journey</h2>
              <p className="text-gray-200 mb-4">Join thousands of successful healthcare professionals who have advanced their careers globally through our programs.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center">
                  <div className="mr-3 p-2 rounded-full bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm">Call Us</p>
                    <p className="font-semibold">+91 183 4004836</p>
                    <p className="font-semibold">+91 9876711110</p>
                    <p className="text-sm mt-1">Email: admissions@empoweredskills.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
