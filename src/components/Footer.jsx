import { useState } from "react";

import eGove from "../assets/eGov-Foundation.png";

const footerLinks = {
  column1: [
    { name: "Home", href: "#" },
    { name: "Our Impact", href: "#" },
    { name: "DIGIT Sandbox", href: "#" },
  ],
  column2: [
    { name: "Our People", href: "#" },
    { name: "Financials", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing with: ${email}`);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-[#E6F3FB] pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            {/* logo*/}
            <div>
              <img
                src={eGove}
                alt="eGov Foundation"
                className="h-10 w-auto mb-8"
              />
              <p className="text-[#3B4C68] text-[15px] leading-relaxed mb-8 pr-4">
                Catalysing digital transformation in public service delivery at
                speed & scale.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="w-9 h-9 rounded-full border-[1.5px] border-[#64748B] flex items-center justify-center  hover:border-[#0E165D] hover:text-[#0E165D] transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links  */}
            <div>
              <h5 className="font-bold text-[#0E165D] text-lg mb-7">
                Useful Links
              </h5>
              <div className="grid grid-cols-2 gap-x-8">
                <ul className="space-y-4">
                  {footerLinks.column1.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-[#3B4C68] text-[15px] font-medium hover:text-[#0E165D] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4">
                  {footerLinks.column2.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-[#3B4C68] text-[15px] font-medium hover:text-[#0E165D] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subscribe  */}
            <div>
              <h5 className="font-bold text-[#0E165D] text-lg mb-7">
                Subscribe Now
              </h5>
              <p className="text-[#3B4C68] text-[15px] mb-6 leading-relaxed ">
                Receive regular updates of our monthly newsletter DOT – in your
                inbox.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex bg-white rounded-full overflow-hidden shadow-sm max-w-[360px]"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="flex-1 px-6 py-3 text-sm bg-transparent text-[#3B4C68] focus:outline-none placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="px-3 py-3.5 bg-[#F58220] text-white hover:bg-[#e07018] transition-colors flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 4l10 8 10-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-[#1577DD] py-5 relative ">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center pr-12 md:pr-16 gap-y-3">
            <span className="text-white text-[15px] ">
              ©2024. eGov. All Rights Reserved.
            </span>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white text-[15px] hover:text-black transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white text-[15px] hover:text-black transition-colors"
              >
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="absolute right-4 md:right-8 top-1 rounded-md w-8 h-8  bg-[#1B2B5C] flex items-center justify-center shadow-lg hover:bg-[#111A3A] transition-colors"
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="#67e8f9"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Footer;
