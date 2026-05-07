import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/eGov-Foundation.png";
import {
  openDropdown,
  closeDropdown,
  toggleMobile,
  closeMobile,
  toggleSearch,
  setSearchQuery,
} from "../store/navSlice";
import { setNavFilter, setSearchTerm } from "../store/productsSlice";

const navItems = [
  {
    name: "About Us",
    items: [
      { label: "Our Story", tag: "About" },
      { label: "Our Team", tag: "About" },
      { label: "Our Impact", tag: "About" },
      { label: "Annual Reports", tag: "About" },
    ],
  },
  {
    name: "Areas of work",
    items: [
      { label: "Public Health", tag: "Public Health" },
      { label: "Public Finance", tag: "Public Finance" },
      { label: "Local Governance", tag: "Local Governance" },
      { label: "Water & Sanitation", tag: "Water & Sanitation" },
    ],
  },
  {
    name: "Products & Solutions",
    items: [
      { label: "DIGIT Platform", tag: "DIGIT" },
      { label: "Property Tax", tag: "Property Tax" },
      { label: "Water & Sanitation", tag: "Sanitation" },
      { label: "Public Finance", tag: "Finance" },
    ],
  },
  {
    name: "Our Platform",
    items: [
      { label: "Platform Overview", tag: "Platform" },
      { label: "Open Source", tag: "Open Source" },
      { label: "DIGIT Sandbox", tag: "DIGIT" },
      { label: "Developer Docs", tag: "Docs" },
    ],
  },
  {
    name: "Ecosystem",
    items: [
      { label: "Partners", tag: "Partnership" },
      { label: "Supporters", tag: "Supporters" },
      { label: "Community", tag: "Community" },
      { label: "Join Us", tag: "Join" },
    ],
  },
  {
    name: "Resources",
    items: [
      { label: "Articles", tag: "Articles" },
      { label: "Case Studies", tag: "Case Studies" },
      { label: "Whitepapers", tag: "Whitepapers" },
      { label: "Videos", tag: "Videos" },
      { label: "Newsletter", tag: "Newsletter" },
    ],
  },
];

function scrollToLatest() {
  const el = document.getElementById("latest-section");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Header() {
  const dispatch = useDispatch();
  const {
    openDropdown: activeDropdown,
    mobileOpen,
    searchOpen,
    searchQuery,
  } = useSelector((s) => s.nav);
  const leaveTimer = useRef(null);

  const handleMouseEnter = (name) => {
    clearTimeout(leaveTimer.current);
    dispatch(openDropdown(name));
  };

  const handleMouseLeave = () => {
    leaveTimer.current = setTimeout(() => dispatch(closeDropdown()), 120);
  };

  const handleDropdownItemClick = (tag) => {
    dispatch(setNavFilter(tag));
    dispatch(closeDropdown());
    dispatch(closeMobile());

    // setTimeout(scrollToLatest, 50);
  };

  const handleNavSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchQuery));
    dispatch(toggleSearch());
    setTimeout(scrollToLatest, 50);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#E6F3FB] border-b border-blue-100 py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center gap-8">
            <a
              href="#"
              className="text-[#1577DD] text-sm font-bold hover:text-black transition-colors"
            >
              Events
            </a>
            <a
              href="#"
              className="text-[#1577DD] text-sm font-bold hover:text-black transition-colors"
            >
              Contact us
            </a>
            <button className="flex items-center gap-1.5 px-3 py-1 text-sm  text-[#1577DD] hover:bg-sky-100 rounded-md transition-colors">
              <img
                src="/assets/en.svg"
                alt="English"
                className="w-5 h-3.5 rounded-sm"
                onError={(e) => (e.target.style.display = "none")}
              />
              <span className="font-extrabold">ENG</span>
              <svg
                className="w-2.5 h-2.5 mt-0.5"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#f8fafc]  sticky top-0 z-50  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}

            <a href="#" className="flex-shrink-0">
              <img src={logo} alt="eGov Foundation" className="h-11 w-auto" />
            </a>

            {/* Desktop nav items */}
            <div className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-3.5 py-2 text-[16px] font-medium rounded-md transition-colors
                      ${activeDropdown === item.name ? "text-cyan-600 bg-cyan-50" : "text-slate-700 hover:text-cyan-600 hover:bg-gray-50"}`}
                  >
                    {item.name}
                    <svg
                      className={`w-3 h-3 text-cyan-500 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown  */}
                  {activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* small arrow pointer */}
                      <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
                      {item.items.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleDropdownItemClick(sub.tag)}
                          className="w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-700 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Search icon */}
              <div className="ml-2 flex items-center">
                {searchOpen ? (
                  <form
                    onSubmit={handleNavSearch}
                    className="flex items-center gap-2"
                  >
                    <input
                      autoFocus
                      type="text"
                      value={searchQuery}
                      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                      placeholder="Search…"
                      className="w-44 text-sm border border-gray-200 rounded-full px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <button
                      type="submit"
                      className="p-1.5 text-cyan-600 hover:text-cyan-700"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => dispatch(toggleSearch())}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => dispatch(toggleSearch())}
                    className="p-2.5 text-slate-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors"
                    aria-label="Search"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-slate-700 hover:text-cyan-600 rounded-md"
              onClick={() => dispatch(toggleMobile())}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-gray-100 py-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  <p className="px-4 pt-3 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {item.name}
                  </p>
                  {item.items.map((sub) => (
                    <button
                      key={sub.label}
                      onClick={() => handleDropdownItemClick(sub.tag)}
                      className="w-full text-left flex items-center gap-2.5 px-6 py-2 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-700 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {sub.label}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
