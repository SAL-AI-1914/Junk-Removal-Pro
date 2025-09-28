
import React from "react";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function FooterSection() {
  const handleCall = () => {
    window.location.href = "tel:760-331-3925";
  };

const handleText = () => {
    window.location.href = "sms:760-331-3925";
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to={createPageUrl("Landing")} className="inline-block mb-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d90ed3b404e8752be12d6d/83e944978_1000101166.jpg" 
                alt="Mason's Junk Removal Logo" 
                className="h-20 w-auto bg-gray-200 rounded-full p-1"
              />
</Link>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Reliable, locally-owned junk removal service serving all of San Diego County. 
              Personal attention, fair pricing, and no job too big or small.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={handleCall}
                className="p-3 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors duration-200"
                aria-label="Call Mason"
              >
<Phone className="w-5 h-5" />
              </button>
              <button 
                onClick={handleText}
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                aria-label="Text Mason"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

{/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">760-331-3925</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>Serving:</p>
                  <p>Oceanside, Carlsbad, Vista,</p>
                  <p>San Marcos, Escondido</p>
                  <p>& all San Diego County</p>
                </div>
              </div>
            </div>
          </div>

{/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Furniture Removal</li>
              <li>• Electronics & Appliances</li>
              <li>• General Junk Hauling</li>
              <li>• Pick-up & Delivery</li>
              <li>• Dump Runs</li>
              <li>• Free Estimates</li>
            </ul>
          </div>

{/* Hours & Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Availability</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300 text-sm">Available for estimates anytime</span>
…            </div>
          </div>
        </div>

<div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Mason's Junk Removal. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <button 
                onClick={handleCall}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200"
              >
                Call 760-331-3925
              </button>
              <button 
                onClick={handleText}
                className="border border-gray-600 hover:bg-gray-800 text-gray-300 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200"
              >
                Send Text
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}