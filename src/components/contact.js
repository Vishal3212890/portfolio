import { useState } from "react";
import Button from "./common/button.js";
import SectionHeading from "./common/section-heading.js";
import TextArea from "./common/text-area.js";
import TextField from "./common/text-field.js";
import Spinner from "./common/spinner.js";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const data = { ...formData, [event.target.name]: event.target.value };
    setFormData(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);

      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex justify-center items-center flex-col gap-16 pt-28 pb-16 max-w-7xl mx-auto"
    >
      <SectionHeading label="Contact" />
      <form
        className="flex justify-center items-center flex-col gap-10 w-full px-8 md:w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <TextField
          name="name"
          placeholder="Enter your name*"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          name="email"
          placeholder="Enter your email*"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          name="phone"
          placeholder="Phone number"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          placeholder="Your message*"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Spinner /> : "Submit"}
        </Button>
      </form>
    </section>
  );
}
