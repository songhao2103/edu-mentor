import { useCallback, useRef, useState } from "react";
import SubjectList from "../../../components/common/SubjectList";
import { ISubject } from "../../../datas/subjectList";
import Icon from "../../../components/common/Icon";
import { IMultipleChoiceExam } from "../../../utils/interface/Exam";
import ExamList from "../../../components/common/ExamList";

const multipleChoiceExamList: IMultipleChoiceExam[] = [
  {
    title: "Jo Malone London’s Mother’s Day Presents",
    id: "1",
    quantityQuestions: 30,
    avatarTeacher:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww",
    teacherName: "Thầy Hào",
    image:
      "https://plus.unsplash.com/premium_photo-1672256330854-98c717493128?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Jo Malone London’s Mother’s Day Presents",
    quantityQuestions: 30,
    avatarTeacher:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww",
    teacherName: "Thầy Hào",
    image:
      "https://plus.unsplash.com/premium_photo-1672256330854-98c717493128?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "Jo Malone London’s Mother’s Day Presents",
    quantityQuestions: 30,
    avatarTeacher:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww",
    teacherName: "Thầy Hào",
    image:
      "https://plus.unsplash.com/premium_photo-1672256330854-98c717493128?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "Jo Malone London’s Mother’s Day Presents",
    quantityQuestions: 30,
    avatarTeacher:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww",
    teacherName: "Thầy Hào",
    image:
      "https://plus.unsplash.com/premium_photo-1672256330854-98c717493128?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    title: "Jo Malone London’s Mother’s Day Presents",
    quantityQuestions: 30,
    avatarTeacher:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww",
    teacherName: "Thầy Hào",
    image:
      "https://plus.unsplash.com/premium_photo-1672256330854-98c717493128?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const MainComponent = () => {
  const subjectSelecteds = useRef<ISubject[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const handleUpdateSubjectSelected = useCallback(
    (newSubjectSelecteds: ISubject[]) => {
      subjectSelecteds.current = newSubjectSelecteds;
      console.log(subjectSelecteds.current);
    },
    []
  );

  return (
    <div>
      <div className="flex w-screen mt-4 overflow-x-auto gap-x-3 hide-scrollbar pr-[48px]">
        <SubjectList updateSubjectSelected={handleUpdateSubjectSelected} />
      </div>

      <div className="flex items-center justify-between mt-4 h-[50px] py-[14px] pl-4 pr-2 border rounded-[12px] bg-White">
        <Icon name="Search" color="#004390" size={18} />
        <input
          type="text"
          placeholder="Tìm đề thi"
          className="pl-2 outline-none w-[82%]"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="w-8 h-8 rounded-[12px] bg-[#C3E2FF] flex items-center justify-center">
          <Icon name="SlidersHorizontal" color="#004390" size={18} />
        </div>
      </div>

      <div className="mt-6">
        <ExamList examList={multipleChoiceExamList} />
      </div>
    </div>
  );
};

export default MainComponent;
