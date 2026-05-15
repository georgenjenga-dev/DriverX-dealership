import { useEffect, useState } from "react";

import {
  collection,
  onSnapshot
} from "firebase/firestore";

import { db } from "../firebase/config";

import CarCard from "../components/Carcard";

function Dashboard() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "cars"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setCars(data);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
  }

export default Dashboard;