import styled from "styled-components";
import { Section as SCSection } from "../../components/Section";

export const Page = styled.main`
  padding: 20px;
  background-color: "red;";
  & > div {
    max-width: 1300px;
    margin: auto;
    height: 500px;
    border-radius: 0.75rem;
    overflow: hidden;
  }

  section > div {
  }
`;

export const Section = styled(SCSection)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 1300px;
  padding: 70px auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const InfoBox = styled.div`
  display: flex;
  gap: 0.75rem;
  margin: 1.5rem 0;
`;

export const IconBox = styled.div`
  min-width: 2.5rem;
`;

export const TextBox = styled.div`
  flex: 1;
`;

export const Title = styled.p`
  font-size: 22px;
  color: #fff;
  font-family: "Luckiest Guy", cursive; ;
`;

export const Description = styled.p`
  text-transform: uppercase;
  color: #fff9;
  font-weight: bold;
`;
