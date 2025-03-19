import { useState } from "react";
import avatarDefault from "../../../../public/asset/images/avatarDefault.png";
import NavigationBar from "../popups/NavigationBar";
import Icon from "../../common/Icon.tsx";

const Header = () => {
  const [hiddenNavBar, setHiddenNavBar] = useState(false);

  const handleHiddenNavBar = () => {
    setHiddenNavBar((prev) => !prev);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div
          className="flex items-center justify-center w-10 h-10 bg-Background2 rounded-[8px]"
          onClick={handleHiddenNavBar}
        >
          <Icon name="Menu" size={25} color="#004390" />
        </div>

        <div className="flex items-center gap-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-Background2 rounded-[8px]">
            <Icon name="Bell" size={25} color="#004390" />
          </div>
          <div className="flex h-[52px] w-[100px] bg-XanhMobifone items-center rounded-[30px]">
            <div className="h-[35px] w-[35px] rounded-full bg-[red] ml-2 mr-[17px] ">
              <img
                src={avatarDefault}
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="flex">
              <Icon name="Settings" size={25} color="#fff" />
            </div>
          </div>
        </div>
      </div>

      <NavigationBar
        hiddenNavBar={hiddenNavBar}
        handleHiddenNavBar={handleHiddenNavBar}
      />
    </div>
  );
};

export default Header;
