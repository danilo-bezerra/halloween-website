import { Button } from "../../components/Button";
import { CardList } from "../../components/CardList";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { PhotoGallery } from "../../components/PhotoGallery";
import { SectionHeading } from "../../components/SectionHeading";
import { SectionNewsletter } from "../../components/SectionNewsletter";
import { Text } from "../../components/Text";
import {
  CardDescription,
  Address,
  Card,
  CardGrid,
  CardTitle,
  Container,
  Heading6,
  SectionAbout,
  Wrapper,
  CardImage,
  Section,
} from "./styled";

import Image1 from "../../assets/icon-01.png";
import Image2 from "../../assets/icon-02.png";
import Image3 from "../../assets/icon-03.png";
import Image4 from "../../assets/icon-04.png";

export function Home() {
  return (
    <Container>
      <Wrapper>
        <SectionAbout>
          <SectionHeading title="About" />
          <Heading6>Party Location</Heading6>
          <Address>2415 Gordon St, New Orleans LA 70123</Address>
          <Text>
            Suspendisse potenti. Vivamus vitae condimentum risus. Aliquam
            efficitur lobortis erat, sed sagittis augue bibendum sed. Vivamus at
            tristique velit. Phasellus ornare bibendum ligula a eleifend. Nunc
            ullamcorper, velit vel fringilla tempor, nibh augue scelerisque ex,
            dapibus elementum.
          </Text>
          <Button>Read More</Button>

          <CardGrid>
            <Card>
              <CardImage src={Image1} />
              <CardTitle>Flair Cocktails</CardTitle>
              <CardDescription>
                Proin augue massa, pharetra sed mauris ut, vestibulum dictum
                magna nulla condimentum odio
              </CardDescription>
            </Card>
            <Card>
              <CardImage src={Image2} />
              <CardTitle>Haloween Treats</CardTitle>
              <CardDescription>
                Proin augue massa, pharetra sed mauris ut, vestibulum dictum
                magna nulla condimentum odio
              </CardDescription>
            </Card>
            <Card>
              <CardImage src={Image3} />
              <CardTitle>Ghost Dance</CardTitle>
              <CardDescription>
                Proin augue massa, pharetra sed mauris ut, vestibulum dictum
                magna nulla condimentum odio
              </CardDescription>
            </Card>
            <Card>
              <CardImage src={Image4} />
              <CardTitle>Scary Activities</CardTitle>
              <CardDescription>
                Proin augue massa, pharetra sed mauris ut, vestibulum dictum
                magna nulla condimentum odio
              </CardDescription>
            </Card>
          </CardGrid>
        </SectionAbout>

        <Section>
          <SectionHeading prefix="Our photo" title="Gallery" />
          <PhotoGallery />
        </Section>

        <Section>
          <SectionHeading prefix="Get your" title="Tickets" />
          <CardList />
        </Section>

        <SectionNewsletter />
      </Wrapper>
    </Container>
  );
}
