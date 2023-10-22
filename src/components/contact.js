import Button from './common/button.js';
import SectionHeading from './common/section-heading.js';
import TextArea from './common/text-area.js';
import TextField from './common/text-field.js';

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex justify-center items-center flex-col gap-16 py-16"
    >
      <SectionHeading label="Contact" />
      <form className="flex justify-center items-center flex-col gap-10 w-1/3">
        <TextField name="name" placeholder="Enter your name*" />
        <TextField name="email" placeholder="Enter your email*" />
        <TextField name="phone" placeholder="Phone number" />
        <TextArea name="message" placeholder="Your message*" />
        <Button label="Submit" />
      </form>
    </section>
  );
}
