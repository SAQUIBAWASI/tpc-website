
import { Link } from "react-router-dom";
export default function LocationSection() {
  return (
    <section className="bg-[#7ED957] py-1">
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
            // allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-12 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/images/neww.png" alt="The Patterns Company" className="w-50 mb-4" />
            <p className="text-lg font-bold">THE PATTERNS COMPANY</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-green-400 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
              <Link to="/"> Home</Link>
              </li>
              <li>
              <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/blog">Blog</Link>
              </li>
                <li>
              <Link to="/team">Team</Link>
              </li>
                <li>
              <Link to="/career">Career</Link>
              </li>
               <li>
              <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-green-400 font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
            <Link to="/web-development">Web Development</Link>
              </li>
              <li>
               <Link to="/app-development">App Development</Link>
              </li>
              <li>
              <Link to="/digital-marketing">Social Media Marketing</Link>
              </li>
              <li>
                  <Link to="/digital-marketing">Search Engine Optimization</Link>
              </li>
              <li>
               <Link to="/e-commerce">E-Commerce</Link>
              </li>
              <li>
                 <Link to="/google-ads">Google Ads</Link>
              </li>
            </ul>
          </div>

          {/* Monument */}
          <div className="flex justify-center md:justify-end">
            <img src="/images/char222.png" alt="Charminar" className="w-80" />
          </div>
        </div>
        {/* Social Icons and Copyright */}
      <div style={{ borderTop: '1px solid #222', marginTop: 32, padding: '24px 0 0 0', textAlign: 'center' }}>
        <div style={{ marginBottom: 16 }}>
          {/* Use valid URLs for social links */}
          <a href="https://www.facebook.com/webappdigitalmarketing" style={{
            display: 'inline-block',
            margin: '0 8px',
            background: '#fff',
            borderRadius: '50%',
            width: 40,
            height: 40,
            lineHeight: '40px',
            textAlign: 'center',
            color: '#000',
            fontSize: 20,
            verticalAlign: 'middle'
          }}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://x.com/thepatternsco" style={{
            display: 'inline-block',
            margin: '0 8px',
            background: '#fff',
            borderRadius: '50%',
            width: 40,
            height: 40,
            lineHeight: '40px',
            textAlign: 'center',
            color: '#000',
            fontSize: 20,
            verticalAlign: 'middle'
          }}>
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://www.instagram.com/thepatternscompany/" style={{
            display: 'inline-block',
            margin: '0 8px',
            background: '#fff',
            borderRadius: '50%',
            width: 40,
            height: 40,
            lineHeight: '40px',
            textAlign: 'center',
            color: '#000',
            fontSize: 20,
            verticalAlign: 'middle'
          }}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/the-patterns-company/mycompany/?viewAsMember=true" style={{
            display: 'inline-block',
            margin: '0 8px',
            background: '#fff',
            borderRadius: '50%',
            width: 40,
            height: 40,
            lineHeight: '40px',
            textAlign: 'center',
            color: '#000',
            fontSize: 20,
            verticalAlign: 'middle'
          }}>
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.google.com/search?q=The+Patterns+Company+-+Best+Digital+Marketing+-+SEO+-+SMO+-+Website+Development-+Services+in+Hyderabad&stick=H4sIAAAAAAAA_xXJQQuCMBQA4FPRz3gEHYOtuUKPZdBFCgo6v82njXTK9hD9O_3S9PJdvs16uxOjMtakSp6E0spIm2ZiPIjKJonQVh61VSh-q-r1IXggMwUf4dK1PfoJ9nCmyJC72jE2UGD4Ejtfz_G83heLxTeZ6Jggp4Garm_J81wUBmcpgvNwm0oKaLD8A5AniNySAAAA&hl=en-GB&mat=CU_2z5hS4XBnElcBezTaAf_x4PgqJKbSbY163tmX3j9wuTU43ZbVKGuLxI99D4SLz6pcBSk2-UoSbZ2YTBktHl9rrf6jbGubMz5bEoiAUT7dsLYqiSmnTfCtvzal5dmB-tg&authuser=0" style={{
            display: 'inline-block',
            margin: '0 8px',
            background: '#fff',
            borderRadius: '50%',
            width: 40,
            height: 40,
            lineHeight: '40px',
            textAlign: 'center',
            color: '#000',
            fontSize: 20,
            verticalAlign: 'middle'
          }}>
            <i className="fab fa-google"></i>
          </a>
          <a href="https://www.youtube.com/@thepatternsstudio" style={{
            display: 'inline-block',
            margin: '0 8px',
            background: '#fff',
            borderRadius: '50%',
            width: 40,
            height: 40,
            lineHeight: '40px',
            textAlign: 'center',
            color: '#000',
            fontSize: 20,
            verticalAlign: 'middle'
          }}>
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://in.pinterest.com/thepatternsgroup/" style={{
            display: 'inline-block',
            margin: '0 8px',
            background: '#fff',
            borderRadius: '50%',
            width: 40,
            height: 40,
            lineHeight: '40px',
            textAlign: 'center',
            color: '#000',
            fontSize: 20,
            verticalAlign: 'middle'
          }}>
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
        <div style={{ color: '#32ca32', fontWeight: 500, fontSize: '1rem', marginBottom: 8 }}>
          <i className="fa fa-copyright"></i> Copy Rights | <a href="/privacy-policy" style={{ color: '#32ca32', textDecoration: 'underline' }}>Privacy Policy</a> , All right reserved. Designed By <span style={{ color: '#32ca32', fontWeight: 'bold' }}>THE PATTERNS COMPANY</span>
        </div>
      </div>
      </footer>
    </section>
  );
}
