import { useState } from "react";

const SkillChild = () => {
  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 50 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 35 },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 50 },
        { name: "PostgreSQL", level: 40 },
        { name: "Microsoft SQL Sever", level: 50 },
        { name: "MySQL", level: 60 },
        { name: "REST API", level: 90 },
      ],
    },
    {
      id: "tools",
      name: "Tools",
      skills: [
        { name: "Git/GitHub", level: 70 },
        { name: "Post Man", level: 60 },
        { name: "VS Code", level: 90 },
        { name: "Render", level: 30 },
        { name: "Vercel", level: 60 },
      ],
    },
    {
      id: "softskill",
      name: "Soft Skill",
      skills: [
        { name: "Communication", level: 95 },
        { name: "Teamwork & Collaboration", level: 85 },
        { name: "Problem-solving", level: 70 },
        { name: "Time Management", level: 97 },
        { name: "Adaptability", level: 90 },
      ],
    },
  ];
  //
  // const AllTechnologies=[
  //             "MongoDB",
  //             "Express",
  //             "React",
  //             "Node.js",
  //             "JavaScript",
  //             "PostgreSQL",
  //             "MSSQL SERVER",
  //             "MySQL",
  //             "Tailwind CSS",
  //             "GitHub",
  //             "Git"
  //           ]

  const AllImageTech = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s",
    "https://img.icons8.com/color/512/express-js.png",
    "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon.png",
    "https://e7.pngegg.com/pngimages/306/37/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text.png",
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3gPPapBN9-2CLtwWk1dSvcnUb8DLAvJQVQ&s",
    "https://logowik.com/content/uploads/images/microsoft-sql-server4529.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WxM3pctC-nL3hlTAJH7r6uj9ZHwIlSwnQA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
    "https://img.icons8.com/ios_filled/512/github.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGp2RKrzqJF2Cu3dxnk2RGK_F7SSloJG-Wyw&s",
  ];
  //
  const [activeTab, setActiveTab] = useState(skillCategories[0]?.id);
  const currentCategory = skillCategories.find((item) => item.id === activeTab);
  const getColorByLevel = (level) => {
    if (level < 50) return "bg-red-500";
    if (level < 70) return "bg-yellow-400";
    if (level < 90) return "bg-blue-500";
    return "bg-green-500";
  };
  
  return (
    <div className="h-auto mb-5">
      <div className="text-center mt-6">
        <h1 className="underline text-3xl font-bold">My Skills</h1>
        <div className="max-w-2xl mx-auto mt-4">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {`These are the technologies and skills I specialize in, and I’m always seeking to sharpen and expand them.`}
          </p>
        </div>
      </div>
      <div className="tab w-[90%] max-w-4xl mx-auto mt-5 text-center">
        <div className="tab-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 rounded-md bg-gray-300 shadow-md">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 hover:cursor-pointer py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill List */}
        <div className="mt-6 bg-white  p-5 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4 underline">
            {currentCategory?.name}
          </h2>
          <div className="min-w-full px-3 space-y-3">
            {currentCategory.skills.map((obj, index) => (
              <div key={index} className="w-full  px-3 py-2 ">
                <div className="w-full flex justify-between items-center">
                  <span className="text-gray-800 font-medium">{obj.name}</span>
                  <span className="text-gray-600 font-medium">
                    {obj.level}%
                  </span>
                </div>
                <div className="w-full rounded-full h-3 bg-gray-300 mt-1 ">
                  <div
                    className={`h-full  rounded-full transition-all duration-500 ${getColorByLevel(
                      obj.level
                    )}`}
                    style={{ width: `${obj.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* technologies */}
        <div className="mt-20 rounded-md p-4 ">
          <h3 className="text-xl font-serif font-bold text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {AllImageTech.map((img, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-16 h-16 bg-white  rounded-full  flex items-center justify-center mb-2 transition-shadow"
                  style={{
                    boxShadow:"0 0 17px 5px rgba(43, 90, 100, 0.7)" }}
                >
                  <img
                    src={img}
                    alt={img}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillChild;
