import LayoutPopup from "./LayoutPopup";
import styled from "styled-components";

interface INotificationProps {
  handleHiddenNotification: (value: boolean) => void;
  hiddenNotification: boolean;
}

//fakedatas
interface INotification {
  title: string;
  desc: string;
  time: string;
  read: boolean;
  image?: string;
  avatar: string;
}
const notifications: INotification[] = [
  {
    title:
      "We’ve just reached out 30k goal raised for charity! We’re so proud of the team! (Tiêu đề",
    image:
      "https://plus.unsplash.com/premium_photo-1707944422438-e094d987feee?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum saepe perferendis debitis delectus aliquam officiis dicta possimus explicabo aspernatur error, quo non tempora accusamus, laboriosam, rem consequuntur maiores neque.",
    time: "8",
    read: false,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title:
      "We’ve just reached out 30k goal raised for charity! We’re so proud of the team! (Tiêu đề",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum saepe perferendis debitis delectus aliquam officiis dicta possimus explicabo aspernatur error, quo non tempora accusamus, laboriosam, rem consequuntur maiores neque.",
    time: "8",
    read: false,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title:
      "We’ve just reached out 30k goal raised for charity! We’re so proud of the team! (Tiêu đề",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum saepe perferendis debitis delectus aliquam officiis dicta possimus explicabo aspernatur error, quo non tempora accusamus, laboriosam, rem consequuntur maiores neque.",
    time: "8",
    read: true,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

//hàm tính toán số lượng thông báo đã đọc
const calculateQuantity = (arr: INotification[]) => {
  return arr.filter((item) => !item.read).length;
};

const Notification: React.FC<INotificationProps> = ({
  handleHiddenNotification,
  hiddenNotification,
}) => {
  return (
    <LayoutPopup
      bgcPopup="transparent"
      hiddenPopup={hiddenNotification}
      handleHiddenPopup={handleHiddenNotification}
    >
      <div className="absolute z-30 p-12 top-[85px] right-[30px] bg-White rounded-[8px] px-6 py-[15px] w-[85vw] shadow-xanhMB">
        <div className="flex items-center justify-between w-[85vw] py-4 shadow-xanhBold translate-x-[-24px] translate-y-[-16px] px-6">
          <div className="flex items-center gap-x-2">
            <p className="text-bv-16 text-Text">Thông báo</p>
            {calculateQuantity(notifications) > 0 && (
              <div>
                {calculateQuantity(notifications) < 10 ? (
                  <p className="inline-flex rounded-full text-bv-14 bg-XanhMobifoneBland w-[30px] h-[30px] justify-center items-center text-White">
                    2
                  </p>
                ) : (
                  <p className="inline-flex rounded-full text-bv-14 bg-XanhMobifoneBland w-[30px] h-[30px] justify-center items-center text-White">
                    9+
                  </p>
                )}
              </div>
            )}
          </div>

          <p className="font-medium text-bv-12 text-XanhMobifoneBland">
            Đánh dấu là đã đọc
          </p>
        </div>

        {notifications.length === 0 ? (
          <p className="text-center text-Text2">Không có thông báo nào</p>
        ) : (
          <div className="overflow-auto h-[70vh] ">
            {notifications.map((notification, index) => (
              <div key={index} className="flex pb-4 my-4 border-b gap-x-3">
                <img
                  src={notification.avatar}
                  alt=""
                  className="flex-shrink-0 object-cover w-8 h-8 rounded-full"
                />
                <div>
                  <p className="mb-3 font-semibold text-bv-12 text-Text">
                    {notification.title}
                  </p>
                  {notification.image && (
                    <img
                      src={notification.image}
                      alt=""
                      className="w-full h-[120px] object-cover rounded-[8px] mb-3"
                    />
                  )}

                  <Desc className="px-3 py-2 mb-3 font-medium leading-4 text-bv-12 text-TextSubtext">
                    {notification.desc}
                  </Desc>
                  <p className="text-bv-12 text-TextSubtext">
                    {notification.time} phút
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className=""></div>
      </div>
    </LayoutPopup>
  );
};

export default Notification;

const Desc = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative;
  height: 58px;

  &::after {
    content: "";
    height: 100%;
    width: 2px;
    background-color: #00adef;
    position: absolute;
    left: 0px;
    top: 5px;
    z-index: 10; /* Đảm bảo nằm trên */
  }
`;
