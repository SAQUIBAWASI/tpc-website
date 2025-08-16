import { ArrowRight } from "lucide-react";

export default function HistorySection() {
  return (
    <section className="bg-[#A7F070] py-16 px-6 md:px-20 overflow-hidden">
      {/* Top Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <SproutIcon color="black" />
        </div>
        <h2 className="text-5xl font-medium mb-6">Our history</h2>
        <p className="text-lg leading-relaxed">
          We are a team of professional enthusiasts with extensive experience
          and a passion for agriculture. We believe that new technologies are
          the key to the growth of the agricultural sector, and we're not afraid
          to experiment, drawing on the best global practices in our industry.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-20 flex flex-col md:flex-row gap-12">
        {/* Left: Text + Image */}
        <div className="flex-1">
          <h3 className="text-6xl font-medium leading-none">
            Company foundation
          </h3>
          <p className="mt-4 text-lg">
            David and Kirill create a company and start dealing with spare parts
            and components for heavy agricultural machinery
          </p>

          <div className="mt-8 relative">
            <span className="absolute -top-6 left-4 bg-[#1B2E14] text-white px-3 py-1 rounded-full text-sm">
              Beginning
            </span>
            <img
              src="/images/Founder.jpg"
              alt="Founders"
              className="rounded-[20px] w-full object-cover"
              style={{
                height: "320px", // Adjusted height
                objectPosition: "top", // Keeps top fixed, crops bottom
              }}
            />
          </div>
        </div>

        {/* Right: Timeline with arrows */}
        <div className="flex-1 relative">
          {/* 2020 Row */}
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="text-6xl font-bold text-[#1B2E14]">2020</div>
              <span className="text-sm">January</span>
            </div>
            <div className="flex-1 h-32 border border-white rounded-full flex items-center justify-end px-6 ml-4 relative">
              <div className="text-6xl font-bold text-white">2020</div>
              <span className="text-sm ml-2 text-white">December</span>
              <ArrowRight
                size={44}
                strokeWidth={3.5}
                className="absolute right-[-25px] text-white"
              />
            </div>
          </div>

          {/* Curve to 2021 */}
          <div className="flex flex-col items-center my-8">
            <div className="w-1 h-20 bg-transparent border-l border-white rounded-full"></div>
            <div className="text-6xl font-bold text-white">2021</div>
          </div>

          {/* 2022 Row */}
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="text-6xl font-bold text-white">2022</div>
              <span className="text-sm text-white">January</span>
            </div>
            <div className="flex-1 h-32 border border-white rounded-full flex items-center justify-end px-6 ml-4 relative">
              <div className="text-6xl font-bold text-white">2022</div>
              <span className="text-sm ml-2 text-white">December</span>
              <ArrowRight
                size={44}
                strokeWidth={3.5}
                className="absolute right-[-25px] text-white"
              />
            </div>
          </div>

          {/* Curve to 2023 */}
          <div className="flex flex-col items-center my-8">
            <div className="w-1 h-20 bg-transparent border-l border-white rounded-full"></div>
            <div className="text-6xl font-bold text-white">2023</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Sprout Icon */
function SproutIcon({ color }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill={color}>
      <path d="M20 0C23 8 32 10 32 18C32 24 26 26 20 26C14 26 8 24 8 18C8 10 17 8 20 0Z" />
    </svg>
  );
}
