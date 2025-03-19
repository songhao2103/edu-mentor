import { useNavigate } from "react-router-dom";
import ButtonCommon from "../../../components/common/ButtonCommon";

const Buttons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-x-3">
      <ButtonCommon
        bgcColor="White"
        message="Quay lại"
        borderRadius="480px"
        onclick={() => navigate("/login")}
      />

      <ButtonCommon
        bgcColor="Xanh-mobifone"
        message="Gửi"
        borderRadius="480px"
      />
    </div>
  );
};

export default Buttons;
