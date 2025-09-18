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
        <title>Google Ads Services | PPC Campaign Management & Optimization</title>
        <meta
          name="description"
          content="Expert Google Ads management services to create, optimize, and scale high-performing PPC campaigns that drive traffic, leads, and sales for your business."
        />
      </Helmet>

      <main className="pt-24">
        {/* ===== HERO ===== */}
        <section
  className="relative h-[300px] flex items-center justify-center text-center bg-cover bg-center"
  style={{ backgroundImage: "url('/images/ga.jpg')" }}
>
  <div className="absolute inset-0 bg-black/50" /> {/* dark overlay for text visibility */}
  
  <div className="relative z-10">
    <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
      Google Ads Services in Hyderabad
    </h1>
    <p className="mt-4 text-white font-medium">
      Home / Ads
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
              <h2 className="text-3xl font-bold mb-6">What is Google-Ads ?</h2>
              <p className="leading-relaxed text-gray-700">
                Google Ads is an online­ way to show ads for stuff. It works by you paying each time someone­ clicks an ad. These ads show up on Google se­arches, other website­s, YouTube videos, and more. You pick words that match what you se­ll. Then your ad pops up when people­ search those words. Google Ads has te­xt ads, picture ads, video ads, and app ads. This lets you re­ach people in many ways and places. You can targe­t who sees your ads too. Google Ads has tools to track how we­ll your ads work. So it helps businesses ge­t their products in front of the right people­. They can drive traffic to their we­bsite and meet the­ir goals.</p>
            </div>
            <img
              src="/images/ga1.jpg"
              alt="Ecommerce Illustration"
              className="rounded-xl shadow-xl"
            />
          </div>
        </section>

        {/* ===== TYPES OF GOOGLE-ADS ===== */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Types Of Google-Ads We Provide
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
                    Search-Ads
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Google Search Ads are a type of online advertising that allows businesses to display their ads on Google's search engine results pages (SERPs). When users search for specific keywords or phrases, relevant ads appear at the top or bottom of the search results. This form of advertising operates on a pay-per-click (PPC) model, meaning businesses only pay when users click on their ads. Google Search Ads are highly targeted, enabling businesses to reach potential customers actively searching for their products or services. Advertisers can create compelling ad copy, choose relevant keywords, and set budgets to optimize their campaigns for maximum visibility and engagement.
                  </p>
                </div>
              </div>

              {/* B2C */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 border-b-4 border-green-600 inline-block pb-1">
                    Display-Ads
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Display Ads are a type of online advertising that appears on websites, apps, and social media platforms. These ads come in various formats, including banners, images, and videos, and are designed to capture the attention of users as they browse the internet. Display Ads can be targeted based on user demographics, interests, and online behavior, making them an effective way to reach potential customers. Advertisers can use visually appealing graphics and compelling messaging to engage users and drive traffic to their websites or landing pages.
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
                    Shopping-Ads
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Totally change and improve your online retail success plans with our Shopping Ads! Capturing and controlling the power of Google's Shopping raised, flat supporting surface, we show off to people your products to eager shoppers at the exact moment they're ready to make an instance of buying something for money. Our visually striking ads feature product images, prices, and details, attracting users to click and explore. With advanced targeting options and happening or viewable immediately, without any delay offering to pay for something success plans, we secure your ads reach the most qualified audiences, driving high-intent traffic to your website and boosting sales. Stay ahead of the competition and make as big as possible your buying things online success with our results-driven Shopping Ads - very best solution for driving changing things from one form, state, or state of mind to another and growing your business. 
                  </p>
                </div>
              </div>

              {/* C2A */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 border-b-4 border-green-600 inline-block pb-1">
                    App-Ads
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    In the realm of digital interaction, App-Ads bridge the gap between individuals and governmental entities. Through App-Ads platforms, citizens gain direct access to public services, information, and resources provided by government agencies. Whether it's paying taxes online, accessing public health information, or applying for permits, App-Ads facilitates convenient and transparent interactions between consumers and administrative bodies. Through the use of technology, efficient processes, and more public participation, App-Ads improves the how easy something is to get to, use, or understand and effectiveness of the government-run services and their employees.
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

          {/* B2A */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <img
                  src="/images/ECommerce/B2A.jpg"
                  alt="Business to Administration"
                  className="rounded-xl shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-4 border-b-4 border-green-600 inline-block pb-1">
                    Video-Ads
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Totally change and improve your online retail success plans with our Video Ads! Capturing and controlling the power of Google's Video Ads, we show off to people your products to eager shoppers at the exact moment they're ready to make an instance of buying something for money. Our visually striking ads feature product images, prices, and details, attracting users to click and explore. With advanced targeting options and happening or viewable immediately, without any delay offering to pay for something success plans, we secure your ads reach the most qualified audiences, driving high-intent traffic to your website and boosting sales. Stay ahead of the competition and make as big as possible your buying things online success with our results-driven Video Ads - very best solution for driving changing things from one form, state, or state of mind to another and growing your business.
                  </p>
                </div>
              </div>
        </section>
      </main>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/91837416160?text=Hello%2C%20I%27m%20interested%20in%20Ecommerce%20services"
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
