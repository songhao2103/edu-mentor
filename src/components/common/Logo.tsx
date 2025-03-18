import imageLogo from "../../../public/asset/images/logo.png";

interface LogoProps {
  widthImage: string;
}

const Logo: React.FC<LogoProps> = ({ widthImage }) => {
  return (
    <div className="flex items-center justify-center gap-x-4">
      <img
        src={imageLogo}
        alt="logo"
        className="object-cover"
        style={{ width: `${widthImage}px`, height: `${widthImage}px` }}
      />
      <p className="text-logo-big">EduMentor</p>
    </div>
  );
};

export default Logo;
