import styled from "styled-components";
import { Text } from "../../components/Text";

export const Container = styled.main``;

export const Wrapper = styled.div`
  background-color: #a13582;
`;

export const Section = styled.section`
  max-width: 1300px;
  margin: auto;
  padding: 70px 20px;
`;

export const SectionAbout = styled(Section)`
  text-align: center;

  p {
    max-width: 768px;
  }

  button {
    margin-top: 1.5rem;
    display: block;
    margin: 1.5rem auto;
  }
`;

export const Heading6 = styled.h6`
  font-size: 20px;
  line-height: 2;
  color: #f2a01b;
  font-family: "Luckiest Guy", cursive;
`;

export const Address = styled.address`
  color: #fff;
  font-family: "Luckiest Guy", cursive;
  margin-bottom: 2rem;
`;

export const CardGrid = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 5rem;

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  flex: 1;
  padding: 56px 16px;
  background: rgb(201, 106, 79, 0.75);
  background: linear-gradient(
    180deg,
    rgba(201, 106, 79, 0.75) 0%,
    rgba(161, 53, 129, 0.75) 74%
  );
  box-shadow: 0px 10px 26px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  transition: 0.5s all;

  @media (max-width: 1000px) {
    max-width: 400px;
    justify-self: center;
  }

  &:hover {
    background: rgb(201, 106, 79);
    background: linear-gradient(
      180deg,
      rgba(201, 106, 79, 1) 0%,
      rgba(161, 53, 129, 1) 74%
    );
  }
`;

export const CardImage = styled.img``;

export const CardTitle = styled.h5`
  color: #fff;
  font-size: 2rem;
  font-family: "Luckiest Guy", cursive;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

export const CardDescription = styled(Text)``;
