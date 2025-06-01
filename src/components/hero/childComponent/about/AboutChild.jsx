

const AboutChild = () => {
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
            <h2 className="text-3xl font-bold mb-2 underline">About Me</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>

            <p className="mb-6 font-medium text-lg font-mono">
            {`  Hello! I'm a passionate full-stack developer with 5+ years of experience building web applications. I
              specialize in JavaScript, React, Node.js, and modern web technologies.`}
            </p>

            <p className="mb-6 font-medium text-lg font-mono">
             {` My journey in software development began at University of Technology where I earned my Bachelor's degree
              in Computer Science. Since then, I've worked with startups and established companies to create efficient,
              scalable, and user-friendly applications.`}
            </p>

            <p className="mb-8 font-medium text-lg font-mono">
              {`When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects.
              I'm always eager to learn new technologies and solve challenging problems.`}
            </p>

           

            
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div>
            <div className="pt-6 shadow-md border-2 border-black rounded-md pl-12 hover:shadow-purple-600 h-[300px] transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text font-medium text-lg font-mono-muted-foreground mb-4">My academic background</p>
              <ul className="space-y-4">
                <li>
                  <div className="font-medium">BSc in Computer Science</div>
                  <div className="text-sm text-muted-foreground">University of Technology, 2015-2019</div>
                </li>
                <li>
                  <div className="font-medium">Web Development Bootcamp</div>
                  <div className="text-sm text-muted-foreground">Code Academy, 2019</div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="pt-6 shadow-md border-2 border-black rounded-md pl-12 hover:shadow-purple-600 h-[300px] transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <p className="text font-medium text-lg font-mono-muted-foreground mb-4">My professional journey</p>
              <ul className="space-y-4">
                <li>
                  <div className="font-medium">Senior Developer</div>
                  <div className="text-sm text-muted-foreground">Tech Solutions Inc, 2021-Present</div>
                </li>
                <li>
                  <div className="font-medium">Web Developer</div>
                  <div className="text-sm text-muted-foreground">Digital Agency, 2019-2021</div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="pt-6 shadow-md border-2 border-black rounded-md pl-12 hover:shadow-purple-600 h-[300px] transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Interests</h3>
              <p className="text font-medium text-lg font-mono-muted-foreground mb-4">What I enjoy besides coding</p>
              <ul className="space-y-2">
                <li>Open Source Contributing</li>
                <li>Tech Blogging</li>
                <li>Hiking & Photography</li>
                <li>Reading Science Fiction</li>
                <li>Learning New Technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutChild
