import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({children}) => {
  const [isValid, setIsValid] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setIsValid(false);
          return;
        }
        const res = await axios.get(import.meta.env.VITE_URL_PROFILE, {
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
    checkAuth();
  }, []);
 
  useEffect(() => {
    console.log('User data updated:',data);
  }, [data]);

  if (isValid === null) return <div className="flex flex-col items-center justify-center min-h-screen">
    <img width={'60px'} height={'60px'} src="../assets/loading.svg" alt="loading" />
  </div>;
  return (
    <div className="min-h-screen">

      {isValid ? children : <Navigate to="/" />}
    </div>
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
