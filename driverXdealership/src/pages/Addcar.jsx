import { useState } from "react";
import {
  collection,
  addDoc
} from "firebase/firestore";

import { db } from "../firebase/config";

function AddCar() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const addCar = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "cars"), {
        name,
        price,
        image
      });

      alert("Car Added Successfully");

      setName("");
      setPrice("");
      setImage("");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex justify-center items-center px-4 py-10">

      <form
        onSubmit={addCar}
        className="
        bg-white/10
        backdrop-blur-lg
        border border-gray-700
        p-8
        rounded-3xl
        shadow-2xl
        w-full
        max-w-xl
        "
      >

        {/* Title */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-red-500">
            Add New Car
          </h1>

          <p className="text-gray-300 mt-2">
            Upload vehicle details to DriverX Dealership
          </p>

        </div>

        {/* Car Name */}
        <input
          type="text"
          placeholder="Enter car name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
          w-full
          p-4
          mb-5
          rounded-xl
          bg-gray-800
          text-white
          border border-gray-600
          focus:outline-none
          focus:border-red-500
          "
          required
        />

        {/* Price */}
        <input
          type="text"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="
          w-full
          p-4
          mb-5
          rounded-xl
          bg-gray-800
          text-white
          border border-gray-600
          focus:outline-none
          focus:border-red-500
          "
          required
        />

        {/* Image URL */}
        <input
          type="text"
          placeholder="Paste image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="
          w-full
          p-4
          mb-6
          rounded-xl
          bg-gray-800
          text-white
          border border-gray-600
          focus:outline-none
          focus:border-red-500
          "
          required
        />

        {/* Live Preview */}
        {image && (
          <div className="mb-6">

            <p className="text-gray-300 mb-3">
              Preview
            </p>

            <img
              src={image}
              alt="Car Preview"
              className="
              w-full
              h-56
              object-cover
              rounded-2xl
              shadow-lg
              "
            />

          </div>
        )}

        {/* Button */}
        <button
          className="
          w-full
          bg-red-500
          hover:bg-red-600
          py-4
          rounded-xl
          font-semibold
          text-lg
          transition-all
          duration-300
          hover:scale-105
          shadow-lg
          "
        >
          Add Car
        </button>

      </form>

    </div>
  );
}

export default AddCar;