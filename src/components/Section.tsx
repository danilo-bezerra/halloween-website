import styled from "styled-components";

export const Section = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 100px 0;

  &.two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;
