import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#E7F0F5] py-8 mt-auto">
    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
      <span className="font-medium text-lg md:text-xl">Let's get social</span>
      <div className="flex gap-4">
        <FaFacebookF />
        <BsTwitterX />
        <FaInstagram />
        <FaYoutube />
        <FaLinkedinIn />
      </div>
    </div>
    <ul className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm mt-8">
      <li>Privacy Policy</li>
      <li className="list-disc ms-4">Terms & Conditions</li>
    </ul>
    <p className="text-[#a7afb7] mt-8 text-xs md:text-sm text-center">
      © 2024 Imagine Marketing Limited. All Rights Reserved.
      <br />
      <br />
      For queries contact us: Manager, Imagine Marketing Limited Unit no. 204
      & 205, 2nd floor, D-wing & E-wing,
      <br />
      Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai,
      Maharashtra-400093, India
    </p>
  </footer>
  );
}