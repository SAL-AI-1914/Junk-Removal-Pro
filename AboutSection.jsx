import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  MessageSquare, 
  DollarSign, 
  Clock, 
  Truck,
  MapPin
} from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: User,
      title: "One-Man Company",
      description: "Personal service from Mason himself - no middlemen, just reliable work",
      color: "bg-blue-500"
    },
    {
      icon: MessageSquare,
      title: "Text Anytime",
      description: "Best way to reach Mason is by text - available whenever you need him",
      color: "bg-green-500"
    },
{
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Final price set after seeing your junk in person - no surprises",
      color: "bg-orange-500"
    },
    {
      icon: Clock,
      title: "Free Estimates",
      description: "Get your quote by text, phone, or in-person consultation",
      color: "bg-purple-500"
    }
  ];

return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-orange-500">Mason's</span> Junk Removal?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              As a locally-owned, one-man operation, Mason provides the personal attention 
              and reliable service that big companies can't match.
            </p>

<div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
 <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${feature.color}`}>
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {feature.description}
</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

{/* Truck Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6"
            >
<div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Reliable Equipment
                  </h3>
                  <p className="text-gray-600">
                    Mason's 2010 Ford F-150 with 8-foot bed provides excellent hauling capacity 
                    for jobs of all sizes. From single items to full truck loads.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

{/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
 <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Friendly handyman worker smiling"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

{/* Service Areas Badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg max-w-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Service Areas</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Oceanside • Carlsbad • Vista • San Marcos • Escondido 
                      • All San Diego County
</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}