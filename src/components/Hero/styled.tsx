import styled from "styled-components";

type ImageProps = {
  bigImage?: boolean;
};

export const Container = styled.section`
  text-align: center;
`;

export const Title = styled.h1`
  font-family: "Luckiest Guy", cursive;
  font-size: 16rem;
  color: #ffffff;
  line-height: 1.1;

  @media (max-width: 1200px) {
    font-size: 20vw;
  }

  @media (max-width: 900px) {
  }
`;

export const Prefix = styled.h3`
  font-family: "Henny Penny", cursive;
  font-size: 2.5rem;
  color: #c4aebe;

  @media (max-width: 1200px) {
    font-size: 3.5vw;
  }

  @media (max-width: 900px) {
  }
`;

export const Image = styled.img<ImageProps>`
  height: ${({ bigImage }) => (bigImage ? "450px" : "300px")};
  transform: translateY(${({ bigImage }) => (bigImage ? "-30%" : "-50%")});

  @media (max-width: 1200px) {
    height: ${({ bigImage }) => (bigImage ? "35vw" : "24vw")};
  }
`;
