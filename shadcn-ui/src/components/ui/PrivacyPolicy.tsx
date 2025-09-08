import React, { useEffect, useState } from "react";
import LocationSection from "@/components/Footer"; // ✅ Make sure this path is correct

export default function PrivacyPolicy() {
  // scroll-to-top visibility
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* =================== Main Privacy Policy Content =================== */}
      <div className="px-6 py-12 max-w-5xl mx-auto leading-relaxed pt-24  ">
        <h1 className="text-3xl font-bold mb-6 pt-10">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: November 23, 2024</p>

        <p>
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </p>
        <p className="mt-2">
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy.
        </p>

        {/* =================== Interpretation and Definitions =================== */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Interpretation and Definitions
        </h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Definitions</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Account</strong> means a unique account created for You to
            access our Service or parts of our Service.
          </li>
          <li>
            <strong>Affiliate</strong> means an entity that controls, is
            controlled by or is under common control with a party, where
            "control" means ownership of 50% or more of the shares, equity
            interest or other securities entitled to vote for election of
            directors or other managing authority.
          </li>
          <li>
            <strong>Company</strong> (referred to as either "the Company", "We",
            "Us" or "Our" in this Agreement) refers to The Patterns Company,
            T- HuB 2.o, Inorbit Mall Rd, Vittal Rao Nagar, Knowledge City,
            Madhapur, Hyderabad, Telangana 500081.
          </li>
          <li>
            <strong>Cookies</strong> are small files placed on Your device by a
            website, containing details of Your browsing history.
          </li>
          <li>
            <strong>Country</strong> refers to: Telangana, India
          </li>
          <li>
            <strong>Device</strong> means any device that can access the Service
            such as a computer, cellphone, or digital tablet.
          </li>
          <li>
            <strong>Personal Data</strong> is any information that relates to an
            identified or identifiable individual.
          </li>
          <li>
            <strong>Service</strong> refers to the Website.
          </li>
          <li>
            <strong>Service Provider</strong> means any natural or legal person
            who processes the data on behalf of the Company.
          </li>
          <li>
            <strong>Usage Data</strong> refers to data collected automatically
            when using the Service.
          </li>
          <li>
            <strong>Website</strong> refers to The Patterns Company, accessible
            from{" "}
            <a
              href="https://thepatternscompany.com/"
              className="text-green-600 underline"
            >
              https://thepatternscompany.com/
            </a>
          </li>
          <li>
            <strong>You</strong> means the individual accessing or using the
            Service, or the company/legal entity they represent.
          </li>
        </ul>

        {/* =================== Data Collection =================== */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Collecting and Using Your Personal Data
        </h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Types of Data Collected</h3>
        <p className="mt-2 font-medium">Personal Data</p>
        <p>
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information including:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Usage Data</li>
        </ul>

        <p className="mt-4 font-medium">Usage Data</p>
        <p>
          Usage Data is collected automatically when using the Service. This may
          include IP address, browser type, version, pages visited, time/date of
          visit, time spent on pages, device type, mobile identifiers, and other
          diagnostic data.
        </p>

        {/* =================== Tracking and Cookies =================== */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Tracking Technologies and Cookies
        </h2>
        <p>
          We use Cookies and similar tracking technologies (like web beacons,
          tags, scripts) to track activity on Our Service. These may be
          Persistent or Session Cookies.
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <strong>Essential Cookies</strong> – required for authentication and
            security.
          </li>
          <li>
            <strong>Cookies Policy / Notice Acceptance Cookies</strong> – check
            if users accepted cookie use.
          </li>
          <li>
            <strong>Functionality Cookies</strong> – remember choices (login
            details, preferences).
          </li>
        </ul>

        {/* =================== Use of Data =================== */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Use of Your Personal Data
        </h2>
        <p>
          The Company may use Personal Data for providing services, managing
          accounts, performing contracts, contacting users, marketing, business
          transfers, analytics, and compliance with law.
        </p>

        {/* =================== Retention, Transfers, Deletion =================== */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Retention, Transfer & Deletion
        </h2>
        <p>
          We retain Personal Data as long as necessary, transfer data securely
          (including cross-border), and allow You to request deletion or
          correction of Your information, except where legally required to
          retain it.
        </p>

        {/* =================== Disclosure =================== */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Disclosure of Your Personal Data
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Business Transactions (mergers, acquisitions)</li>
          <li>Law Enforcement requirements</li>
          <li>Other Legal Requirements (safety, fraud prevention, compliance)</li>
        </ul>

        {/* =================== Security =================== */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Security of Data</h2>
        <p>
          We use commercially acceptable means to protect Personal Data, but no
          method of online storage/transmission is 100% secure.
        </p>

        {/* =================== Children =================== */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Children’s Privacy</h2>
        <p>
          Our Service does not address anyone under 13. We do not knowingly
          collect data from children under 13. Parents/guardians should contact
          us if they believe data was collected without consent.
        </p>

        {/* =================== Links =================== */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Links to Other Websites
        </h2>
        <p>
          Our Service may link to third-party sites. We are not responsible for
          their privacy practices and recommend reviewing their policies.
        </p>

        {/* =================== Changes =================== */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Changes to this Privacy Policy
        </h2>
        <p>
          We may update Our Privacy Policy periodically. Updates will be posted
          on this page, with changes effective immediately upon posting.
        </p>

        {/* =================== Contact =================== */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Email: info@thepatternscompany.com</li>
          <li>
            Website:{" "}
            <a
              href="https://thepatternscompany.com/contact"
              className="text-green-600 underline"
            >
              https://thepatternscompany.com/contact
            </a>
          </li>
          <li>Phone: +91 85006 93113</li>
        </ul>
      </div>

      {/* ================ Floating Buttons ================= */}
      {/* WhatsApp */}
      <a
        href="https://wa.me/91837416160?text=Hello%2C%20I%27m%20interested%20in%20App%20Development"
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

      {/* ✅ Footer Section */}
      <LocationSection />
    </div>
  );
}
