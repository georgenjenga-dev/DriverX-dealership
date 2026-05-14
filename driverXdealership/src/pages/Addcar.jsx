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

      alert("Car Added");

      setName("");
      setPrice("");
      setImage("");
    } catch (err) {
      console.log(err);
    }
     };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <form
        onSubmit={addCar}
        className="bg-gray-900 p-8 rounded-xl w-full max-w-lg"
      >
        <h1 className="text-3xl mb-6">Add Car</h1>

        <input
          type="text"
          placeholder="Car Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 text-black rounded"
          required
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 mb-4 text-black rounded"
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
           className="w-full p-3 mb-4 text-black rounded"
          required
        />

        <button className="bg-red-500 w-full py-3 rounded-lg">
          Add Car
        </button>
      </form>
    </div>
  );
}

export default AddCar;