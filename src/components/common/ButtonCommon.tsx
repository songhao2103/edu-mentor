import styled from "styled-components";

interface IButtonCommonProps {
  widthFull: boolean;
  bgcColor: string;
  message: string;
  iconSrc?: string;
  borderRadius?: string;
  textSize?: string;
  reverse?: boolean;
  isSubmit?: boolean;
  onclick?: () => void;
}

const ButtonCommon: React.FC<IButtonCommonProps> = ({
  widthFull,
  bgcColor,
  message,
  iconSrc,
  borderRadius,
  textSize,
  reverse,
  isSubmit,
  onclick,
}) => {
  return (
    <Button
      className="flex items-center justify-center h-12 px-6 gap-x-2"
      $bgcColor={bgcColor}
      $width={widthFull}
      $brdr={borderRadius || "16px"}
      $reverse={reverse && iconSrc ? true : false}
      $border={bgcColor === "White"}
      type={isSubmit ? "submit" : "button"}
      onClick={onclick}
    >
      <Text
        $textSize={textSize}
        $textColor={bgcColor === "White" ? "Text-1" : "White"}
      >
        {message}
      </Text>
      {iconSrc && <img src={iconSrc} />}
    </Button>
  );
};

export default ButtonCommon;

//styled Button
const Button = styled.button<{
  $bgcColor: string;
  $width: boolean;
  $brdr: string;
  $reverse: boolean;
  $border: boolean;
}>`
  background-color: ${(props) =>
    props.$bgcColor === "Xanh-mobifone"
      ? "var(--Xanh-mobifone)"
      : props.$bgcColor === "White"
      ? "var(--White)"
      : props.$bgcColor};
  width: ${(props) => (props.$width ? "100%" : "auto")};
  border-radius: ${(props) => props.$brdr};
  flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "none")};
  border: ${(props) => (props.$border ? "1px solid  #E3E8EF" : "none")};
`;

//styled Text
const Text = styled.p<{ $textSize?: string; $textColor: string }>`
  font-size: ${(props) => props.$textSize || "16px"};
  color: ${(props) => `var(--${props.$textColor})`};
  font-weight: 600;
`;
