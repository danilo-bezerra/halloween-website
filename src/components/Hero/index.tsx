import { Container, Image, Prefix, Title } from "./styled";
import HeroImage from "../../assets/hero_01.png";

type Props = {
  title: string;
  prefix: string;
  bigImage?: boolean;
};

export function Hero({ title, prefix, bigImage }: Props) {
  return (
    <Container>
      <Prefix>{prefix}</Prefix>
      <Title>{title}</Title>
      <Image src={HeroImage} bigImage={bigImage} />
    </Container>
  );
}
