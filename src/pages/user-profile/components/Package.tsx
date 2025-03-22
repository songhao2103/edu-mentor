import ButtonCommon from "../../../components/common/ButtonCommon";

const Package = () => {
  return (
    <div className="mt-6">
      <p className="font-semibold leading-normal text-bv-24 text-Text">
        Gói đang sử dụng
      </p>
      <div className="px-4 py-6 mt-6 shadow-xanhBold rounded-[8px]">
        <p className="font-medium text-bv-18 leading-[24px] text-Text">
          Gói đang sử dụng:{" "}
          <span className="text-bv-20 font-bold leading-[24px] text-XanhMobifoneBland">
            Tháng
          </span>
        </p>
        <p className="text-bv-14 leading-[24px] text-Text2">
          Thời hạn gói: 11/01/2025 - 11/02/2025
        </p>
        <p className="mt-2 text-bv-20 font-bold leading-[24px] text-XanhMobifoneBland pb-4 border-b">
          Còn 25 ngày
        </p>
        <p className="ml-[20px] mt-4 text-bv-14 text-Text leading-[24px] before:content-[''] relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-XanhMobifoneBland before:-left-[20px] before:top-2">
          Bạn còn <span className="pb-4 mt-4 font-bold">140 lượt hỏi</span>
        </p>

        <div className="pt-4 mt-4 border-t">
          <ButtonCommon
            message="Nâng gói"
            bgcColor="#3F8CFF"
            borderRadius="8px"
          />
        </div>
      </div>
    </div>
  );
};

export default Package;
