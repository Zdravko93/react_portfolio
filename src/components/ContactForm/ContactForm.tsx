import emailjs from "@emailjs/browser";
import { motion, MotionProps } from "framer-motion";
import { useState } from "react";

import sendEmailImg from "../../assets/images/send-email.png";

import Input from "../UI/Input";
import Label from "../UI/Label";
import TextArea from "../UI/TextArea";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Image from "../UI/Image";
import ErrorMessage from "../UI/ErrorMessage";

import { useForm } from "../../customHooks/useForm";
import { validateForm } from "../../utils/validateForm";
import { verifyEmailWithMailboxLayer } from "../../utils/emailValidation";
import { isEmailCached, cacheValidEmail } from "../../utils/emailCache";

import {
  formContainerVariants,
  formChildrenVariants,
  formErrorTextVariants,
} from "../../data/animations/animations";

import toast from "react-hot-toast";
import { useMotionProps } from "../../customHooks/useMotionsProps";

import type { ContactFormValues } from "../../types/form";

// .env variables
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string;

// ARIA error props
const nameErrorProps: React.HTMLAttributes<HTMLDivElement> = {
  id: "name-error",
  role: "alert",
  "aria-live": "polite",
};
const emailErrorProps: React.HTMLAttributes<HTMLDivElement> = {
  id: "email-error",
  role: "alert",
  "aria-live": "polite",
};
const messageErrorProps: React.HTMLAttributes<HTMLDivElement> = {
  id: "message-error",
  role: "alert",
  "aria-live": "polite",
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { values, errors, handleChange, handleSubmit, resetForm } =
    useForm<ContactFormValues>(
      { name: "", email: "", message: "" },
      validateForm,
    );

  const onSubmitSuccess = async (): Promise<void> => {
    setIsSubmitting(true);
    toast.loading("Validating email...");

    const email = values.email.trim();

    if (!isEmailCached(email)) {
      const { success, reason } = await verifyEmailWithMailboxLayer(email);
      if (!success) {
        toast.dismiss();
        toast.error(`Email validation failed: ${reason}`);
        setIsSubmitting(false);
        return;
      }
      cacheValidEmail(email);
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name: values.name, email, message: values.message },
        PUBLIC_KEY,
      );
      toast.dismiss();
      toast.success("Message sent successfully");
      resetForm();
    } catch {
      toast.dismiss();
      toast.error("Failed to send message. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Motion props
  const containerVariants: MotionProps = useMotionProps({
    variants: formContainerVariants,
  });
  const childrenVariants: MotionProps = useMotionProps({
    variants: formChildrenVariants,
  });
  const errorTextMotionProps: MotionProps = useMotionProps({
    variants: formErrorTextVariants,
  });

  // ARIA input props
  const nameAriaProps: React.InputHTMLAttributes<HTMLInputElement> = {
    "aria-invalid": errors.name ? "true" : undefined,
    "aria-describedby": errors.name ? "name-error" : undefined,
    "aria-required": "true",
  };
  const emailAriaProps: React.InputHTMLAttributes<HTMLInputElement> = {
    "aria-invalid": errors.email ? "true" : undefined,
    "aria-describedby": errors.email ? "email-error" : undefined,
    "aria-required": "true",
  };
  const messageAriaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement> = {
    "aria-invalid": errors.message ? "true" : undefined,
    "aria-describedby": errors.message ? "message-error" : undefined,
    "aria-required": "true",
  };

  return (
    <Card<typeof motion.section>
      id="contact"
      as={motion.section}
      {...containerVariants}
      aria-labelledby="contact-heading"
      className="scroll-mt-48"
    >
      <motion.h2
        id="contact-heading"
        {...childrenVariants}
        className="text-xl md:text-2xl font-semibold mb-4 text-cyan-900 dark:text-[#00ff88] text-center"
      >
        Send a Raven
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit(onSubmitSuccess)}
        {...childrenVariants}
        className="max-w-md lg:max-w-xl mx-auto bg-[#ffffff] dark:bg-gray-900 p-6 rounded-lg dark:shadow-cyan-900 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 ring-1 ring-gray-200 dark:border-none dark:ring-0"
        aria-describedby="contact-description"
      >
        <p id="contact-description" className="sr-only">
          Use this form to send a message. All fields are required.
        </p>

        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            {...nameAriaProps}
            value={values.name}
            onChange={handleChange}
          />
          <ErrorMessage
            error={errors.name}
            {...nameErrorProps}
            motionProps={errorTextMotionProps}
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            {...emailAriaProps}
            value={values.email}
            onChange={handleChange}
          />
          <ErrorMessage
            error={errors.email}
            {...emailErrorProps}
            motionProps={errorTextMotionProps}
          />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            rows={5} // fixes TS error
            value={values.message}
            onChange={handleChange}
            {...messageAriaProps}
          />
          <ErrorMessage
            error={errors.message}
            {...messageErrorProps}
            motionProps={errorTextMotionProps}
          />
        </div>

        <Button
          type="submit"
          className="group w-60 flex items-center justify-center gap-2 text-xs lg:text-sm outline outline-1 dark:outline-none bg-[#007acc] hover:bg-blue-500 dark:bg-cyan-500 dark:hover:bg-cyan-600 focus-visible:outline-none focus-visible:outline-blue-500 dark:focus-visible:outline-blue-500 text-white transition-colors px-2 py-3 rounded font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Checking..."
          ) : (
            <>
              <div className="flex items-center w-6 h-6 transform transition-transform duration-200 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1">
                <Image src={sendEmailImg} alt="" aria-hidden="true" />
              </div>
              Send Message
            </>
          )}
        </Button>
      </motion.form>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact",
            description: "Use this form to contact Zdravko directly.",
            url: "https://zdravko93.github.io/react_portfolio/",
            mainEntity: {
              "@type": "ContactForm",
              name: "Send a Raven",
              contactOption: "Email",
              areaServed: "Worldwide",
              availableLanguage: ["English"],
            },
          }),
        }}
      />
    </Card>
  );
}
