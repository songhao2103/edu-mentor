import { ReactNode, memo } from "react";
import styled from "styled-components";

interface ILayoutPopupProps {
  children: ReactNode;
  hiddenPopup: boolean;
  handleHiddenPopup: (value: boolean) => void;
  bgcPopup?: string; //nhận vào giá trị màu, mặc định màu đen
}

const LayoutPopup: React.FC<ILayoutPopupProps> = ({
  children,
  hiddenPopup,
  handleHiddenPopup,
  bgcPopup,
}) => {
  return (
    <BoxPopup
      $hiddenPopup={hiddenPopup}
      className="fixed top-0 bottom-0 left-0 right-0 z-20"
    >
      <Layout
        $bgcPopup={bgcPopup || "rgba(0,0,0,0.2)"}
        className="fixed top-0 bottom-0 left-0 right-0 bg-slate-50"
        onClick={() => handleHiddenPopup(false)}
      ></Layout>

      <>{children}</>
    </BoxPopup>
  );
};

export default memo(LayoutPopup);

const Layout = styled.div<{ $bgcPopup: string }>`
  background-color: ${(props) => props.$bgcPopup};
`;

const BoxPopup = styled.div<{ $hiddenPopup: boolean }>`
  display: ${(props) => (props.$hiddenPopup ? "block" : "none")};
`;
