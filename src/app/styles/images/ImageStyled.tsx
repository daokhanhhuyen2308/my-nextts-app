import { ImageCommonProps } from '@/app/common/ImageCommon';
import styled from '@emotion/styled';

export const ImageStyled = styled.img<Pick<ImageCommonProps, "type">>`
  border-radius: ${(props) => (props.type === "circle" ? "50%" : "5px")};
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

//poster

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ZoomedImageWrapper = styled.div`
  max-width: 80vw;
  max-height: 80vh;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease-in-out;
  }
`;

export { Overlay, ZoomedImageWrapper };
