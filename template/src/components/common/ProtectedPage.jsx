import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedPage = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return children;
};

export default ProtectedPage;
