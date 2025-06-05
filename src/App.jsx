import './index.css'
import LoginForm from './auth/login/LoginForm.jsx'
import RegisterForm from './auth/register/RegisterForm.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Hero from './components/hero/Hero.jsx'
import ProtectedRoute from './auth/protectedRoute/ProtectedRoute.jsx'
import Notfound from './components/notfound/Notfound.jsx'
import { ToastContainer } from 'react-toastify'
import HomeChild from './components/hero/childComponent/home/HomeChild.jsx'
import AboutChild from './components/hero/childComponent/about/AboutChild.jsx'
import SkillChild from './components/hero/childComponent/skill/Skill.jsx'
import ProjectChild from './components/hero/childComponent/project/ProjectChild.jsx'
import ContactChild from './components/hero/childComponent/contact/ContactChild.jsx'
import Homepage from './components/home/Homepage.jsx'
function App() {
  return (
  <Router className="relative">
   <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/register" element={<RegisterForm />} />
    <Route path="/hero" element={<ProtectedRoute><Hero/></ProtectedRoute>}>
      <Route index element={<HomeChild />} />
      <Route path="homeChild" element={<HomeChild/>} />
      <Route path="aboutChild" element={<AboutChild />} />
      <Route path="projectsChild" element={<ProjectChild />} />
      <Route path="skillsChild" element={<SkillChild />} />
      <Route path="contactsChild" element={<ContactChild />} />
    </Route>
    <Route path="*" element={<Notfound />} />
   </Routes>
   <ToastContainer 
        position="top-center"
        autoClose={300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
  </Router>
  )
}

export default App
