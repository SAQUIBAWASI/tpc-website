import { Button } from "@/components/ui/button";

export default function CareersSection() {
  return (
    <section id="career"className="bg-white text-green-400 py-16">
      {/* Top Heading */}
      <div className="text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Careers</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Every Patternson is the navigator of our clients’ digital transformation
        </p>
      </div>

      {/* Image + Caption */}
      <div className="flex justify-center my-12 px-4">
        <div className="relative w-full max-w-5xl">
          <img
            src="/images/Careers.jpeg"
            alt="Life at Patterns"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
          <p className="absolute bottom-6 left-6 text-lg font-semibold bg-white/80 px-3 py-1 rounded">
            Life at Patterns
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold mb-6">
          Find Opportunities For You
        </h3>
        <Button className="bg-green-400 hover:bg-green-400 text-white text-lg px-6 py-3 rounded-lg">
          Explore Careers
        </Button>
      </div>
    </section>
  );
}
