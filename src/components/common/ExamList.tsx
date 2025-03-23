import { Link } from "react-router-dom";
import { IMultipleChoiceExam } from "../../utils/interface/Exam";

interface IExamListProps {
  examList: IMultipleChoiceExam[];
}

const ExamList: React.FC<IExamListProps> = ({ examList }) => {
  return (
    <>
      {examList.length === 0 && <p>Không có đề thi nào</p>}

      {examList.length > 0 && (
        <div className="flex flex-col gap-y-3">
          {examList.map((exam) => (
            <div
              key={exam.id}
              className="flex p-2 rounded-[16px] bg-White gap-x-4"
            >
              <img
                src={exam.image}
                alt=""
                className="w-[108px] h-[104px] object-cover rounded-[8px]"
              />
              <div className="flex flex-col ">
                <p className="font-semibold text-bv-14 text-Text">
                  {exam.title}
                </p>
                <p className="text-bv-12 text-TextSubtext">
                  Đề thi gồm {exam.quantityQuestions} câu
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <Link
                    to="#"
                    className="flex items-center justify-center text-bv-10 text-XanhMobifone leading-[26px] w-[50px] h-[20px] rounded-[4px] bg-[#C3E2FF80]"
                  >
                    Ôn ngay
                  </Link>
                  <div className="flex items-center gap-x-1">
                    <img
                      src={exam.avatarTeacher}
                      alt=""
                      className="h-[20px] w-[20px] rounded-full object-cover"
                    />
                    <p className="font-medium text-bv-12 text-Text1">
                      {exam.teacherName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ExamList;
