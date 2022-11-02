import styled from "styled-components";
import BackgroundImage from "../../assets/hero-02.jpg";

export const Header = styled.header`
  position: relative;
  padding: 2.5rem 1rem;
  background: rgb(82, 16, 64, 0.8);
  background: linear-gradient(
    180deg,
    rgba(82, 16, 64, 0.8) 0%,
    rgba(161, 53, 130, 1) 100%
  );

  & > div {
    @media (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const Logo = styled.img`
  display: block;
  margin: auto;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-image: url("${BackgroundImage}");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;
