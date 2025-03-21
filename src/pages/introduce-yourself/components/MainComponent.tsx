import { useFormik } from "formik";
import * as Yup from "yup";
import { IFormReduce } from "../../../utils/interface/form";
import InputCommon from "../../../components/common/InputCommon";
import SelectPhoneNumber from "../../../components/common/SelectPhoneNumber";
import { useState } from "react";

const MainComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  //dùng formik để tạo form
  const formik = useFormik<IFormReduce>({
    initialValues: {
      fullName: "",
      email: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Họ và tên là bắt buộc"),
      email: Yup.string()
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Email không đúng định dạng"
        )
        .required("Email là bắt buộc"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  //hàm cập nhật số điện thoại
  const handleUpdatePhoneNumber = (newPhoneNumber: string) => {
    setPhoneNumber(newPhoneNumber);
  };

  console.log(phoneNumber);
  return (
    <div>
      <form className="flex flex-col gap-y-6">
        <InputCommon
          type="text"
          formik={formik}
          id="fullName"
          name="fullName"
          placeholder="Họ và tên"
          label="Họ và tên"
        />

        <InputCommon
          type="text"
          formik={formik}
          id="email"
          name="email"
          placeholder="Email"
          label="Email"
        />
      </form>

      <SelectPhoneNumber handleChangePhoneNumber={handleUpdatePhoneNumber} />
    </div>
  );
};

export default MainComponent;
