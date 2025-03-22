import DataListCustom from "./DataListCustom";
import * as Yup from "yup";
import phoneCodes from "../../datas/codePhonesOfCountries";
import { useEffect, useRef } from "react";
import { useFormik } from "formik";
import { isValidPhoneNumber } from "libphonenumber-js";
import InputCommon from "./InputCommon";

interface ISelectPhoneNumberProps {
  handleChangePhoneNumber: (newPhoneNumber: string) => void;
  phoneNumberDefault?: string;
}

const SelectPhoneNumber: React.FC<ISelectPhoneNumberProps> = ({
  handleChangePhoneNumber,
  phoneNumberDefault,
}) => {
  const phoneCode = useRef<{ phoneCode: string }>({
    phoneCode: "",
  });

  const formik = useFormik({
    initialValues: {
      localPhone: phoneNumberDefault || "",
    },

    validationSchema: Yup.object({
      localPhone: Yup.string()
        .test("is-valid-phone", "Số điện thoại không đúng định dạng", (value) =>
          isValidPhoneNumber(phoneCode.current.phoneCode + value || "", "VN")
        )
        .required("Số điện thoại là bắt buộc"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  //cập nhật lại phoneNumber ở component cha
  useEffect(() => {
    handleChangePhoneNumber(
      phoneCode.current.phoneCode + formik.values.localPhone
    );
  }, [formik.values, phoneCode]);

  const handleChangePhoneCode = (field: string, value: string) => {
    phoneCode.current = { ...phoneCode.current, [field]: value };
  };

  return (
    <div className="flex gap-x-3">
      <div className="w-[35%]">
        <DataListCustom
          field="phoneCode"
          listDatas={phoneCodes}
          handleSelect={handleChangePhoneCode}
        />
      </div>
      <div className="w-full">
        <InputCommon
          type="text"
          formik={formik}
          id="localPhone"
          name="localPhone"
          placeholder="Số điện thoại"
        />
      </div>
    </div>
  );
};

export default SelectPhoneNumber;
