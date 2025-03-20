import { Link } from "react-router-dom";
import Icon from "../../../components/common/Icon";

interface ITitleSectionProps {
  title: string;
  desc: string;
}

const TitleSection: React.FC<ITitleSectionProps> = ({ title, desc }) => {
  return (
    <>
      <Link to={"/"} className="flex items-center gap-x-1">
        <p className="text-bv-20 text-Text1">{title}</p>
        <Icon name="ChevronRight" />
      </Link>
      <p className="mt-1 text-bv-12 text-Text2">{desc}</p>
    </>
  );
};

export default TitleSection;
