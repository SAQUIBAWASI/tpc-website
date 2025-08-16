import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Minus, Move, Plus } from "lucide-react";
import { useInView } from "react-intersection-observer";

// Service images
const APP_DEV_IMG = "/images/salon3.jpg";
const WEB_DEV_IMG = "/images/salon4.jpg";
const DIGITAL_MARKETING_IMG = "/images/salon5.jpg";
const DRONES_IMG = "/images/salon6.jpg";
const PARTS_IMG = "/images/salon7.jpg";

function Spec({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return (
    <div className="grid grid-cols-[1fr,auto] items-end gap-4 border-t border-black/20 pt-3">
      <dt className="text-xs uppercase tracking-wide text-black/70">{label}</dt>
      <dd className="text-right text-3xl font-extrabold text-black">
        {value}
        {unit ? <span className="ml-1 text-base font-semibold text-black/80">{unit}</span> : null}
      </dd>
    </div>
  );
}

function DroneCard({ title, subtitle, description, specs, img, bgColor }: {
  title: string;
  subtitle: string;
  description: string;
  specs: Array<{ label: string; value: string; unit: string }>;
  img: string;
  bgColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative grid overflow-hidden rounded-[40px] ${bgColor} p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl`}
    >
      {/* top-right glyphs */}
      <div className="pointer-events-none absolute right-6 top-6 hidden select-none text-black/70 md:block">
        <div className="flex items-center gap-8 text-sm font-semibold">
          <span className="inline-flex items-center gap-1"><Move size={18} />⌃</span>
          <span className="underline">l‰</span>
        </div>
      </div>

      <div className="grid grid-cols-1 items-center gap-6 lg:gap-8 lg:grid-cols-2">
        {/* LEFT: framed card with image + specs */}
        <div className="relative order-2 lg:order-1">
          {/* Rounded frame */}
          <div className="pointer-events-none absolute -left-3 -top-3 -bottom-3 -right-3 rounded-[44px] border-4 border-black/15" />

          <div className="grid grid-cols-1 sm:grid-cols-[1fr,1fr] lg:grid-cols-[260px,1fr] gap-4 lg:gap-5 rounded-[32px] bg-white">
            {/* specs rail */}
            <div className="relative rounded-[28px] border-2 border-black/15 p-4 md:p-5 max-h-[300px] overflow-y-auto">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">{subtitle}</p>
                  <div className="mt-1 w-24 sm:w-36 border-y-2 sm:border-y-4 border-black/80 text-center text-xs uppercase tracking-widest">agricultural</div>
                </div>
                <div className="h-8 sm:h-10 w-1 rounded bg-black/20" />
              </div>

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-snug text-black/80">
                {description}
              </p>

              <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
                <button className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full border-2 border-black/70 bg-white text-black"><Minus size={16} className="sm:w-[18px] sm:h-[18px]" /></button>
                <button className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full border-2 border-black/70 bg-white text-black"><Plus size={16} className="sm:w-[18px] sm:h-[18px]" /></button>
              </div>

              <dl className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm">
                {specs.map((spec, idx) => (
                  <Spec key={idx} label={spec.label} value={spec.value} unit={spec.unit} />
                ))}
              </dl>
            </div>

            {/* image */}
            <div className="relative rounded-[28px] border-2 border-black/15 overflow-hidden h-[200px] sm:h-[250px] lg:h-[300px]">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: copy + CTA */}
        <div className="relative pl-1 pr-1 md:pl-6 order-1 lg:order-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-black">
            {title}
          </h2>
          <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-black/80">
            {description}
          </p>

          <div className="mt-8 sm:mt-12 lg:mt-16">
            <Button 
              asChild 
              variant="hero" 
              size="lg"
              className="rounded-full bg-black text-white hover:bg-black/90 shadow-md hover:shadow-lg"
            >
              <a href="#form" className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-7 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold">
                More details
                <ArrowRight size={16} className="sm:w-5 sm:h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom right rounded edge mimic */}
      <div className="pointer-events-none absolute -bottom-6 -right-6 h-16 sm:h-24 w-16 sm:w-24 rounded-full border-4 border-black/10" />
    </motion.div>
  );
}

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services-details" className="container mx-auto py-20 scroll-mt-24 md:scroll-mt-28">
      <div 
        ref={ref}
        className={`mx-auto max-w-2xl text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h2 className="font-display text-3xl md:text-5xl">Drones for Planting and Crop Protection</h2>
        <p className="mt-4 text-muted-foreground">
          Explore our lineup purpose-built for precision agriculture and dependable field operations.
        </p>
      </div>

      <div className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="relative grid overflow-hidden rounded-[40px] bg-[#A8EB66] p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl max-h-[550px]"
        >
          {/* top-right glyphs */}
          <div className="pointer-events-none absolute right-6 top-6 hidden select-none text-black/70 md:block">
            <div className="flex items-center gap-8 text-sm font-semibold">
              <span className="inline-flex items-center gap-1"><Move size={18} />⌃</span>
              <span className="underline">l‰</span>
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* LEFT: framed card with image + specs */}
            <div className="relative">
              {/* Rounded frame */}
              <div className="pointer-events-none absolute -left-3 -top-3 -bottom-3 -right-3 rounded-[44px] border-4 border-black/15" />

              <div className="grid grid-cols-[260px,1fr] gap-5 rounded-[32px] bg-[#A8EB66]">
                {/* specs rail */}
                <div className="relative rounded-[28px] border-2 border-black/15 p-4 md:p-5 max-h-[300px] overflow-y-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-4xl font-extrabold tracking-tight">App Dev</p>
                      <div className="mt-1 w-36 border-y-4 border-black/80 text-center text-xs uppercase tracking-widest">Mobile App</div>
                    </div>
                    <div className="h-10 w-1 rounded bg-black/20" />
                  </div>

                  <p className="mt-4 text-sm leading-snug text-black/80">
                    The reinforced downward airflow provides complete coverage of the plant. It
                    operates in any weather conditions with an IP67 protection rating.
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <button className="grid h-10 w-10 place-items-center rounded-full border-2 border-black/70 bg-[#A8EB66] text-black"><Minus size={18} /></button>
                    <button className="grid h-10 w-10 place-items-center rounded-full border-2 border-black/70 bg-[#A8EB66] text-black"><Plus size={18} /></button>
                  </div>

                  <dl className="mt-6 space-y-4 text-sm">
                    <Spec label="processes in 10 minutes" value="3.5" unit="ha" />
                    <Spec label="tank for liquids" value="16" unit="L" />
                    <Spec label="tank for granules" value="25" unit="L" />
                    <Spec label="flight speed" value="8" unit="m/s" />
                    <Spec label="empty weight" value="29.8" unit="kg" />
                  </dl>
                </div>

                {/* image */}
                <div className="relative rounded-[28px] border-2 border-black/15 overflow-hidden">
                  <img
                    src={APP_DEV_IMG}
                    alt="App Development"
                    className="w-full h-[300px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: copy + CTA */}
            <div className="relative pl-1 pr-1 md:pl-6">
              <h2 className="text-6xl md:text-7xl font-black tracking-tight text-black">
                App Development
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/80">
                Transforming ideas into seamless digital solutions through expert app development Services in Hyderabad at Patterns Company.
              </p>

              <div className="mt-16">
                <Button 
                  asChild 
                  variant="hero" 
                  size="lg"
                  className="rounded-full bg-black text-[#A8EB66] hover:bg-black/90 shadow-md hover:shadow-lg"
                >
                  <a href="#form" className="inline-flex items-center gap-3 px-7 py-4 text-lg font-semibold">
                    More details
                    <ArrowRight size={20} />
                  </a>
                </Button>
              </div>

              <div className="mt-24 hidden text-xs text-black/70 md:block">
                <span className="inline-flex items-center gap-6">
                  <span>↔ 1000–16000RPM</span>
                  <span>↔ 1/2.33 12M CMOS</span>
                </span>
              </div>
            </div>
          </div>

          {/* Bottom right rounded edge mimic */}
          <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full border-4 border-black/10" />
        </motion.div>
      </div>

      {/* Additional drone cards */}
      <div className="mt-20 space-y-20">
        <DroneCard
          title="Web Development"
          subtitle="Website Development"
          description="Web development encompasses building, designing, and maintaining websites to ensure optimal functionality and user experience."
          specs={[
            { label: "Processes in 10 minutes", value: "7", unit: "ha" },
            { label: "Tank for liquids", value: "40", unit: "L" },
            { label: "Tank for granules", value: "60", unit: "L" },
            { label: "Flight speed", value: "13.8", unit: "m/s" },
            { label: "Empty weight", value: "39.6", unit: "kg" },
          ]}
          img={WEB_DEV_IMG}
          bgColor="bg-[#ff6b01]"
        />

        <DroneCard
          title="Digital Marketing Services"
          subtitle="DMS"
          description="Transforming businesses through strategic digital marketing solutions tailored for optimal audience engagement and growth We are one of the leading Digital Marketing Agency In Hyderabad."
          specs={[
            { label: "Processes in 10 minutes", value: "8", unit: "ha" },
            { label: "Tank for liquids", value: "50", unit: "L" },
            { label: "Tank for liquids", value: "70", unit: "L" },
            { label: "Flight speed", value: "14.5", unit: "m/s" },
            { label: "Empty weight", value: "42", unit: "kg" },
          ]}
          img={DIGITAL_MARKETING_IMG}
          bgColor="bg-[#e7c132]"
        />
      </div>

      {/* New Services Section */}
      <div className="mt-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Drones Card */}
          <div className="bg-[#A7F070] rounded-[40px] flex flex-col lg:flex-row overflow-hidden h-[400px] lg:h-[500px] shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Image */}
            <div className="relative w-full lg:w-1/2 h-48 lg:h-full">
              <img
                src={DRONES_IMG}
                alt="Drone"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8 flex flex-col justify-between w-full lg:w-1/2">
              <div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black">Drones</h2>
                <p className="mt-3 lg:mt-4 text-base lg:text-lg text-black">
                  Batteries, controllers, generators, seeding systems, portable and
                  fixed RTK stations, network chargers, and cooling containers for
                  batteries
                </p>
              </div>

              <button className="bg-[#1B2E14] text-[#A7F070] px-4 lg:px-6 py-2 lg:py-3 rounded-full mt-4 lg:mt-6 w-fit text-sm lg:text-base font-medium hover:bg-[#1B2E14]/90 transition-colors duration-200">
                To the catalogue
              </button>
            </div>
          </div>

          {/* Parts Card */}
          <div className="bg-[#72B6E4] rounded-[40px] flex flex-col lg:flex-row overflow-hidden h-[400px] lg:h-[500px] shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Image */}
            <div className="relative w-full lg:w-1/2 h-48 lg:h-full">
              <img
                src={PARTS_IMG}
                alt="Tractor"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8 flex flex-col justify-between w-full lg:w-1/2">
              <div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black">Parts</h2>
                <p className="mt-3 lg:mt-4 text-base lg:text-lg text-black">
                  Spare parts for harvesters, tractors, and more
                </p>
              </div>

              <button className="bg-[#0B1A33] text-[#72B6E4] px-4 lg:px-6 py-2 lg:py-3 rounded-full mt-4 lg:mt-6 w-fit text-sm lg:text-base font-medium hover:bg-[#0B1A33]/90 transition-colors duration-200">
                To the catalogue
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Products;
