"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Contact Information
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 76 8989 412",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "lithuvithu1109@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description:
      "No:217, Vairavapuliyankulam, Railway Station Rd , vavuniya(43000)",
  },
];

const Page = () => {
  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      service: e.target.service.value,
      message: e.target.message.value,
    };

    try {
      // Send data to API endpoint
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        e.target.reset(); // Reset the form
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/** Form Section */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Please fill out the form below, and I’ll get back to you as soon
                as possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstName" type="text" placeholder="Firstname" required />
                <Input name="lastName" type="text" placeholder="Lastname" required />
                <Input name="email" type="email" placeholder="Email address" required />
                <Input name="phone" type="tel" placeholder="Phone number" required />
              </div>

              {/** Select Dropdown */}
              <Select name="service" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Mobile Development">Desktop Application Development</SelectItem>
                    <SelectItem value="UI/UX Design">Mobile Development</SelectItem>
                    <SelectItem value="Logo Design">Blog Writing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/** Textarea */}
              <Textarea
                name="message"
                className="h-[180px]"
                placeholder="Type your message here"
                required
              />

              {/** Button */}
              <Button size="md" type="submit" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>

          {/** Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
