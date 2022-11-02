import styled from "styled-components";

export const Page = styled.main`
  padding: 0 20px;
  .two-column {
    h3 {
      color: #fff;
    }

    h2 {
      color: #f2a01b;

      @media (max-width: 768px) {
        font-size: 12vw;
      }
    }
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0;
  }

  h4,
  h6 {
    color: #fff;
    font-family: "Luckiest Guy", cursive;
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
  }

  h4 {
    font-size: 2.5rem;

    @media (max-width: 768px) {
      font-size: 5vw;
    }
  }

  h6 {
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 3vw;
    }
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
  }
`;
