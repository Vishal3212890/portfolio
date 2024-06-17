import Button from "./common/button.js";
import SectionHeading from "./common/section-heading.js";
import TextArea from "./common/text-area.js";
import TextField from "./common/text-field.js";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex justify-center items-center flex-col gap-16 pt-28 pb-16 max-w-7xl mx-auto"
    >
      <SectionHeading label="Contact" />
      <form className="flex justify-center items-center flex-col gap-10 w-full px-10 md:w-1/2">
        <TextField name="name" placeholder="Enter your name*" />
        <TextField name="email" placeholder="Enter your email*" />
        <TextField name="phone" placeholder="Phone number" />
        <TextArea name="message" placeholder="Your message*" />
        <Button>Submit</Button>
      </form>
    </section>
  );
}
