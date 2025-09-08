
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, CheckCircle, Truck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const achievements = [
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Truck, value: "120+", label: "Projects Completed" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: CheckCircle, value: "99%", label: "On-Time Delivery" },
  ];

  const features = [
    "Premium quality materials from certified suppliers",
    "Expert consultation and project planning",
    "Transparent pricing & cost breakdowns",
    "Reliable delivery network across regions",
    "Strict quality assurance testing",
    "24/7 customer support",
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-green-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-purple-300 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className=" font-geometric bg-green-100 text-green-600 mb-4">Who We Are</Badge>
          <h2 className="font-geometric text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug relative inline-block">
            Best{" "}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-500">
              Digital Marketing
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-green-400 to-purple-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </span>{" "}
            in Hyderabad
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Discover the best digital marketing agency in Hyderabad — a
            creative and B2B-driven company offering end-to-end services:
            branding, web design, SEO, content marketing, advertising,
            social media management, PR, and more.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Floating Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-purple-400 blur-lg opacity-40 animate-pulse" />
              <img
                src="/team/about.png"
                alt="About TPC"
                className="relative z-10 object-cover w-full h-full rounded-2xl shadow-2xl border-4 border-white"
              />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-4 left-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md"
              >
                Since 2018
              </motion.span>
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className=" font-geometric text-2xl font-semibold text-gray-900 mb-6">
              Why Choose Us?
            </h3>

            <ul className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-3 group"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 transition-transform group-hover:scale-110 group-hover:text-green-600" />
                  <span className="text-gray-700 text-base leading-relaxed group-hover:text-gray-900 transition">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            <Link to="/about">
              <Button className="bg-green-500 hover:bg-green-600 shadow-lg">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Floating Achievements */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/60 backdrop-blur-md rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="w-8 h-8 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {item.value}
                </div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



