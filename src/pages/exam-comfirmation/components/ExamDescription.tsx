//thông tin của đề thi được lấy từ server thông qua id ở params của url

import Icon from "../../../components/common/Icon";
import mathImage from "../../../../public/asset/images/subject-list/math.png";
import certificateIcon from "../../../../public/asset/images/certificateIcon.png";
import ButtonCommon from "../../../components/common/ButtonCommon";

interface IExamDescriptionData {
  id: string;
  title: string;
  quantityQuestion: number;
  completionTime: number;
  subject: string;
  teacherName: string;
  avatarTeacher: string;
}

const examDescriptionData: IExamDescriptionData = {
  id: "1",
  title: "Jo Malone London’s Mother’s Day Presents",
  quantityQuestion: 30,
  completionTime: 45,
  subject: "Toán học",
  teacherName: "Thầy Hào",
  avatarTeacher:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww",
};

const ExamDescription = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[90%] bg-White p-4 rounded-[16px] shadow-xanhMB mb-4">
        <p className="font-semibold text-bv-16 text-Text1">
          {examDescriptionData.title}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-x-[7px] items-center">
            <Icon name="FilePen" color="#4C5665" />
            <p className="font-medium leading-normal text-bv-12 text-Text2">
              {examDescriptionData.quantityQuestion} câu hỏi
            </p>
          </div>
          <div className="w-[2px] h-[20px] bg-[#4C5665]"></div>
          <div className="flex gap-x-[7px] items-center">
            <Icon name="Clock" color="#4C5665" />
            <p className="font-medium leading-normal text-bv-12 text-Text2">
              {examDescriptionData.completionTime} phút để hoàn thành
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex p-[10px] w-auto gap-x-2 border rounded-[10px]">
            <img src={mathImage} alt="" />
            <p>Toán học</p>
          </div>
          <div className="flex items-center gap-x-1">
            <Icon name="Star" color="#FAC025" />
            <p className="font-extrabold text-bv-14 ">4.2</p>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-x-2">
          <p className="font-medium text-bv-14 text-Text1">Giáo viên:</p>
          <img
            src={examDescriptionData.avatarTeacher}
            alt=""
            className="w-[30px] h-[30px] rounded-full object-cover"
          />
          <p className="font-semibold text-bv-16 text-Text">
            {examDescriptionData.teacherName}
          </p>
        </div>
        <p className="mt-4 text-bv-14 text-Text1">
          Bạn cần hoàn thành{" "}
          <span className="font-bold text-bv-16 text-XanhMobifone">20/30</span>{" "}
          câu để vượt qua bài kiểm tra này
        </p>
        <div className="flex items-center justify-center gap-x-2 p-[10px] bg-[#C3E2FF] rounded-[8px] mt-2">
          <img src={certificateIcon} alt="" />
          <p className="text-bv-16 font-semibold leading-[24px] text-White">
            Có chứng chỉ cuối bài thi
          </p>
        </div>
      </div>

      <ButtonCommon
        bgcColor="Xanh-mobifone"
        message="Vào làm bài thi"
        iconName="Play"
        borderRadius="8px"
        iconSize={16}
      />
    </div>
  );
};

export default ExamDescription;
