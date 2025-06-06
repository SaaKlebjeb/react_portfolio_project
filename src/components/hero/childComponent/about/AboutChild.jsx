import { useNavigate } from "react-router-dom";

const AboutChild = () => {
  const navigate = useNavigate();
  return (
    <div className="h-auto mt-3 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-60  h-60 rounded-full overflow-hidden border-6 border-primary/20">
              <img
                src="../assets/myProfile.jpg"
                alt="Profile"
                className="object-cover w-full h-full "
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl text-center md:text-start font-bold mb-2 underline">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary "></div>

            <p className="mb-6 font-medium text-[16px] font-['Outfit, sans-serif']">
              {`Hello! I'm a computer science student at the Royal University of Phnom Penh with a strong interest in full-stack web development. I enjoy exploring new technologies and building web applications that solve real-world problems.`}
            </p>

            <p className="mb-6 font-medium text-[16px] font-['Outfit, sans-serif']">
              {`Although I don't have professional work experience yet, I've built several personal and academic projects using modern tools like JavaScript, React, Node.js, and MongoDB. These projects have helped me understand the development process from front to back.`}
            </p>

            <p className="mb-8 font-medium text-[16px] font-['Outfit, sans-serif']">
              {`In my free time, I like learning about new technologies, improving my coding skills, and working on side projects. I'm passionate about becoming a skilled developer and look forward to contributing to exciting tech teams in the future.`}
            </p>

            {/*  */}
            <div className="flex flex-wrap gap-4 text-center">
              <button
                onClick={() => navigate("/hero/contactsChild")}
                type="button"
                className="px-5 transition hover:bg-gray-600 active:scale-95 duration-300 py-3 flex justify-center items-center space-x-3 rounded-lg bg-black shadow-md  hover:cursor-pointer"
              >
                <i className="fi fi-rr-envelope text-xl text-white"></i>
                <p className="font-semibold text-white">Contact Me</p>
              </button>
              <a
                href="/MyNewCV.pdf"
                download="MyNewCV.pdf"
                className="px-5 py-3 transition hover:bg-gray-600 duration-300 active:scale-95  flex justiy-center items-center space-x-3 rounded-lg bg-black hover:cursor-pointer"
              >
                <i className="fi fi-rr-download text-lg text-white"></i>
                <p className="font-semibold text-white">Download CV</p>
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="pt-6 shadow-md border-2 border-black rounded-md pl-12 hover:shadow-purple-600 h-[300px] transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text font-medium text-[16px] font-mono-muted-foreground mb-4">
                My academic background
              </p>
              <ul className="space-y-4">
                <li>
                  <div className="font-medium">Graduated from</div>
                  <div className="text-sm text-muted-foreground">
                    Bun Rany Hun Sen Spue High School, 2022-2023
                  </div>
                </li>
                <li>
                  <div className="font-medium">{`I'm currently a third-year student pursuing a Bachelor's Degree in Computer Science `}</div>
                  <div className="text-sm text-muted-foreground">
                    Royal University Of Phnome Penh, 2023-now
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="pt-6 shadow-md border-2 border-black rounded-md pl-12 hover:shadow-purple-600 h-[300px] transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Interests</h3>
              <p className="text font-medium text-[16px] font-mono-muted-foreground mb-4">
                What I enjoy besides coding
              </p>
              <ul className="space-y-2">
                <li>Open Source Contributing</li>
                <li>Learning New Technologies</li>
                <li>Networking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutChild;
