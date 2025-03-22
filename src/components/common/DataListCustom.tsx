import { useState, memo } from "react";
import Icon from "./Icon";
import styled from "styled-components";

interface IDataListCustomProps {
  field: string; //field của giá trị dataList được tạo ở component cha
  listDatas: string[];
  handleSelect: (field: string, value: string) => void; //hàm để cập nhật giá trị được chọn ở component cha
  valueDefault?: string; //Giá trị ban đầu của dataList
  label?: string;
}

const DataListCustom: React.FC<IDataListCustomProps> = ({
  field,
  listDatas,
  handleSelect,
  valueDefault,
  label,
}) => {
  const [valueSelected, setValueSelected] = useState(
    valueDefault || listDatas[0]
  );
  const [hiddenList, setHiddenList] = useState(false);

  //hàm xử lý bật tắt listData
  const handleHiddenListData = (value: boolean) => {
    setHiddenList(value);
  };

  //hàm xử lý khi người dùng chọn
  const handleSelectData = (data: string) => {
    //cập nhật state
    setValueSelected(data);

    //cập nhật ở component cha
    handleSelect(field, data);

    //ẩn data list
    handleHiddenListData(false);
  };

  return (
    <div className="relative">
      {label && <p className="mb-3 font-bold text-bv-14 text-Text1">{label}</p>}
      <div
        className="flex items-center justify-between h-[50px] px-4 border border-Text1 rounded-[8px] bg-White"
        onClick={() => handleHiddenListData(true)}
      >
        <p className="text-bv-14 text-Text1 ">{valueSelected}</p>
        <BoxIcon $hiddenList={hiddenList} className="flex">
          <Icon name="ChevronDown" />
        </BoxIcon>
      </div>
      {hiddenList && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-10"
          onClick={() => handleHiddenListData(false)}
        ></div>
      )}
      <ListData
        $hiddenList={hiddenList}
        className="absolute flex flex-col items-center w-full z-30 bg-White rounded-[8px] border max-h-[200px]"
      >
        {listDatas.map((data, index) => (
          <p
            key={index}
            className="w-full py-1 text-center border-b"
            onClick={() => handleSelectData(data)}
          >
            {data}
          </p>
        ))}
      </ListData>
    </div>
  );
};

export default memo(DataListCustom);

const BoxIcon = styled.div<{ $hiddenList: boolean }>`
  transform: rotate(${(props) => (props.$hiddenList ? "180deg" : "0deg")});
  transition: 0.3s;
`;

const ListData = styled.div<{ $hiddenList: boolean }>`
  max-height: ${(props) => (props.$hiddenList ? "200px" : "0px")};
  padding: ${(props) => (props.$hiddenList ? "8px 15px 8px 8px" : "0px")};
  border: ${(props) =>
    props.$hiddenList ? "1px solid var(--Text-1)" : "none"};
  transition: 0.3s;
  overflow: ${(props) => (props.$hiddenList ? "auto" : "hidden")};
`;
