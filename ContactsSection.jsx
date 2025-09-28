import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    jobDescription: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data somewhere
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

  // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", jobDescription: "" });
    }, 3000);
  };

const handleCall = () => {
    window.location.href = "tel:760-331-3925";
  };

const handleText = () => {
    window.location.href = "sms:760-331-3925";
  };

return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
<h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get your free estimate today! Call, text, or fill out the form below.
          </p>
        </motion.div>

 <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
<h3 className="text-2xl font-bold text-white mb-6">
              Contact Mason Directly
            </h3>

{/* Phone */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <Button
                  onClick={handleCall}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                >
  <Phone className="w-5 h-5 mr-3" />
                  Call: 760-331-3925
                </Button>
                <p className="text-blue-100 text-sm mt-3 text-center">
                  Available for immediate assistance
                </p>
              </CardContent>
            </Card>

{/* Text */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <Button
                  onClick={handleText}
                  variant="outline"
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 text-lg transition-all duration-200"
                >
<MessageCircle className="w-5 h-5 mr-3" />
                  Text Mason (Preferred)
                </Button>
                <p className="text-blue-100 text-sm mt-3 text-center">
                  Best way to reach Mason - available anytime!
                </p>
              </CardContent>
            </Card>

 {/* Why Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-4">Why Choose Mason?</h4>
              <ul className="space-y-2">
                {[
 "Free estimates - no obligation",
                  "Same-day or next-day service",
                  "Transparent pricing - final price after seeing job",
                  "Locally owned & operated",
                  "No job too big or small"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-blue-100">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

{/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
 <Card className="bg-white shadow-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-orange-500" />
                  Request Free Estimate
                </CardTitle>
                <p className="text-gray-600">Fill out the form and Mason will get back to you quickly!</p>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
<label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="w-full"
                      />
                    </div>

<div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(760) 555-0123"
                        required
                        className="w-full"
                      />
                    </div>

 <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Description
                      </label>
                      <Textarea
                        value={formData.jobDescription}
                        onChange={(e) => handleInputChange("jobDescription", e.target.value)}
                        placeholder="Describe what needs to be removed (furniture, appliances, location, etc.)"
                        rows={4}
                        required
                        className="w-full resize-none"
                      />
                    </div>

<Button 
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-lg"
                    >
                      Get My Free Estimate
                    </Button>

<p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to receive text messages from Mason's Junk Removal
                    </p>
                  </form>
                ) : (
<div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thanks for reaching out!</h3>
                    <p className="text-gray-600">
                      Mason will contact you soon with your free estimate.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}