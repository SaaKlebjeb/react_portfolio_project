import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky top-0'>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left: Name */}
          <Link to='/' className="text-2xl font-bold text-blue-600">Da Raksa</Link>

          {/* Center: Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#skill" className="text-gray-700 hover:text-blue-600 font-medium">Skill</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#project" className="text-gray-700 hover:text-blue-600 font-medium">Project</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            <Link to="/profile" className="text-gray-700 hover:text-blue-600 font-medium">Profile</Link>
          </div>

          {/* Right: Get Started */}
          <div>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
