import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

interface IPrivateRoutesProps {
  children: ReactNode;
}
const PrivateRoutes: React.FC<IPrivateRoutesProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state: any) => state.user.userInfo);

  useEffect(() => {
    console.log(user);
    if (!user || Object.keys(user).length === 0) {
      navigate("/login");
    }
  }, [location.pathname, user, navigate]);

  return <div>{user && <div>{children}</div>}</div>;
};

export default PrivateRoutes;
