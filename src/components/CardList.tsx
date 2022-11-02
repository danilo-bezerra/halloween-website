import styled from "styled-components";
import { Card } from "./Card";

const cards = [
  {
    title: "Single  Entry",
    price: 45,
    list: [
      "Lorem ipsum dolor sit amet",
      "Adipiscing elit praesent iaculis",
      "Vestibulum nec odio",
      "Duis eu urna non diam molestie",
      "Mattis ligula non, posuere",
    ],
  },
  {
    title: "Couple Entry",
    price: 75,
    list: [
      "Lorem ipsum dolor sit amet",
      "Adipiscing elit praesent iaculis",
      "Vestibulum nec odio",
      "Duis eu urna non diam molestie",
      "Mattis ligula non, posuere",
    ],
  },
  {
    title: "Family  Entry",
    price: 95,
    list: [
      "Lorem ipsum dolor sit amet",
      "Adipiscing elit praesent iaculis",
      "Vestibulum nec odio",
      "Duis eu urna non diam molestie",
      "Mattis ligula non, posuere",
    ],
  },
];

export function CardList() {
  return (
    <SCCardList>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          price={card.price}
          list={card.list}
        />
      ))}
    </SCCardList>
  );
}

const SCCardList = styled.div`
  display: flex;
  gap: 1.5rem;
  max-width: 1200px;
  margin: auto;
  padding: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
