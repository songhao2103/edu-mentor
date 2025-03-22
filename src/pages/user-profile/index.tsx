import FormUserProfile from "./components/FormUserProfile";
import Package from "./components/Package";

const index = () => {
  return (
    <div>
      <p className="mb-4 text-bv-24 text-Text">Thông tin của tôi</p>
      <FormUserProfile />
      <Package />
    </div>
  );
};

export default index;
