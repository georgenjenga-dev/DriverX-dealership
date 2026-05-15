function CarCard({ car }) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-2xl font-bold">{car.name}</h2>
        <p className="text-gray-400">{car.price}</p>
      </div>
    </div>
  );
}

export default CarCard;