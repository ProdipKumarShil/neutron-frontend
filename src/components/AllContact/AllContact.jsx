import { useEffect, useRef, useState } from "react";
import SingleCard from "../SingleCard";
import axios from "axios";
import ContactCards from "./ContactCards";
import SplitType from "split-type";
import gsap from "gsap";

const AllContact = () => {
  const textRef = useRef(null);
  const paraRef = useRef(null)

  useEffect(() => {
    const splitText = new SplitType(textRef.current)
    gsap.from(splitText.chars, {
      duration: 0.5,
      opacity: 0.5,
      stagger: 0.05,
      yPercent: 130,
      ease: 'back.out'
    })
  }, [])

  useEffect(() => {
    const paragraph = new SplitType(paraRef.current)
    gsap.from(paragraph.chars, {
      duration: 0.5,
      opacity: 0,
      stagger: 0.02,
      x: 130,
      ease: 'power1'
    })
  }, [])

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className=" mb-4">
        <div ref={textRef} className="overflow-hidden">
          <h1 className="text-4xl font-bold tracking-tight font-grotesk mt-6 mb-2">
            All Contact
          </h1>
        </div>
        <div ref={paraRef} className="">
        <p>
          You can edit and delete contacts. Also add contact by clicking 'Add
          Contact' button.{" "}
        </p>
        </div>
      </div>

      {/* card section */}
      <ContactCards />
    </div>
  );
};

export default AllContact;
