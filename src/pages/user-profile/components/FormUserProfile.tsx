import { useFormik } from "formik";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import avatarDefault from "../../../../public/asset//images/avatarDefault.png";
import DataListCustom from "../../../components/common/DataListCustom";
import InputCommon from "../../../components/common/InputCommon";
import ButtonCommon from "../../../components/common/ButtonCommon";

const genderValues = ["Nam", "Nữ", "Khác"];

const FormUserProfile = () => {
  const userInfo = useSelector((state: any) => state.user.userInfo);

  const formik = useFormik({
    initialValues: {
      fullName: userInfo?.fullName || "",
      email: userInfo?.email || "",
      phoneNumber: userInfo?.phoneNumber || "",
      gender: userInfo?.gender || "",
      birthDate: userInfo?.birthDate || "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("Họ và tên là bắt buộc"),
      email: Yup.string()
        .required("Email là bắt buộc")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Email không đúng định dạng"
        ),
      phoneNumber: Yup.string()
        .required("Số điện thoại là bắt buộc")
        .test("is-valid-phone", "Số điện thoại không đúng định dạng", (value) =>
          isValidPhoneNumber(value || "", "VN")
        ),
      gender: Yup.string().required("Chọn giới tính"),
    }),
    onSubmit: (values) => console.log(values),
  });

  const handleSelectGender = useCallback((field: string, data: string) => {
    formik.setFieldValue(field, data);
  }, []);

  return (
    <div>
      <div className="px-[22px] border-b border-TextSubtext pb-6 leading-normal  py-4 bg-White rounded-tl-[14px] rounded-tr-[14px]">
        <div className="w-[76px] h-[76px] rounded-full border-2 p-[2px] bg-White flex items-center justify-center">
          <img
            src={userInfo?.avatar || avatarDefault}
            alt="Avatar"
            className="object-cover w-[64px] h-[64px] rounded-full"
          />
        </div>
        <p className="mt-4 font-bold text-bv-22">
          {userInfo?.displayName || "Song Hào"}
        </p>
      </div>

      <form action="">
        <div className="  py-4 bg-White rounded-rb-[14px] rounded-bl-[14px] px-[22px]">
          <p className="my-4 font-bold text-bv-18">Thông tin cơ bản</p>
          <div className="flex flex-col mb-2 gap-y-4">
            <InputCommon
              type="text"
              label="Họ và tên"
              placeholder="Họ và tên"
              formik={formik}
              name="fullName"
              id="fullName"
            />

            <DataListCustom
              field="gender"
              handleSelect={handleSelectGender}
              valueDefault="Giới tính"
              listDatas={genderValues}
              label="Giới tính"
            />

            <div>
              <p className="block mb-3 font-bold text-bv-14 text-Text1">
                Ngày sinh
              </p>
              <div className="h-[50px] px-[18px] flex items-center border border-TextSubtext rounded-[8px]">
                <input
                  type="date"
                  className="w-full border-none outline-none"
                  id="birthDate"
                  name="birthDate"
                  value={formik.values.birthDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
          </div>

          <p className="mt-6 font-bold text-bv-18">Thông tin liên hệ</p>

          <div className="flex flex-col mt-4 gap-y-4">
            <InputCommon
              type="text"
              label="Email"
              placeholder="email"
              formik={formik}
              name="email"
              id="email"
            />
            <InputCommon
              type="text"
              label="Số điện thoại"
              placeholder="Số điện thoại"
              formik={formik}
              name="phoneNumber"
              id="phoneNumber"
            />
          </div>
        </div>

        <div className="mt-6">
          <ButtonCommon
            bgcColor="#3F8CFF"
            message="Lưu thông tin"
            borderRadius="8px"
          />
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default FormUserProfile;
