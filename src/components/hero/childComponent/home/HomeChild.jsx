
import { motion } from "framer-motion"
import {useNavigate} from 'react-router-dom'
import TypeIt from "typeit-react"
const HomeChild = () => {

  const fullText = "Full Stack Developer"

  const navigate=useNavigate()
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {`Hi, I'm`} <span className="text-primary text-center">Da Raksa</span>
          </h1>
          <TypeIt
        className="text-3xl sm:text-4xl font-bold font-mono text-[#5a29e4]"
        options={{
          speed: 100,
          waitUntilVisible: true,
          loop: true,
          cursorChar: '|',
         
        }}
      >
        {fullText}
      </TypeIt>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I build exceptional and accessible digital experiences for the web. Focused on creating products that are
            inclusive, performant, and delightful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate('/hero/projectsChild')}  className="px-6 py-3 bg-primary text-purple-600 font-semibold hover:cursor-pointer hover:bg-purple-600 hover:text-white hover:scale-95 transition-colors active:scale-105 duration-300 rounded-lg shadow-lg border-2 border-purple-600 hover:bg-primary-dark">
              View Projects
            </button>
           
          </div>
        </motion.div>
    </div>
  )
}

export default HomeChild
