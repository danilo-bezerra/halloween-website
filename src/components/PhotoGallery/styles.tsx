import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
`;

export const SquareImage = styled.img`
  display: block;
  aspect-ratio: 1 / 1;
  border-radius: 1rem;
  padding: 0.5rem;
`;

export const SlidesGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  img.h {
    aspect-ratio: 2 / 1;
  }
`;
