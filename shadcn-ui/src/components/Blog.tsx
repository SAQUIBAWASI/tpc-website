import LocationSection from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";




export default function Blogs() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 400);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const blogs = [
        {
            title: "Top 5 Digital Marketing Trends in 2025",
            desc: "Highlights the most impactful strategies shaping the future of online marketing. From the rise of AI-powered automation tools and personalized customer experiences to voice search optimization, video marketing dominance, and data-driven SEO practices, these trends are redefining how businesses connect with their audience. By adopting these innovations early, brands can improve their online visibility, boost engagement rates, and stay ahead of competitors. Whether you’re a startup or an established enterprise, understanding the latest digital marketing strategies in 2025 will help you generate more leads, increase conversions, and build long-term customer loyalty.",
            img: "/images/digital.jpg",
        },       {
            title: "Why Every Business Needs SEO in 2025",
            desc: "Explains why search engine optimization remains the backbone of digital growth. As competition increases online, SEO ensures that businesses stay visible on Google search results, attract qualified leads, and build long-term brand authority. In 2025, the rise of AI-driven algorithms, voice search queries, and mobile-first indexing makes SEO more important than ever. Local SEO is especially critical, helping businesses appear in near me searches, boost foot traffic, and dominate regional markets. Whether you run a small startup or a global enterprise, investing in SEO strategies in 2025 will drive sustainable growth, improve customer trust, and keep you ahead of competitors in the digital landscape.",
            img: "/images/blog-2.jpg",
        },
        {
            title: "The Rise of AI in Digital Marketing",
            desc: "Explores how artificial intelligence is reshaping the way brands connect with customers. In 2025, AI-driven tools are enhancing customer targeting, optimizing ad campaigns, and delivering hyper-personalized experiences at scale. From predictive analytics and chatbots to automated content creation and voice search optimization, AI is helping businesses achieve higher ROI while reducing costs. Companies that embrace AI in digital marketing can gain a competitive edge by improving engagement, refining customer journeys, and making smarter, data-driven decisions. Whether you’re a small business or a global brand, integrating AI into your digital strategy is no longer optional — it’s the key to growth and long-term success.",
            img: "/images/blog-3.jpg",
        },
        {
            title: "Social Media Strategies That Drive ROI",
            desc: "Focuses on how businesses can use social platforms effectively to boost visibility, engagement, and revenue. In 2025, brands need more than just a presence on TikTok, Instagram, Facebook, and LinkedIn — they need platform-specific strategies that deliver measurable results. By leveraging data-driven insights, AI-powered analytics, and creative content formats, companies can maximize audience engagement, increase conversions, and achieve a higher return on investment (ROI). From short-form videos to professional networking campaigns, the right social media marketing strategies can strengthen brand awareness, build customer trust, and drive sustainable business growth.",
            img: "/images/blog-4.jpg",
        },
    ];

    return (
        <div className="bg-black text-white font-sans">
            <Header />
            <Helmet>
                <title>Blog | Digital Marketing, Web Development & AI Insights</title>
                <meta name="description" content="Read our latest blogs on digital marketing, web development, AI solutions, e-commerce, and design trends. Stay updated with expert insights and industry news." />
            </Helmet>

            <main className="pt-10">
                {/* ================= HERO ================= */}
                <section className="relative overflow-hidden bg-gradient-to-r from-green-500/10 to-purple-700/10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.15),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]" />
                    <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
                        <motion.h1
                            className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400 drop-shadow-lg"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Insights & Ideas
                            <br /> For Digital Growth
                        </motion.h1>
                        <motion.p
                            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Explore our expert articles on SEO, social media, AI, and
                            performance marketing — crafted to help your business thrive
                            online.
                        </motion.p>
                    </div>
                </section>

                {/* ================= BLOG GRID ================= */}
                <section className="bg-black py-20">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogs.map((blog, i) => (
                            <motion.div
                                key={i}
                                className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-green-500/10 to-purple-500/10 hover:scale-105 transition-transform"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-green-400 mb-3">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-300 leading-7 mb-4">{blog.desc}</p>
                                    <a
                                        href="#"
                                        className="text-purple-400 font-semibold hover:underline"
                                    >
                                        Read More →
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ================= CTA ================= */}
                <section className="bg-gradient-to-r from-green-600/20 to-purple-800/20 py-20">
                    <div className="max-w-4xl mx-auto text-center px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400">
                            Stay Updated With the Latest in Digital Marketing
                        </h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Subscribe to our newsletter and never miss out on strategies,
                            insights, and updates from our digital marketing experts.
                        </p>
                        <button className="px-8 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition">
                            Subscribe Now
                        </button>
                    </div>
                </section>
            </main>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/919392557785?text=Hello%2C%20I%27m%20interested%20in%20your%20Digital%20Marketing%20services"
                className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl focus:outline-none"
                aria-label="Chat on WhatsApp"
            >
                <svg
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-7 h-7 text-white"
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
