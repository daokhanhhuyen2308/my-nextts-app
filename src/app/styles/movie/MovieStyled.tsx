import styled from "@emotion/styled";

export const SectionWrapper = styled.section`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  color: #fff;
  padding-left: 16px;
  font-size: 24px;
  margin-bottom: 12px;
`;

export const CardWrapper = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 165px;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1024px) {
    width: 160px;
    height: 240px;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 210px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 180px;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover img {
    filter: brightness(60%);
  }

  &:hover div {
    opacity: 1;
  }

  &:hover .play-icon {
    opacity: 1;
    color: #ccc
    transform: translate(-50%, -50%) scale(1.2);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;

export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10px;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const MovieTitle = styled.h3`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
  line-height: 1.2;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
  color: #facc15;
  font-size: 13px;
  margin-top: 4px;
  gap: 4px;

  .star-icon {
    color: #facc15;
    font-size: 14px;
  }
`;

export const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(1);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  pointer-events: none;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;


export const WatchButton = styled.button`
  margin-top: 8px;
  padding: 4px 8px;
  inset: 0;
  font-size: 14px;
  background-color: #ef4444;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: #fff;
  transition: background-color 0.3s ease;
  margin-left: 8px;
  width: 100%;
  max-width: 100px;

  &:hover {
    background-color: #dc2626;
  }
`;


export const FavoriteButton = styled.button<{ isFavorite?: boolean }>`
  margin-top: 8px;
  padding: 4px 8px;
  font-size: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.isFavorite ? "#ef4444" : "#fff")};
  transition: color 0.3s ease;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;

  &:hover {
    color: #ef4444;
  }

  svg {
    font-size: 18px;
  }
`;