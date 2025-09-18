import LocationSection from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

export default function EcommerceHyderabad() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="bg-white text-black">
      <Header />
       <Helmet>
        <title>Graphic Design Services | Creative Branding & Visual Solutions</title>
        <meta
          name="description"
          content="Professional graphic design services offering logos, branding, brochures, social media creatives, and visual designs that enhance your business identity and engagement."
        />
      </Helmet>

      <main className="pt-24">
        {/* ===== HERO ===== */}
        <section
  className="relative h-[300px] flex items-center justify-center text-center bg-cover bg-center"
  style={{ backgroundImage: "url('/images/ecommerce-bg.jpg')" }}
>
  <div className="absolute inset-0 bg-black/50" /> {/* dark overlay for text visibility */}
  
  <div className="relative z-10">
    <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
      Graphic Design Services in Hyderabad
    </h1>
    <p className="mt-4 text-white font-medium">
      Home / Graphic Design Services
    </p>
  </div>
</section>


        {/* ===== STATS ===== */}
        <section className="bg-black py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: "100+", label: "Happy Customers" },
              { value: "1000+", label: "Digital Transformations" },
              { value: "5+", label: "Glorious Experience" },
              { value: "50+", label: "Our Team" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-green-500">{s.value}</div>
                <div className="text-gray-300 mt-2">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== WHAT IS E-COMMERCE ===== */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What is Graphic Designing?</h2>
              <p className="leading-relaxed text-gray-700">
                Graphic Designing is the art of visual communication. It goes beyond just creating attractive images — it’s about building powerful visuals that represent your brand’s identity, engage your audience, and communicate your message effectively.<br/>

At The Patterns Company, our graphic design services are tailored to meet both creative and business needs, ensuring every design is purposeful, impactful, and aligned with your goals. </p>
<div className="bg-black text-white p-6 rounded-lg tp-4 mt-5">
  <h3 className="text-xl font-semibold mb-4">Tools We Use</h3>
  <ul className="list-disc pl-5 space-y-1">
    <li>
      <strong>Adobe Photoshop &amp; Illustrator</strong> – for high-quality designs.
    </li>
    <li>
      <strong>CorelDRAW &amp; InDesign</strong> – for print materials.
    </li>
    <li>
      <strong>Figma &amp; Canva</strong> – for digital and UI/UX graphics.
    </li>
    <li>
      <strong>After Effects &amp; Premiere Pro</strong> – for motion graphics and videos.
    </li>
  </ul>
</div>


            </div>
            <img
              src="/images/gd.png"
              alt="Ecommerce Illustration"
              className="rounded-xl shadow-xl"
            />
          </div>
        </section>

        {/* ===== TYPES OF E-COMMERCE ===== */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Types Of Graphic Designing We provide
            </h2>

            <div className="space-y-16">
              {/* B2B */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <img
                  src="/images/ECommerce/GD1.jpg"
                  alt="Business to Business"
                  className="rounded-xl shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-4 border-b-4 border-green-600 inline-block pb-1">
                    Advertising Graphic Design
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Creating interesting advertising graphic designs is very important for grabbing attention and driving action. Our team focuses on doing one thing very well in creating visually stunning and convincing graphics that stir up interest in your target audience. From eye-catching headlines to very interesting social media ads, we deliver designs that stand out and deliver results. Let us help you lift raise up your advertising series of actions to reach goals and accomplish or gain with effort your marketing goals with impactful graphic design solutions. 
                  </p>
                </div>
              </div>

              {/* B2C */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 border-b-4 border-green-600 inline-block pb-1">
                   Corporate Graphic Design
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                   Related to big business graphic design involves creating visual valuable things such as logos, labeling materials, and marketing something of value that you'll lose if you don't pay back a loan that make even with a company's identity and values. Through the beginning of the existence of a polished and well-behaved image across all communication channels, it tries to increase quality of being believable and brand knowing about something. Through related to a plan to reach a goal use of art and practice of printing words attractively, sets of colors, and putting pictures into your mind, related to big business graphic design communicates key messages and develop a strong connection with people who are interested in a project or business. It really affects how people perceive things, how they participate, and in the end how businesses decoration.
                  </p>
                </div>
                <img
                  src="/images/ECommerce/GD2.jpg"
                  alt="Business to Consumer"
                  className="rounded-xl shadow-lg"
                />
              </div>

              {/* B2A */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <img
                  src="/images/ECommerce/GD3.jpg"
                  alt="Business to Administration"
                  className="rounded-xl shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-4 border-b-4 border-green-600 inline-block pb-1">
                    Art and Illustration for Graphics
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Art and Illustration for Graphics focuses on creating visually appealing designs that effectively communicate a brand's message. This includes the development of logos, marketing materials, and other visual assets that are essential for building a strong brand identity. By leveraging artistic skills and design principles, graphic designers create compelling visuals that capture the essence of a brand and engage its target audience.
                  </p>
                </div>
              </div>

              {/* C2A */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 border-b-4 border-green-600 inline-block pb-1">
                    Environmental Graphic Design
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Environmental Graphic Design focuses on creating visual experiences that enhance the interaction between people and their surroundings. This includes wayfinding systems, signage, and other visual elements that help people navigate and understand complex spaces. By integrating design with architecture and landscape, environmental graphic designers create cohesive and engaging environments that improve the user experience and promote a sense of place.
                  </p>
                </div>
                <img
                  src="/images/ECommerce/GD4.jpg"
                  alt="Environmental Graphic Design"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919392557785?text=Hello%2C%20I%27m%20interested%20in%20Ecommerce%20services"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7 text-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.52c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.37-1.64-1.53-1.92-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.45-.61-.45h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.67 4.14.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.52-.32z" />
          <path d="M26.7 5.3C23.9 2.5 20.2 1 16.3 1 8.6 1 2.3 7.3 2.3 15c0 2.4.6 4.8 1.8 6.9L2 31l9.3-2.1c2 .9 4.3 1.4 6.6 1.4 7.7 0 14-6.3 14-14 0-3.9-1.5-7.6-4.2-10.3zM16 28.6c-2.1 0-4.2-.5-6.1-1.4l-.4-.2-5.5 1.2 1.2-5.4-.3-.4C3.9 20.6 3.3 17.9 3.3 15 3.3 8.9 8.9 3.3 16 3.3c3.1 0 6 1.2 8.2 3.4 2.2 2.2 3.4 5.1 3.4 8.3 0 6.4-5.2 11.6-11.6 11.6z" />
        </svg>
      </a>
{/* Scroll to Top */}
{showTop && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-24 right-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-400 hover:bg-green-500 shadow-xl"
    aria-label="Scroll to top"
  >
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        d="M6 15l6-6 6 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
)}
      <LocationSection />
    </div>
  );
}
