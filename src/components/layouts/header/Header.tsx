import { useCallback, useState } from "react";
import avatarDefault from "../../../../public/asset/images/avatarDefault.png";
import Icon from "../../common/Icon.tsx";
import Logout from "../popups/Logout.tsx";
import NavigationBar from "../popups/NavigationBar";
import Notification from "../popups/Notification.tsx";
import OptionsAccount from "../popups/OptionsAccount.tsx";

const Header = () => {
  const [hiddenNavBar, setHiddenNavBar] = useState(false);
  const [hiddenOptionsAccount, setHiddenOptionsAccount] = useState(false);
  const [hiddenNotification, setHiddenNotification] = useState(false);
  const [hiddenLogout, setHiddenLogout] = useState(false);

  const handleHiddenNavBar = () => {
    setHiddenNavBar((prev) => !prev);
  };

  const handleHiddenOptionsAccount = useCallback((value: boolean) => {
    setHiddenOptionsAccount(value);
  }, []);

  const handleHiddenNotification = useCallback((value: boolean) => {
    setHiddenNotification(value);
  }, []);

  const handleHiddenLogout = useCallback((value: boolean) => {
    setHiddenLogout(value);
  }, []);

  return (
    <div className="">
      <div className="fixed h-[88px] w-screen top-0 right-0 bottom-0 z-10 bg-Background3 px-4 py-6">
        <div className="flex items-center justify-between mb-8 ">
          <div
            className="flex items-center justify-center w-10 h-10 bg-Background2 rounded-[8px]"
            onClick={handleHiddenNavBar}
          >
            <Icon name="Menu" size={25} color="#004390" />
          </div>

          <div className="flex items-center gap-x-3">
            <div
              className="flex items-center justify-center w-10 h-10 bg-Background2 rounded-[8px]"
              onClick={() => handleHiddenNotification(true)}
            >
              <Icon name="Bell" size={25} color="#004390" />
            </div>
            <div
              className="flex h-[52px] w-[100px] bg-XanhMobifone items-center rounded-[30px]"
              onClick={() => handleHiddenOptionsAccount(true)}
            >
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
      </div>

      <NavigationBar
        hiddenNavBar={hiddenNavBar}
        handleHiddenNavBar={handleHiddenNavBar}
      />

      <OptionsAccount
        handleHiddenOptionsAccount={handleHiddenOptionsAccount}
        hiddenOptionsAccount={hiddenOptionsAccount}
        handleHiddenLogout={handleHiddenLogout}
      />

      <Notification
        handleHiddenNotification={handleHiddenNotification}
        hiddenNotification={hiddenNotification}
      />

      <Logout
        handleHiddenLogout={handleHiddenLogout}
        hiddenLogout={hiddenLogout}
      />
    </div>
  );
};

export default Header;
