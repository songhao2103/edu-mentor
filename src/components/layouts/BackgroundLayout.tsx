import { ReactNode } from "react";

interface IBackgroundLayoutProps {
  children: ReactNode;
}
const BackgroundLayout: React.FC<IBackgroundLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen overflow-x-hidden bg-Background3">
      <div className="w-full max-w-[540px] px-[20px] py-[24px] pb-[400px]">
        {children}
      </div>
    </div>
  );
};

export default BackgroundLayout;
