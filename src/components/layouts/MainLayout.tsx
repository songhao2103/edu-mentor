import { ReactNode } from "react";
import Header from "./header/Header";

interface IMainLayoutProps {
  children: ReactNode;
}
const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mt-16">{children}</div>
    </div>
  );
};

export default MainLayout;
