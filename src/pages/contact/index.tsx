import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="pt-4 md:mx-0">
      <div className="py-3 text-white bg-primary800">
        <h1 className="text-2xl text-center uppercase">Get in touch with us</h1>
      </div>

      <h1 className="my-8 text-center capitalize text-lx">give us a call</h1>
      <div className="flex items-center justify-center gap-4">
        <div className="px-3 py-3 rounded-full bg-primary800">
          <FaPhone className="text-2xl text-white" />
        </div>
        <h4>09029149167</h4>
      </div>
      <h4 className="mt-4 text-center">
        Gidyson Plaza, Beside Federal Polytechnic <br /> Jalingo, Taraba State
      </h4>
      <h1 className="mt-4 text-2xl text-center">Follow us</h1>
      <div className="flex justify-center gap-4 mt-4 text-2xl">
        <FaFacebook className="text-blue-500" />
        <FaInstagram className="text-red-500" />
        <FaTwitter className="text-blue-500" />
        <FaYoutube className="text-red-600" />
      </div>
    </div>
  );
};

export default ContactPage;
