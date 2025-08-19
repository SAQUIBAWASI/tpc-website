
export default function BlogsSection() {
  return (
    <section id="blogs" className="bg-black text-green-600 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-bold mb-4 tracking-wide">
          OUR BLOGS
        </h2>
        <div className="w-40 h-0.5 bg-green-600 border-b-2 border-dotted mb-10"></div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left News Section */}
          <div className="bg-green-600 text-white p-6 flex flex-col gap-6 rounded-xl">
            <h3 className="text-2xl font-bold">In the news</h3>

            <div className="border-t border-green-300 pt-4 cursor-pointer hover:underline">
              <p>
                The Patterns Company delivers innovative e-commerce website
                designs to elevate your online business.
              </p>
              <span className="block mt-2 text-right">→</span>
            </div>

            <div className="border-t border-green-300 pt-4 cursor-pointer hover:underline">
              <p>
                The Patterns Company offers expert social media marketing
                services to enhance your brand's online presence and engagement.
              </p>
              <span className="block mt-2 text-right">→</span>
            </div>

            <div className="border-t border-green-300 pt-4 cursor-pointer hover:underline">
              <p>
                The Patterns Company creates intuitive and visually stunning UI
                designs to deliver exceptional user experiences.
              </p>
              <span className="block mt-2 text-right">→</span>
            </div>

            <div className="border-t border-green-300 pt-4 cursor-pointer hover:underline">
              <p>
                The Patterns Company provides tailored B2B solutions to drive
                growth and strengthen business partnerships.
              </p>
              <span className="block mt-2 text-right">→</span>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/images/E-Commerce.jpg"
                alt="E Commerce Website"
                className="w-full h-64 object-cover group-hover:scale-105 transition"
              />
              <h4 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                E Commerce Website
              </h4>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/images/Web-Dev.jpeg"
                alt="Web Development"
                className="w-full h-64 object-cover group-hover:scale-105 transition"
              />
              <h4 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                Web Development
              </h4>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/images/App-Dev.jpg"
                alt="App Development"
                className="w-full h-64 object-cover group-hover:scale-105 transition"
              />
              <h4 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                App Development
              </h4>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/images/AI.jpg"
                alt="AI Development"
                className="w-full h-64 object-cover group-hover:scale-105 transition"
              />
              <h4 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                AI Development
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
