import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Truck, 
  Sofa, 
  Tv, 
  Package, 
  ArrowUpDown,
  CheckCircle,
  XCircle
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Sofa,
      title: "Furniture Removal",
      description: "Old couches, chairs, tables, mattresses, and more",
      color: "text-blue-600"
    },
    {
      icon: Tv,
      title: "Electronics & Appliances",
      description: "TVs, computers, washers, dryers, refrigerators",
      color: "text-green-600"
    },
{
      icon: Package,
      title: "General Junk Hauling", 
      description: "Boxes, bags, household clutter, and miscellaneous items",
      color: "text-orange-600"
    },
{
      icon: ArrowUpDown,
      title: "Pick-up & Delivery",
      description: "Moving items from one location to another",
      color: "text-purple-600"
    },
{
      icon: Truck,
      title: "Dump Runs",
      description: "Direct hauls to appropriate disposal facilities",
      color: "text-red-600"
    }
  ];

const whatWeDoNot = [
    "Concrete removal",
    "Dirt or soil removal", 
    "Hazardous materials",
    "Construction debris"
  ];

return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
     <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We <span className="text-orange-500">Remove</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From single items to full cleanouts, Mason handles it all with his trusty 2010 Ford F-150
          </p>
        </motion.div>

{/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
 <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gray-100">
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
…          ))}
        </div>

 {/* What We Don't Remove */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
<div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CheckCircle className="w-7 h-7 text-green-500" />
                What We Handle
              </h3>
              <ul className="space-y-3">
                {[
                  "Furniture & appliances",
…                ))}
              </ul>
            </div>

<div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <XCircle className="w-7 h-7 text-red-500" />
                What We Don't Remove
              </h3>
              <ul className="space-y-3">
…      </div>
    </section>
  );
}