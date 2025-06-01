

const ProjectChild = () => {
  const projects= [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, featuring product listings, cart functionality, user authentication, and payment processing.",
      image: "https://images.klipfolio.com/website/public/6f1b14b5-1d2d-4a30-ac82-30869ca03ba4/powermetrics-dashboard_0.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      github: "https://github.com",
      demo: "https://react-tan-eta.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "School Management",
      description:
        "A productivity application for managing tasks and projects with drag-and-drop functionality, user collaboration, and real-time updates.",
      image: "https://images.klipfolio.com/website/public/6f1b14b5-1d2d-4a30-ac82-30869ca03ba4/powermetrics-dashboard_0.jpg",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com",
      demo: "",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather application that provides current conditions and forecasts for locations worldwide, with interactive maps and data visualization.",
      image: "https://images.klipfolio.com/website/public/6f1b14b5-1d2d-4a30-ac82-30869ca03ba4/powermetrics-dashboard_0.jpg",
      tags: ["JavaScript", "API Integration", "Chart.js"],
      github: "https://github.com",
      demo: "https://weather-app-one-theta-51.vercel.app",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills, built with modern web technologies and animations.",
      image: "https://images.klipfolio.com/website/public/6f1b14b5-1d2d-4a30-ac82-30869ca03ba4/powermetrics-dashboard_0.jpg",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
    }]

  return (
    <div className="h-auto">
     <div className="text-center mt-6">
      <h1 className="underline text-3xl font-bold">My Projects</h1>
      <div className="max-w-2xl mx-auto mt-4">
        <p>
         {` Here are some of the projects I've worked on. Each project represents different skills and technologies I've
           master.`}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-6 mt-10 w-full">
        {
          projects.map((item)=>(
            <>
            <div className="px-5 py-5 h[100px] rounded-lg border-purple-500 border-2 bg-white" style={{backdropFilter:'blur(15px)'}} key={item.id}>
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-800 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span key={tag} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-white hover:bg-purple-600 hover:scale-95 transition-all duration-200 font-bold px-5 py-2 md:px-2 md:py-2 rounded-md border-2 border-purple-600 ">
                  GitHub
                </a>
                <a href={item.demo} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-white hover:bg-purple-600 hover:scale-95 transition-all duration-200 font-bold px-5 py-2 md:px-2 md:py-2 rounded-md border-2 border-purple-600 ">
                  Live Demo
                </a>
              </div>
            </div>
            </>
          ))
        }
        
      </div>
     </div>
    </div>
  )
}

export default ProjectChild