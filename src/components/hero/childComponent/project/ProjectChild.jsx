

const ProjectChild = () => {
  const projects= [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "Static site built with React.js and Tailwind CSS, my first frontend project. Displays clothes with clickable product details, no active cart or payment features.",
      image: "../assets/e-commerce.png",
      tags: ["React.JS","Tailwind CSS"],
      github: "https://github.com/SaaKlebjeb/React",
      demo: "https://react-tan-eta.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "School Management",
      description:
        "Full-stack app with React.js frontend and RESTful API backend. Admins can add, edit, and delete data via CRUD operations.And I used Aiven.io third-party which is a online database for making global data accessing.  ",
      image: "../assets/school_management.png",
      tags: ["MySql", "Express.JS","React.JS","Tailwind CSS","API Integration","Aiven.io"],
      github: "https://github.com/SaaKlebjeb/React_shcool_management",
      demo: "https://react-shcool-management.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: "Basic API CRUD Operations",
      description:
        "My first small API project, focusing on core CRUD functionality (add, update, delete) using a RESTful API. Built a simple form to input data and display it in a table, focusing on core processing rather than rich feature of user interface.",
      image: "../assets/basic_api_crud.png",
      tags: ["React.JS", "API Integration","Tailwind CSS","Jsonbin.io"],
      github: "https://github.com/SaaKlebjeb/React_API_WITH_JSONBIN",
      demo: "https://react-api-gilt.vercel.app",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills, built with modern web technologies and animations.",
      image: "../assets/portfolio.png",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/SaaKlebjeb/react_portfolio_project",
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
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3   gap-6 mt-10 w-full">
        {
          projects.map((item)=>(
            <>
            <div className="px-5 py-5  rounded-lg border-purple-500 border-2 bg-white hover:shadow-2xl hover:shadow-purple-600 transition" style={{backdropFilter:'blur(15px)'}} key={item.id}>
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
              <div className="flex justify-between flex-col  w-full space-y-3 items-center">
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-white flex justify-center space-x-2 items-center hover:text-white bg-gray-800 hover:bg-gray-700 transition-color duration-200 min-w-full h-14 rounded-lg border-2 ">
                  <i className="fi fi-brands-github text-md  lg:text-xl text-white"></i>
                  <span className="font-medium">GitHub</span>
                </a>
                <a href={item.demo} target="_blank" rel="noopener noreferrer" className="text-white flex justify-center space-x-2 items-center hover:text-white bg-gray-800 hover:bg-gray-700 transition-color duration-200 min-w-full h-14 rounded-lg border-2">
                 <i className="fi fi-rr-eye text-md mt-1 lg:text-xl text-white "></i>
                 <span className="font-medium">Live Demo</span>
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