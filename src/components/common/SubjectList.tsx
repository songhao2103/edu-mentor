import { useEffect, useState, memo } from "react";
import subjectList from "../../datas/subjectList";
import styled from "styled-components";
import { ISubject } from "../../datas/subjectList";

interface ISubjectList {
  updateSubjectSelected: (newSubjectSelecteds: ISubject[]) => void;
}

const SubjectList: React.FC<ISubjectList> = ({ updateSubjectSelected }) => {
  const [currentSubjectList, setCurrentSubjectList] = useState(
    subjectList.map((subject) => ({ ...subject, isActive: false }))
  );

  const handleSelectSubject = (subjectId: string) => {
    const newSubjectList = currentSubjectList.map((subject) =>
      subject.id === subjectId
        ? { ...subject, isActive: !subject.isActive }
        : subject
    );
    setCurrentSubjectList(newSubjectList);
  };

  //cập nhật lên component cha
  useEffect(() => {
    const subjectSelecteds: ISubject[] = currentSubjectList.filter(
      (subject) => subject.isActive
    );
    updateSubjectSelected(subjectSelecteds);
  }, [currentSubjectList]);

  console.log("rerender");
  return (
    <>
      {currentSubjectList.map((subject) => (
        <BoxSubject
          onClick={() => handleSelectSubject(subject.id)}
          $isActive={subject.isActive}
          key={subject.id}
          className="inline-flex gap-x-2 p-[10px] border border-[#D8E0F0] rounded-[10px] flex-shrink-0"
        >
          <img src={subject.image} alt="" />
          <Text $isActive={subject.isActive}>{subject.name}</Text>
        </BoxSubject>
      ))}
    </>
  );
};

export default memo(SubjectList);

const BoxSubject = styled.div<{ $isActive: boolean }>`
  background-color: ${(props) =>
    props.$isActive ? "var(--Xanh-mobifone)" : "var(--White)"};
  box-shadow: ${(props) =>
    props.$isActive
      ? "var(--Shadow-Xanh-mobifone)"
      : "var(--Shadow-subject-light)"};
`;

const Text = styled.div<{ $isActive: boolean }>`
  color: ${(props) => (props.$isActive ? "var(--White)" : "var(--Text-1)")};
`;
