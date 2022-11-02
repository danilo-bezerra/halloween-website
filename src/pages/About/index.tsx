import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { PhotoGallery } from "../../components/PhotoGallery";
import { Section } from "../../components/Section";
import { SectionHeading } from "../../components/SectionHeading";
import { Text } from "../../components/Text";
import { Page, TextBox } from "./styled";

export function About() {
  return (
    <Page>
      <Section className="two-column">
        <SectionHeading
          title="! Not your Classic Halloween party !"
          prefix="Attention please..."
          textLeft
        />
        <TextBox>
          <h4>Ipsum dolor sit amet, consectetur adipiscing elit</h4>
          <h6>
            Etiam mauris risus, volutpat ac eros accumsan, iaculis lacinia ex.
            Vivamus in ligula risus. Morbi efficitur elit metus
          </h6>
          <div>
            <Text>
              Nunc suscipit risus eu facilisis mattis. Proin mollis varius
              aliquet. Cras eros augue, commodo nec orci sed, tincidunt ultrices
              dolor. Nunc tincidunt est eu orci faucibus, eu sollicitudin enim
              viverra. Phasellus finibus urna non felis posuere, eget
              scelerisque est volutpat. Curabitur eleifend diam in pellentesque
              pulvinar. Proin maximus erat sit amet urna tempor bibendum. Duis
              scelerisque ipsa.
            </Text>
            <Text>
              Nunc suscipit risus eu facilisis mattis. Proin mollis varius
              aliquet. Cras eros augue, commodo nec orci sed, tincidunt ultrices
              dolor. Nunc tincidunt est eu orci faucibus, eu sollicitudin enim
              viverra. Phasellus finibus urna non felis posuere, eget
              scelerisque est volutpat. Curabitur eleifend diam in pellentesque
              pulvinar. Proin maximus erat sit amet urna tempor bibendum. Duis
              scelerisque ipsa.
            </Text>
          </div>
        </TextBox>
      </Section>

      <Section>
        <PhotoGallery />
      </Section>

      <Section>
        <SectionHeading
          title="Come join the <br> party!"
          prefix="Halloween Madness"
        />
      </Section>
    </Page>
  );
}
