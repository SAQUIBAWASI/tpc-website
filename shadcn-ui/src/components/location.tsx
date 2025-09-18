import { Clock, MapPin } from "lucide-react"; // ✅ Icons
import { useState } from "react";

export default function ContactSection() {
  const [activeRegion, setActiveRegion] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  const regionData = {
    India: {
      text: [
        `T-HuB 2.0, Inorbit Mall Rd, Vittal Rao Nagar, 
         Knowledge City, Madhapur, Hyderabad, Telangana 500081`,
        `C9XP+MMW, Cyber Hills Colony, VIP Hills, 
         Silicon Valley, Madhapur, Hyderabad, Telangana 500081`,
         `ground floor, Prestige Atlanta, 80 Feet Rd, Koramangala 1A Block, Koramangala 3 Block, Koramangala, Bengaluru, Karnataka 560034,
         `
      ],
    },
    Dubai: {
      text: "Coming Soon",
      icon: <Clock className="w-5 h-5 text-yellow-600 inline mr-2" />,
    },
    Europe: {
      text: "Coming Soon",
      icon: <Clock className="w-5 h-5 text-yellow-600 inline mr-2" />,
    },
    America: {
      text: "Coming Soon",
      icon: <Clock className="w-5 h-5 text-yellow-600 inline mr-2" />,
    },
  };

  // ✅ Check if it's mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // ✅ Reusable Address Renderer
  const renderAddresses = (region) => {
    const data = regionData[region];
    if (Array.isArray(data.text)) {
      return (
        <div className="text-sm space-y-2">
          {data.text.map((addr, idx) => (
            <p key={idx} className="flex items-start">
              <MapPin className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
              {addr}
            </p>
          ))}
        </div>
      );
    }
    return (
      <p className="flex items-start text-sm">
        {data.icon || (
          <MapPin className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
        )}
        {data.text}
      </p>
    );
  };

  return (
    <section className="bg-green-400 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side (Regions) */}
        <div className="grid grid-cols-2 gap-2">
          {Object.keys(regionData).map((region) => (
            <div
              key={region}
              onMouseEnter={() => !isMobile && setActiveRegion(region)} // hover for desktop
              onMouseLeave={() => !isMobile && setActiveRegion(null)}  // close on leave
              onClick={() => isMobile && setActiveRegion(region)}       // click for mobile
              className="flex items-center justify-center border border-white/30 h-40 text-lg font-bold cursor-pointer hover:bg-white/20 transition relative"
            >
              {region}

              {/* ✅ Desktop Tooltip */}
              {!isMobile && activeRegion === region && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white text-black shadow-lg rounded-lg p-4 w-72 z-50">
                  <h3 className="text-lg font-bold mb-2">{region}</h3>
                  {renderAddresses(region)}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side (Text + Button) */}
        <div className="text-left">
          <h2 className="text-5xl font-semibold leading-tight mb-6">
            Let's help you <br /> navigate your <br /> next
          </h2>
          <button
            onClick={() => setContactOpen(true)}
            className="bg-black text-white px-6 py-3 rounded-none font-bold tracking-wide"
          >
            CONTACT US
          </button>
        </div>
      </div>

      {/* ✅ Mobile Center Modal for Region */}
      {isMobile && activeRegion && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white text-black rounded-lg shadow-lg max-w-sm w-11/12 p-6 relative">
            <h3 className="text-2xl font-bold mb-4">{activeRegion}</h3>
            {renderAddresses(activeRegion)}
            <button
              onClick={() => setActiveRegion(null)}
              className="absolute top-3 right-3 text-black font-bold text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ✅ Contact Us Modal */}
      {contactOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white text-black rounded-lg shadow-lg max-w-lg w-full p-4 relative">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="mb-4">
              Please reach out to us at: <br />
              <span className="font-semibold">contact@yourcompany.com</span> <br />
              Or call us at: <span className="font-semibold">+91 98765 43210</span>
            </p>
            <button
              onClick={() => setContactOpen(false)}
              className="absolute top-3 right-3 text-black font-bold text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
