import { ReactNode } from "react";
import Header from "./header/Header";

interface IMainLayoutProps {
  children: ReactNode;
}
const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  "main";
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
