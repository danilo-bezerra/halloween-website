import styled from "styled-components";
import { Button as DefaultButton } from "./Button";

type Props = {
  price: number;
  title: string;
  list: string[];
};

export function Card({ price, title, list }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Price>
        <sup>$</sup>
        {price}
      </Price>
      <List>
        {list.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
      <Button>Order Ticket</Button>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border: 3px dashed rgba(255, 255, 255, 0.5);
  border-radius: 4px;

  &:hover {
    box-shadow: -3px 5px 30px 15px rgba(0, 0, 0, 0.2);
    background: rgb(158, 52, 127, 0.5);
    background: linear-gradient(
      180deg,
      #a03581 0%,
      rgba(179, 74, 95, 0.5) 100%
    );
  }
`;

const Title = styled.h4`
  font-size: 18px;
  font-family: "Luckiest Guy", cursive;
  color: #fff;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Price = styled.h3`
  font-size: 100px;
  color: #f2a01b;
  font-family: "Luckiest Guy", cursive;

  sup {
    font-size: 40px;
    margin-right: 0.25rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  list-style-type: "> ";
`;

const ListItem = styled.li`
  font-weight: bold;
  color: rgba(255, 255, 255, 0.67);
  line-height: 2.5;
  font-size: 1.05rem;
`;

const Button = styled(DefaultButton)`
  border: 2px solid #fff;
  background-color: transparent;
`;
