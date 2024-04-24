import React from "react";
import list from "../../public/list.json";
import Card from "./Card";
import { Link } from "react-router-dom"; // Import Link as a named import

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Welcome aboard! We're thrilled to have you join our course. Get
            ready for an enriching learning experience filled with exciting
            challenges and opportunities for growth. Together, let's explore new
            concepts, expand our skills, and create something amazing. Your
            journey starts here, and we're here to support you every step of the
            way. Let's dive in and make the most of this incredible opportunity!
          </p>
          <Link to="/">
            <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
