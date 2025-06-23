import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

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
        const res = await fetch(import.meta.env.VITE_URL_PROFILE, {
          method:'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
        if (res.ok) {
          const res2 = await res.json();
          setData(res2.userInfo); // Store the object directly
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
