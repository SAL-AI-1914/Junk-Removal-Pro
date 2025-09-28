import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

…  };
  
  const handleText = () => {
    window.location.href = "sms:760-331-3925";
  };

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link to={createPageUrl("Landing")} className="flex items-center gap-2">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d90ed3b404e8752be12d6d/83e944978_1000101166.jpg" 
              alt="Mason's Junk Removal Logo" 
              className="h-14 w-auto md:h-20" 
            />
          </Link>

{/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Button 
              onClick={handleText}
              variant="outline"
              className={`transition-colors duration-300 ${isScrolled ? 'border-blue-600 text-blue-600 hover:bg-blue-50' : 'border-white text-white hover:bg-white hover:text-blue-900'}`}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Text for Estimate
            </Button>
            <Button 
              onClick={handleCall}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now: 760-331-3925
            </Button>
          </div>

{/* Mobile CTA */}
          <div className="sm:hidden">
            <Button 
              onClick={handleCall}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold"
              size="sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}