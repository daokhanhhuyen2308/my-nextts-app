import styled from "@emotion/styled";

export const Backdrop = styled.div<{ image: string }>`
  width: 100%;
  height: 90vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), #000);
  }
`;

export const ContentOverlay = styled.div`
  position: relative;
  padding: 4rem;
  max-width: 1100px;
  z-index: 2;
`;

export const InfoSection = styled.div`
  max-width: 60%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Overview = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

export const TrailerWrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 1300px;
  padding-bottom: 40%;
  margin: 1rem auto 0;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
`;

export const Trailer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const Section = styled.section`
  padding: 2rem 4rem;
  background-color: #111;
  color: white;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const CastList = styled.ul`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
`;

export const Actor = styled.li`
  text-align: center;
  min-width: 100px;
  flex-shrink: 0;
  margin-right: 1rem;
  border-radius: 8px;
  list-style: none;
  cursor: pointer;
`;

export const ActorImage = styled.img`
  width: 100px;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ActorName = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;
