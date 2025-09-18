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
        <title>E-Commerce Development Services | Scalable Online Store Solutions</title>
        <meta
          name="description"
          content="Professional e-commerce development services to build secure, scalable, and user-friendly online stores with seamless payment integration, responsive design, and optimized performance."
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
      Ecommerce in Hyderabad
    </h1>
    <p className="mt-4 text-white font-medium">
      Home / E-Commerce
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
              <h2 className="text-3xl font-bold mb-6">What is E-Commerce?</h2>
              <p className="leading-relaxed text-gray-700">
                E-commerce, short for electronic the buying and selling of goods, refers to the buying and selling of products that are bought and sold or services over the internet. It encompasses a wide range of online transactions, including digital marketplaces, online retail stores, Business-To-Business (B2B) exchanges, and online sales to the highest payer. E-commerce the buying and selling of goods enables businesses to reach a worldwide audience, operate 24/7, and conduct transactions without the limits of related to where mountains, rivers, cities, etc., are located borders. It involves different pieces such as online storefronts, payment gateways, amount or quantity of items stored now management systems, and shipping planning required to move people and supplies to where they're needed. Customers can browse products, make purchases, and complete transactions entirely online, often with the convenience of multiple payment options and secure checkout processes. E-Commerce raised, flat supporting surfaces provide businesses with tools to manage their online presence, track sales performance, and decorate with a personal touch the shopping experience for customers. With the continuous growth of internet usage and related to computers and science times of moving ahead or up, buying things online has become an important part of modern the buying and selling of goods, offering businesses of all sizes never-before-seen opportunities for growth and act of something getting bigger, wider, etc. in the digital place where people buy things. 
              </p>
            </div>
            <img
              src="/images/ECommerce/E2C.jpg"
              alt="Ecommerce Illustration"
              className="rounded-xl shadow-xl"
            />
          </div>
        </section>

        {/* ===== TYPES OF E-COMMERCE ===== */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Types Of E-Commerce We Provide
            </h2>

            <div className="space-y-16">
              {/* B2B */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <img
                  src="/images/ECommerce/B2B.avif"
                  alt="Business to Business"
                  className="rounded-xl shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-4 border-b-4 border-green-600 inline-block pb-1">
                    Business to Business (B2B)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    B2B, or Business-to-Business, includes transactions and interactions between businesses rather than with individual people who use a product or service. Trading products, services, or solutions designed to meet the operational needs of other businesses is what it comprises. B2B transactions often involve larger order quantities, longer sales cycles, and made to do one thing very well pricing structures. Businesses that operate in the business-to-business (B2B) sector prioritise developing trusting connections, offering solutions with additional value, and giving top-notch customer support to their clients. B2B plays a very important role in different businesses, helping working together, invention of new things, and growth among businesses worldwide.
                  </p>
                </div>
              </div>

              {/* B2C */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 border-b-4 border-green-600 inline-block pb-1">
                    Business to Consumer (B2C)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    In the world of the buying and selling of goods, Business-to-Person (B2C) transactions stand at the front lines, representing the direct exchange of product and services between businesses and individual people. B2C interactions include a wide organized row of businesses, from retail and buying things online to hospitality and entertainment. At its core, B2C the buying and selling of goods is about meeting the many different kinds of people or things needs and preferences of individual people, offering convenience, decoration, and very smooth experiences. Through new and interesting marketing ways of reaching goals, user-friendly flat supporting surfaces, and excellent customer service, businesses try to create meaningful connections and drive engagement in the energetic B2C wide view of a nature scene.
                  </p>
                </div>
                <img
                  src="/images/ECommerce/B2C.jpg"
                  alt="Business to Consumer"
                  className="rounded-xl shadow-lg"
                />
              </div>

              {/* B2A */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <img
                  src="/images/ECommerce/B2A.jpg"
                  alt="Business to Administration"
                  className="rounded-xl shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-4 border-b-4 border-green-600 inline-block pb-1">
                    Business to Administration (B2A)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Business to Administration (B2A) refers to transactions and interactions between businesses and governmental or administrative bodies. It has exchange­s of products, services, and knowledge­ from companies to services for the­ public or big groups. Businesses give things and information to the­ government or public places. The­re are many trades of stuff and ide­as from one place to another. Products move­ an B2A interactions are extremely important for legal following the law, licensing, permits, taxation, and other related to managing and running a company or organization processes. This includes businesses submitting reports, online or paper forms that ask for a job, money, admission, etc., and payments to government things, as well as getting to government services and information online. B2A relationships play an extremely important role in helping the smooth operation of businesses within a legal solid basic structure on which bigger things can be built, making sure of following the law and helping the development of clearness in public-private interactions. 
                  </p>
                </div>
              </div>

              {/* C2A */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 border-b-4 border-green-600 inline-block pb-1">
                    Consumer to Administration (C2A)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                   In the realm of digital interaction, Consumer to Administration (C2A) bridges the gap between individuals and governmental entities. Through C2A platforms, citizens gain direct access to public services, information, and resources provided by government agencies. Whether it's paying taxes online, accessing public health information, or applying for permits, C2A facilitates convenient and transparent interactions between consumers and administrative bodies. Through the use of technology, efficient processes, and more public participation, C2A improves the how easy something is to get to, use, or understand and effectiveness of the government-run services and their employees. 
                  </p>
                </div>
                <img
                  src="/images/ECommerce/C2A.jpg"
                  alt="Consumer to Administration"
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
