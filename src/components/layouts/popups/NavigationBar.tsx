import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import * as icons from "lucide-react";
import optionsNavBar from "../../../datas/optionsNavBar.ts";
import Icon from "../../common/Icon";
import Logo from "../../common/Logo";
import ButtonCommon from "../../common/ButtonCommon.tsx";
import UpgradePackage from "../../common/UpgradePackage.tsx";

interface NavigationBarProps {
  handleHiddenNavBar: () => void;
  hiddenNavBar: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  handleHiddenNavBar,
  hiddenNavBar,
}) => {
  const location = useLocation();
  const currentOptions = useMemo(
    () =>
      optionsNavBar.map((option) => ({
        ...option,
        isActive: option.link === location.pathname,
      })),
    [location.pathname]
  );

  return (
    <div>
      <Layout
        className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-black transition-all-spinSlow"
        $hiddenNavBar={hiddenNavBar}
      ></Layout>
      <NavBar
        $hiddenNavBar={hiddenNavBar}
        className="fixed top-0 bottom-0 left-0 right-0 z-30"
      >
        <div
          className="absolute top-0 right-0 w-full h-full"
          onClick={handleHiddenNavBar}
        ></div>
        <div className="absolute flex flex-col h-screen px-[10px] py-6 w-[300px] z-30 bg-White rounded-tr-[8px] rounded-br-[8px]">
          <div className="flex items-center justify-between pb-2 border-b-2">
            <Logo widthImage="50" />
            <div
              className="flex items-center justify-center w-10 h-10 bg-XanhMobifone rounded-[8px]"
              onClick={handleHiddenNavBar}
            >
              <Icon name="ChevronLeft" color="#fff" />
            </div>
          </div>
          <div className="flex flex-col pb-4 mt-4 border-b-[2px] gap-y-1 overflow-y-auto">
            {currentOptions.map((option, index) => (
              <Link
                to={option.link}
                key={index}
                className="flex gap-x-4 px-[13px] py-4 w-full rounded-[8px]"
                style={{
                  backgroundColor: option.isActive
                    ? "var(--Xanh-mobifone)"
                    : "var(--White)",
                }}
              >
                <Icon
                  name={option.icon as keyof typeof icons}
                  size={20}
                  color={option.isActive ? "#fff" : "#4c5665"}
                />
                <p
                  className="text-bv-14 leading-[22px]"
                  style={{
                    color: option.isActive ? "var(--White)" : "var(--Text-2)",
                  }}
                >
                  {option.message}
                </p>
              </Link>
            ))}
          </div>

          <UpgradePackage bgColor="#FFF8E1" bgColorButton="#FFE57F" />

          <div>
            <ButtonCommon
              iconName="LogOut"
              message="Đăng xuất"
              bgcColor="Xanh-mobifone"
              iconSize={18}
              borderRadius="8px"
            />
          </div>
        </div>
      </NavBar>
    </div>
  );
};

export default NavigationBar;

const Layout = styled.div<{ $hiddenNavBar: boolean }>`
  z-index: ${(props) => (props.$hiddenNavBar ? "20" : "-999")};
  opacity: ${(props) => (props.$hiddenNavBar ? "0.4" : "0")};
  transition: all 0.3s ease;
`;

const NavBar = styled.div<{ $hiddenNavBar: boolean }>`
  transform: translateX(${(props) => (props.$hiddenNavBar ? "0" : "-100%")});
  opacity: ${(props) => (props.$hiddenNavBar ? "1" : "0")};
  transition: all 0.3s ease;
`;
