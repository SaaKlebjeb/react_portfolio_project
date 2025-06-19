
import { useState } from "react";
import { Link } from "react-router-dom";
const navLinks = [
    { name: "Home", path: "/homeChild" },
    { name: "About", path: "/aboutChild" },
    { name: "Projects", path: "/projectsChild" },
    { name: "Skills", path: "/skillsChild" },
    { name: "Contact", path: "/contactsChild" },
]
const NavbarChild = () => {
    const [activeTab,setActiveTab] = useState("/homeChild");

    const handleTabChange = (path) => {
        localStorage.setItem("activeTab", path);
        setActiveTab(localStorage.getItem("activeTab") || path);
    }
    return (
        <div>
            <div className="flex items-center justify-between">
                <Link to="/" className="text-xl font-bold">
                    Portfolio
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            onClick={() => handleTabChange(link.path)}
                            key={link.path}
                            className={`text-sm font-medium hover:text-primary transition-colors ${activeTab===link.path?"text-primary":"text-gray-600"}`}
                            to={link.path}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className=" size-5">Resume</button>
                </div>
            </div>
        </div>
    )
}

export default NavbarChild
