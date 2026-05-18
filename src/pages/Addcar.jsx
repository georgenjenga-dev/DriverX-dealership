import { useState } from "react";

import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../firebase/config";

function AddCar() {

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const addCar = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {

      await addDoc(
        collection(db, "cars"),
        {
          name,
          brand,
          year,
          price,
          image,
          description,
          createdAt: serverTimestamp()
        }
      );

      setMessage("Car added successfully");

      setName("");
      setBrand("");
      setYear("");
      setPrice("");
      setImage("");
      setDescription("");

    } catch (err) {
      console.log(err);
      setMessage("Failed to add car");
    }

    setLoading(false);
  };

  return (

    <div className="
      min-h-screen
      bg-gradient-to-br
      from-black
      via-gray-900
      to-red-950
      flex
      justify-center
      items-center
      px-4
      py-10
    ">

      <form
        onSubmit={addCar}
        className="
        bg-white/10
        backdrop-blur-xl
        border
        border-gray-700
        shadow-2xl
        rounded-3xl
        p-8
        w-full
        max-w-2xl
        "
      >

        <h1 className="
          text-4xl
          font-bold
          text-center
          text-red-500
          mb-2
        ">
          Add New Car
        </h1>

        <p className="
          text-center
          text-gray-300
          mb-8
        ">
          Upload vehicles to DriverX dealership
        </p>

        {message && (
          <div className="
            mb-5
            p-3
            rounded-xl
            bg-green-600/20
            text-green-300
          ">
            {message}
          </div>
        )}

        <div className="
          grid
          md:grid-cols-2
          gap-4
        ">

          <input
            type="text"
            placeholder="Car Name"
            value={name}
            onChange={(e)=>
              setName(e.target.value)
            }
            className="
              p-4
              rounded-xl
              bg-gray-800
              text-white
              outline-none
            "
            required
          />

          <input
            type="text"
            placeholder="Brand"
            value={brand}
            onChange={(e)=>
              setBrand(e.target.value)
            }
            className="
              p-4
              rounded-xl
              bg-gray-800
              text-white
            "
            required
          />

          <input
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e)=>
              setYear(e.target.value)
            }
            className="
              p-4
              rounded-xl
              bg-gray-800
              text-white
            "
            required
          />

          <input
            type="number"
            placeholder="Price ($)"
            value={price}
            onChange={(e)=>
              setPrice(e.target.value)
            }
            className="
              p-4
              rounded-xl
              bg-gray-800
              text-white
            "
            required
          />

        </div>

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e)=>
            setImage(e.target.value)
          }
          className="
            mt-4
            w-full
            p-4
            rounded-xl
            bg-gray-800
            text-white
          "
          required
        />

        {/* Image Preview */}

        {image && (

          <img
            src={image}
            alt="preview"
            className="
              w-full
              h-60
              object-cover
              rounded-2xl
              mt-5
              border
              border-gray-700
            "
          />

        )}

        <textarea
          placeholder="Car Description"
          value={description}
          onChange={(e)=>
            setDescription(
              e.target.value
            )
          }
          rows="5"
          className="
            mt-5
            w-full
            p-4
            rounded-xl
            bg-gray-800
            text-white
          "
        />

        <button
          disabled={loading}
          className="
          mt-6
          w-full
          py-4
          rounded-xl
          bg-red-600
          hover:bg-red-700
          text-white
          font-bold
          transition
          hover:scale-105
          disabled:opacity-50
          "
        >

          {loading
            ? "Adding Car..."
            : "Add Vehicle"}

        </button>

      </form>

    </div>
  );
}

export default AddCar;