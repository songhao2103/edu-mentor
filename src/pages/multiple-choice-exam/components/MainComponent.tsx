import { useCallback, useRef, useState } from "react";
import SubjectList from "../../../components/common/SubjectList";
import { ISubject } from "../../../datas/subjectList";
import Icon from "../../../components/common/Icon";

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
    </div>
  );
};

export default MainComponent;
