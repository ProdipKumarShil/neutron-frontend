import { useEffect, useState } from "react"
import SingleCard from "../SingleCard"
import axios from "axios"
import ContactCards from "./ContactCards"

const AllContact = () => {
  

  
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="">
        <h1 className="text-4xl font-bold tracking-tight font-grotesk mt-6 mb-2">
          Search Contact
        </h1>
        <p>
          You can search contacts. Also add contact by clicking 'Add Contact'
          button.{" "}
        </p>
      </div>
      <div className="">
        <form>
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only ">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full py-3 mt-6 mb-4 ps-10 pe-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>

      {/* card section */}
      <ContactCards />
    </div>
  )
}

export default AllContact