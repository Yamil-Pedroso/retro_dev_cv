import { ContactContainer, Form, FormGroup, Label, Input, Textarea, Button } from "../main-content/styles";
import Header from "../common/header/Header";

const Contact = () => {
  return (
    <ContactContainer>
      <div style={{ display: "flex" }}>
        <Header>Contact</Header>
      </div>

      <Form>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" required />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
