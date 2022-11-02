import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";

import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
//

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  Page,
  Section,
  Form,
  InfoBox,
  IconBox,
  TextBox,
  Title,
  Description,
} from "./styled";
import { TextArea } from "../../components/TextArea";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { Heading6 } from "../../components/Heading6";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

export function Contact() {
  return (
    <Page>
      <Section>
        <div>
          <Heading6>Party location</Heading6>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper.
          </Text>

          <InfoBox>
            <IconBox>
              <AiOutlinePhone color="#f2a01b" size="36" />
            </IconBox>
            <TextBox>
              <Title>929-242-6868</Title>
              <Description>PHONE NUMBER</Description>
            </TextBox>
          </InfoBox>
          <InfoBox>
            <IconBox>
              <AiOutlineMail color="#f2a01b" size="36" />
            </IconBox>
            <TextBox>
              <Title>contact@info.com</Title>
              <Description>EMAIL ADDRESS</Description>
            </TextBox>
          </InfoBox>
          <InfoBox>
            <IconBox>
              <BiMap color="#f2a01b" size="36" />
            </IconBox>
            <TextBox>
              <Title>2415 Gordon St, New Orleans LA 70123</Title>
              <Description>LOCATION</Description>
            </TextBox>
          </InfoBox>
        </div>
        <div>
          <Form>
            <div className="two-column">
              <div>
                <Label>Name</Label>
                <Input placeholder="First" />
              </div>
              <div>
                <Label>&nbsp;</Label>
                <Input placeholder="Last" />
              </div>
            </div>
            <div>
              <Label>E-mail</Label>
              <Input placeholder="ex: mr.alien@email.com" />
            </div>
            <div>
              <Label>Message</Label>
              <TextArea />
            </div>
            <Button>Send</Button>
          </Form>
        </div>
      </Section>

      <MapContainer
        center={[-7.22956, -39.4088]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-7.22956, -39.4088]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Page>
  );
}
