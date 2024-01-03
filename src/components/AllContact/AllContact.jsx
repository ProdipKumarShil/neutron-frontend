import { useEffect, useState } from "react"
import SingleCard from "../SingleCard"
import axios from "axios"
import ContactCards from "./ContactCards"

const AllContact = () => {
  

  
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className=" mb-4">
        <h1 className="text-4xl font-bold tracking-tight font-grotesk mt-6 mb-2">
          All Contact
        </h1>
        <p>
          You can edit and delete contacts. Also add contact by clicking 'Add Contact'
          button.{" "}
        </p>
      </div>

      {/* card section */}
      <ContactCards />
    </div>
  )
}

export default AllContact