import { Container, Prefix, Title } from "./styles";

type Props = {
  title: string;
  prefix?: string;
  image?: string;
  buttonText?: string;
  textLeft?: boolean;
};

export function SectionHeading({
  title,
  buttonText,
  image,
  prefix,
  textLeft = false,
}: Props) {
  return (
    <Container textLeft={textLeft}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <Title dangerouslySetInnerHTML={{ __html: title }} />
    </Container>
  );
}
