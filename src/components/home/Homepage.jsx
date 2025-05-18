 // Make sure React Router is installed

import Navbar from "../navbar/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar/>
      {/* Sections */}
      <div className="max-w-5xl mx-auto p-6 space-y-20 mt-10">
        <section id="skill" className="h-[400px] bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Skill</h2>
          <p>Describe your technical skills here...</p>
        </section>

        <section id="about" className="h-[400px] bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p>Introduce yourself here...</p>
        </section>

        <section id="project" className="h-[400px] bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Project</h2>
          <p>Describe your projects here...</p>
        </section>

        <section id="contact" className="h-[400px] bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>How people can reach you...</p>
        </section>
      </div>
    </div>
  );
}
