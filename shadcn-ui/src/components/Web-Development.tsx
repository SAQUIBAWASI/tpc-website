import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ServicesShowcase() {
  return (
    <section id="Web-Development" className="bg-[#0b0d12] text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Technology
        </h2>
        <h3 className="text-xl font-semibold text-green-400 mb-6">
          Enabling you to stay ahead in an ever-evolving digital landscape
        </h3>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Innovation is at the core of our technological solutions. We leverage
          cutting-edge technologies to architect and enhance your digital ecosystem,
          ensuring seamless experiences across all touchpoints, from UI/UX Design to
          App Development.
        </p>

        <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full shadow-lg">
          ENQUIRE NOW 😊
        </Button>
      </div>

      {/* Right Content (Images Showcase) */}
      <div className="flex-1 relative grid grid-cols-2 gap-6">
        {/* Circle 1 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-gray-700 mx-auto"
        >
          <img
            src="/images/app-dev.jpg"
            alt="App Development"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Circle 2 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-gray-700 mx-auto"
        >
          <img
            src="/images/web-dev.jpg"
            alt="Web Development"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Circle 3 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-gray-700 mx-auto"
        >
          <img
            src="/images/digital-marketing.jpg"
            alt="Digital Marketing"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Circle 4 */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-gray-700 mx-auto"
        >
          <img
            src="/images/ai-dev.jpg"
            alt="AI Development"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
