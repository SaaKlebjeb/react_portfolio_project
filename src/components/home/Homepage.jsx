import AutoType from "../auto-type/Auto-typing";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useEffect,useState } from "react";

export default function Homepage() {
  const text = "My name is DA RAKSA";
   const [isValid, setIsValid] = useState(null);
      const [data, setData] = useState(null);
    const navigate=useNavigate()
   useEffect(()=>{
     const checkAuth = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            setIsValid(false);
            return;
          }
          const res = await axios.get("http://localhost:4000/api/auth/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (res.data && res.data.userInfo) {
            setData(res.data.userInfo); // Store the object directly
            setIsValid(true);
          } else {
            setIsValid(false);
            localStorage.removeItem("token");
          }
        } catch (error) {
          console.log("Error fetching user info:", error);
          setIsValid(false);
          localStorage.removeItem("token");
        }
      };
      checkAuth()
   },[])
   useEffect(()=>{
    console.log(data)
   },[data])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f0f4ff] to-white">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="flex items-center justify-center w-full min-h-[80vh] px-4 md:px-12 py-12">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: AutoType Section */}
          <div className="flex flex-col items-start space-y-6">
            <AutoType text={text} speed={100} />

            <button
              type="button"
               onClick={()=>isValid?navigate('/hero'):navigate('/login')}
              className="bg-[#5a29e4] hover:bg-[#4720b3] hover:cursor-pointer text-white font-semibold font-mono px-4 py-3 sm:px-6 rounded-xl shadow-md hover:scale-105 transform transition-all duration-300"
            >
              🚀 Get Started
            </button>
          </div>

          {/* Right Side: Info Section */}
          <div className="text-center lg:text-left p-4">
            <h3
              style={{ fontFamily: '"Roboto Mono", monospace' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333]"
            >
              Why Register or Log In?
            </h3>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Because I want to integrate my frontend with backend services.
              <span className="block mt-2 text-[#5a29e4] font-semibold">🙏 Thank you for visiting!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
