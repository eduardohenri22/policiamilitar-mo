import styled from "styled-components";
import backgroundAnimado from "../../assets/backgroudAnimado.mp4";

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

const AnimatedBackground = () => {
  return (
    <StyledBackgroundVideo>
      <Video autoPlay muted loop>
        <source src={backgroundAnimado} type="video/mp4" />
      </Video>
    </StyledBackgroundVideo>
  );
};

export default AnimatedBackground;
