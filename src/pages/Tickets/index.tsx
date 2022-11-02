import { CardList } from "../../components/CardList";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Container, Wrapper } from "./styles";

export function Tickets() {
  return (
    <Container>
      <Wrapper>
        <CardList />
      </Wrapper>
    </Container>
  );
}
