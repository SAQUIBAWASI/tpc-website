
export default function ContactSection() {
  return (
    <section className="bg-green-400 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side (Regions) */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center justify-center border border-white/30 h-40 text-lg font-bold">
            India
          </div>
          <div className="flex items-center justify-center border border-white/30 h-40 text-lg font-bold">
            Dubai
          </div>
          <div className="flex items-center justify-center border border-white/30 h-40 text-lg font-bold">
            Europe
          </div>
          <div className="flex items-center justify-center border border-white/30 h-40 text-lg font-bold">
            America
          </div>
        </div>

        {/* Right Side (Text + Button) */}
        <div className="text-left">
          <h2 className="text-5xl font-semibold leading-tight mb-6">
            Let's help you <br /> navigate your <br /> next
          </h2>
          <button className="bg-black text-white px-6 py-3 rounded-none font-bold tracking-wide">
            CONTACT US
          </button>
        </div>
      </div>

      
    </section>
  );
}
