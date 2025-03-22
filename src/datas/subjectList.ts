import mathImage from "../../public/asset/images/subject-list/math.png";
import biologyImage from "../../public/asset/images/subject-list/biology.png";
import chemistryImage from "../../public/asset/images/subject-list/chemistry.png";
import civicEducationImage from "../../public/asset/images/subject-list/civic_education.png";
import englishImage from "../../public/asset/images/subject-list/english.png";
import geographyImage from "../../public/asset/images/subject-list/geography.png";
import historyImage from "../../public/asset/images/subject-list/history.png";
import informationTechnologyImage from "../../public/asset/images/subject-list/information_technology.png";
import literatureImage from "../../public/asset/images/subject-list/literature.png";
import physicsImage from "../../public/asset/images/subject-list/physics.png";

export interface ISubject {
  image: string;
  name: string;
  id: string;
  isActive?: boolean;
}

const subjectList = [
  { image: mathImage, name: "Toán học", id: "math" },
  { image: biologyImage, name: "Sinh học", id: "biology" },
  { image: chemistryImage, name: "Hóa học", id: "chemistry" },
  {
    image: civicEducationImage,
    name: "Giáo dục công dân",
    id: "civic-education",
  },
  { image: englishImage, name: "Tiếng Anh", id: "english" },
  { image: geographyImage, name: "Địa lý", id: "geography" },
  { image: historyImage, name: "Lịc sử", id: "history" },
  {
    image: informationTechnologyImage,
    name: "Tin học",
    id: "information-technology",
  },
  { image: literatureImage, name: "Văn học", id: "literature" },
  { image: physicsImage, name: "Vật lý", id: "physics" },
];

export default subjectList;
