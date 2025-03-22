import { useFormik } from "formik";
import * as Yup from "yup";
import { IFormReduce } from "../../../utils/interface/form";
import InputCommon from "../../../components/common/InputCommon";
import SelectPhoneNumber from "../../../components/common/SelectPhoneNumber";
import { useRef } from "react";
import SubjectList from "../../../components/common/SubjectList";
import { ISubject } from "../../../datas/subjectList";
import ButtonCommon from "../../../components/common/ButtonCommon";

const MainComponent = () => {
  const phoneNumber = useRef<string>();
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [sebjectSelecteds, setSubjectSelecteds] = useState([]);
  const subjectSelecteds = useRef<ISubject[]>([]);

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
    phoneNumber.current = newPhoneNumber;
  };

  //cập nhật lại danh sách môn học được chọn
  const handleUpdateSubjectSelected = (newSubjectSelecteds: ISubject[]) => {
    subjectSelecteds.current = newSubjectSelecteds;
  };

  return (
    <div>
      <div className="px-4 py-6 rounded-[24px] bg-White ">
        <p className="mb-4 text-center text-bv-18 text-Text1">
          Hãy giới thiệu về bạn
        </p>
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

        <div>
          <label
            htmlFor="localPhone"
            className="block mt-6 mb-2 font-bold text-bv-14 text-Text1"
          >
            Số điện thoại
          </label>

          <SelectPhoneNumber
            handleChangePhoneNumber={handleUpdatePhoneNumber}
          />
        </div>

        <p className="mt-6 mb-2 font-bold leading-[24px] text-bv-14 text-Text1">
          Chủ đề bạn muốn ôn luyện
        </p>
        <div className="flex flex-wrap gap-4">
          <SubjectList updateSubjectSelected={handleUpdateSubjectSelected} />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <ButtonCommon
          message="Tiếp theo"
          widthFull={"auto"}
          bgcColor="Xanh-mobifone"
          borderRadius="14px"
          isSubmit={true}
          iconName="ArrowRight"
        />
      </div>
    </div>
  );
};

export default MainComponent;
