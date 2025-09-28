
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleCall = () => {
    window.location.href = "tel:760-331-3925";
  };

  const handleText = () => {
    window.location.href = "sms:760-331-3925";
  };

return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden -mt-[72px] md:-mt-[96px] pt-[72px] md:pt-[96px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='9' cy='9' r='1'/%3E%3Ccircle cx='19' cy='19' r='1'/%3E%3Ccircle cx='29' cy='29' r='1'/%3E%3Ccircle cx='39' cy='39' r='1'/%3E%3Ccircle cx='49' cy='49' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

<div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
<div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-blue-100 text-sm font-medium">Locally Owned & Trusted</span>
            </div>

<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fast & Reliable
              <br />
              <span className="text-orange-400">Junk Removal</span>
            </h1>

<p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Clearing clutter from your home or business across San Diego County. 
              <span className="block mt-2 font-semibold text-white">No job too big or too small!</span>
            </p>

{/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={handleCall}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 text-lg shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 760-331-3925
              </Button>

 <Button 
                onClick={handleText}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 text-lg transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Text Mason
              </Button>
            </div>

 {/* Service Area */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-100">
              <MapPin className="w-5 h-5 text-orange-400" />
              <span className="text-sm">
                Serving Oceanside, Carlsbad, Vista, San Marcos, Escondido & all of San Diego County
              </span>
            </div>
          </motion.div>

 {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
<div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional junk removal truck"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-white rounded-full px-4 py-2 shadow-lg">
                <span className="text-blue-900 font-bold text-sm">FREE ESTIMATES</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

{/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
