import styled from "styled-components";

type ContainerProps = {
  textLeft: boolean;
};

export const Container = styled.div<ContainerProps>`
  max-width: 1200px;
  margin: auto;
  text-align: ${({ textLeft }) => (textLeft ? "left" : "center")};
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Prefix = styled.h3`
  font-size: 42px;
  color: #e7c4de;
  font-family: "Henny Penny", cursive;
  letter-spacing: 2px;
  line-height: 1.2;

  @media (max-width: 1000px) {
    font-size: 5vw;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 5vw;
    margin-bottom: 0.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 100px;
  color: #fff;
  font-family: "Luckiest Guy", cursive;
  letter-spacing: 5px;

  @media (max-width: 1200px) {
    font-size: 8vw;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 15vw;
  }
`;

export const Image = styled.img``;
