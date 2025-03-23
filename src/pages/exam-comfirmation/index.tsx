import imageExam from "../../../public/asset/images/image_exam.png";
import ExamDescription from "./components/ExamDescription";
const index = () => {
  return (
    <div>
      <img
        src={imageExam}
        alt=""
        className="h-[300px] bg-center bg-no-repeat bg-cover "
      />

      <div className="relative">
        <div className="absolute -top-[40px]">
          <ExamDescription />
        </div>
      </div>
    </div>
  );
};

export default index;
