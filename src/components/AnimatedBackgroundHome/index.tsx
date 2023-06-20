import styled from "styled-components";
import backgroundAnimadoDois from "../../assets/backgroudAnimadoDois.mp4";

const StyledBackgroundVideo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const AnimatedBackgroundDois = () => {
  return (
    <StyledBackgroundVideo>
      <Video autoPlay muted loop>
        <source src={backgroundAnimadoDois} type="video/mp4" />
      </Video>
    </StyledBackgroundVideo>
  );
};

export default AnimatedBackgroundDois;
