
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import axios from "axios";
const RegisterForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  //handlechange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/auth/register', {
        email: formData.email,
        password: formData.password
      });
      if (response.status == 200) {
        const token = response.data.token;
        if (token) {
          localStorage.setItem('token', token)
          toast.success('Registration successfully')
          setTimeout(() => navigate('/hero'), 2000);
          setFormData({
            email: '',
            password: ''
          })
          console.log('information', response.data);
        }
        else {
          alert('Registration failed. Please try again.');
          return;
        }
      }
    }
    catch (err) {
      console.error(err);
      alert('Registration failed. Please try again.');
    }
  }
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Sign Up
        </h2>
        <form className="space-y-4">
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
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          {'Already have an account?'}
          <button onClick={() => navigate('/login')} className="text-blue-600 underline hover:cursor-pointer">
            Login
          </button>
        </p>
      </div>
    </div>
  )
}

export default RegisterForm
