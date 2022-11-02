import { Button } from "../Button";
import { Input } from "../Input";
import { SectionHeading } from "../SectionHeading";
import { Container, Form } from "./styled";

export function SectionNewsletter() {
  return (
    <Container>
      <SectionHeading prefix="Newsletter" title="Subscribe" />
      <Form>
        <Input
          type="email"
          id="email"
          required
          placeholder="Please type your email address..."
        />
        <Button>Subscribe</Button>
      </Form>
    </Container>
  );
}
