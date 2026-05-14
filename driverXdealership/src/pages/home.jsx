function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-5xl font-bold text-red-500 mb-4">
        DriverXDealership
      </h1>

      <p className="text-xl max-w-2xl">
        Buy and sell premium vehicles in real time.
      </p>

      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
        alt="car"
        className="rounded-xl mt-8 w-full max-w-4xl"
      />
    </div>
  );
}

export default Home;