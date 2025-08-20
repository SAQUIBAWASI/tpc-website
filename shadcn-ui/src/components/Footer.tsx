export default function LocationSection() {
  return (
    <section className="bg-[#16A34A] py-10">
      {/* Top Row - Image + Map */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {/* Image */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="/images/T-Hub.jpg"
            alt="T-Hub Building"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Google Map Embed */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="T-Hub Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.458824680569!2d78.38522587493324!3d17.44624910359061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ecaae114fd%3A0x6c4cb1124c596cb!2sT-Hub%20Phase%202!5e0!3m2!1sen!2sin!4v1693049591032!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-12 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/images/GateCT.jpg" alt="The Patterns Company" className="w-20 mb-4" />
            <h3 className="text-lg font-bold">THE PATTERNS COMPANY</h3>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-green-400 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Gallery</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-green-400 font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Social Media Marketing</li>
              <li>Search Engine Optimization</li>
              <li>E-Commerce</li>
              <li>Graphic Designing</li>
              <li>Google Ads</li>
            </ul>
          </div>

          {/* Monument */}
          <div className="flex justify-center md:justify-end">
            <img src="/images/GateCT.jpg" alt="Charminar" className="w-80" />
          </div>
        </div>
      </footer>
    </section>
  );
}
