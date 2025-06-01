import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const Navbar = () => {
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
    <div className='sticky top-0 z-10'>
      <nav className="bg-white  shadow-md h-[100px] grid place-items-center">
        <div className="min-w-[95%] mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left: Name */}
          <Link to='/' className="text-4xl font-bold text-[#5a29e4] font-mono">Da Raksa</Link>
          {/* Right: Get Started */}
          <div>
            <button
            type='button'
             onClick={()=>isValid?navigate('/hero'):navigate('/login')}
              className="bg-[#5a29e4] ml-2 shadow-sky-500 text-white text-lg font-mono hover:scale-95 hover:cursor-pointer  w-[145px] h-[45px] sm:w-[150px] sm:h-[50px] hover:rounded-[30px]  rounded-md hover:bg-[#5a29e4] transition ">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
