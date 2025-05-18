import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
const LoginForm = () => {
  // State for form data
  const navigate = useNavigate();
  const [formData,setFormData]=useState({
    email:'',
    password:''
  })
  //handleChange
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})
  }
  //handleSubmit
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response=await axios.post('http://localhost:4000/api/auth/login',{
        email:formData.email,
        password:formData.password
      })
      if(response){
        navigate('/profile');
        setFormData({
          email:'',
          password:''
        })
        alert('Login successful');
        console.log('token',response.data.token);
        localStorage.setItem('token',response.data.token)
      }
      
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.');
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>
        <form  className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded-md"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition hover:cursor-pointer"
          >
           Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          {"Don't have an account?"}
          <button onClick={()=>navigate('/register')} className="text-blue-600 underline hover:cursor-pointer">
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
