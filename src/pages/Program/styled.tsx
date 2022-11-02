import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  margin: auto;
  background-color: #a13582;
  padding-bottom: 400px;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
`;

export const Box = styled.div`
  display: flex;
  padding: 70px;
  border: 3px dashed #fff5;
  border-collapse: collapse;

  @media (max-width: 1200px) {
    padding: 50px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1.5rem;

    /* align-items: flex-end; */

    &:nth-child(odd) {
      align-items: flex-end;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    padding: 20px;

    border-width: 0;
    border-bottom-width: 3px;
    &:nth-child(odd) {
      align-items: center;
    }
  }

  &:nth-child(even) {
    transform: translateY(50%);

    @media (max-width: 768px) {
      transform: translateY(0);
    }
  }

  &:nth-child(odd) {
    text-align: right;
  }

  @media (min-width: 768px) {
    &:nth-child(1) {
      border: none;
    }

    &:nth-child(2) {
      border-top: none;
      border-right: none;
    }

    &:nth-child(3) {
      border-left: none;
      border-right: none;
    }

    &:nth-child(4) {
      border-top: none;
      border-bottom: none;
      border-right: none;
    }
  }

  div {
    flex: 1;
    h4 {
      font-family: "Luckiest Guy", cursive;
      font-size: 2.5rem;
      color: #fff;
      letter-spacing: 3px;
      line-height: 1.5;
    }

    p {
      color: #fffa;
      font-weight: bold;
      line-height: 1.75;
    }

    @media (max-width: 1000px) {
      order: 2;
    }

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

export const BoxImage = styled.img`
  flex-shrink: 0;
  max-width: 150px;
  max-height: 150px;
  @media (max-width: 1200px) {
    /* width: 25vw;
    height: 25vw; */
  }

  @media (max-width: 1000px) {
    &:nth-child(even) {
      /* background-color: red;
      padding-left: 100%; */
    }
  }

  @media (max-width: 768px) {
  }
`;
