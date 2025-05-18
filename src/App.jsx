import './index.css'
import LoginForm from './auth/login/LoginForm.jsx'
import RegisterForm from './auth/register/RegisterForm.jsx'
import HomePage from './components/home/Homepage.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Profile from './components/profile/Profile.jsx'
import ProtectedRoute from './auth/protectedRoute/ProtectedRoute.jsx'
import Notfound from './components/notfound/Notfound.jsx'
function App() {
  return (
  <Router className="relative">
   <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/login" element={<LoginForm />} />
    <Route path="/register" element={<RegisterForm />} />
    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
    <Route path="*" element={<Notfound />} />
   </Routes>
  </Router>
  )
}

export default App
