import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "homeChild" },
  { name: "About", path: "aboutChild" },
  { name: "Projects", path: "projectsChild" },
  { name: "Skills", path: "skillsChild" },
  { name: "Contact", path: "contactsChild" },
];

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);

  return (
    < div className=" min-h-screen bg-gradient-to-br from-purple-600 via-gray-300 to-blue-600 ">
      <header className="sticky top-0 z-50 bg-transparent px-3 bg-gradient-to-br from-purple-600 via-gray-300 to-blue-600 shadow-md" style={{ backdropFilter: "blur(10px)" }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center  ">
          <Link to="homeChild" className="text-2xl lg:text-3xl font-bold text-purple-600">
            Portfolio
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-4 ">
           <div className="rounded-full flex justify-center items-center py-3 shadow-2xl hover:shadow-sky-400 group transition " >
             {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[15px] sm:text-[18px] mx-5 font-bold hover:-translate-y-1  font-mono transition  ${
                  isActive(link.path) ? "text-purple-600 font-semibold" : "text-gray-600 hover:text-purple-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
           </div>
            <a
              href="/assets/MyNewCV.pdf"
              download='MyNewCV.pdf'
              className=" px-4 flex justify-center items-center border-2 rounded-md font-bold text-sm md:text-md  text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white transition"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden px-4 pb-5 space-y-3 py-4 rounded-2xl bg-white shadow-md hover:shadow-sky-400 group transition  hover:blur-[0.3px]" >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block font-mono  hover:text-purple-600 font-bold text-[16px] sm:text-[18px]  ${
                  isActive(link.path) ? "text-purple-600 font-semibold" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/MyNewCV.pdf"
              download='MyNewCV.pdf'
              className=" px-5 py-2 border-2  rounded font-bold text-sm md:text-md  text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white transition"
            >
              Resume
            </a>
          </div>
        )}
      </header>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Hero;
