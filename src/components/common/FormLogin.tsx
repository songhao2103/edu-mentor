import { useFormik } from "formik";
import * as Yup from "yup";
import { IFormRegister } from "../../utils/interface/form.ts";
import InputCommon from "./InputCommon.tsx";
import ButtonCommon from "./ButtonCommon.tsx";

const FormLogin = () => {
  const formik = useFormik<IFormRegister>({
    initialValues: {
      nameAccount: "",
      password: "",
    },
    validationSchema: Yup.object({
      nameAccount: Yup.string().required("Thông tin tài khoản là bắt buộc"),
      password: Yup.string()
        .min(8, "Mật khẩu phải có 8 ký tự trở lên")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt"
        )
        .required("Mật khẩu là bắt buộc"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className="flex flex-col gap-y-2">
      <InputCommon
        type="text"
        formik={formik}
        id="nameAccount"
        name="nameAccount"
        placeholder="Nhập thông tin tài khoản"
        iconName="CircleUser"
      />
      <InputCommon
        type="password"
        formik={formik}
        id="password"
        name="password"
        placeholder="Nhập mật khẩu"
        iconName="KeyRound"
      />

      <div className="mt-2">
        <ButtonCommon
          message="Đăng nhập"
          bgcColor="Xanh-mobifone"
          borderRadius="14px"
          isSubmit={true}
        />
      </div>
    </form>
  );
};

export default FormLogin;
