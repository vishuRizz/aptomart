const BusinessStrategy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-1">
      <h1 className="text-3xl font-bold text-center mb-6">
        Our business strategy will revolutionize many businesses across the globe
      </h1>
      <p className="text-center max-w-3xl mb-12">
        We are poised to revolutionize businesses worldwide with our strategic approach.
        By embracing the latest advancements and reimagining traditional practices,
        we’re enabling companies to unlock new levels of growth and efficiency,
        setting a new standard for success on a global scale.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl mb-12">
        <div className="flex flex-col md:flex-row justify-between w-full bg-gray-100 p-6 rounded-md shadow-md">
          <div className="text-center mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Clients</h2>
            <p className="text-xl">12K</p>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Annual growth</h2>
            <p className="text-xl">55%</p>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">No. of projects</h2>
            <p className="text-xl">5K</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">Positive ratings</h2>
            <p className="text-xl">80%</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <img
          src="/images/chart.png"
          alt="Growth Chart"
          width={400}
          height={300}
          className="rounded-md shadow-md"
        />
      </div>

      <h2 className="text-2xl font-bold text-center mb-6">Our happy clients</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-5xl">
        <div className="bg-gray-100 p-6 rounded-md shadow-md max-w-xs text-center">
          <p className="mb-4">Absolutely love this app! It makes shopping from anywhere so seamless and easy. No more geo-blocks restrictions. The secure transactions and real-time tracking give me peace of mind every time I order.</p>
          <div className="flex items-center justify-center">
            <img
              src="/images/client.png"
              alt="Client Image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="ml-3 font-semibold">Jacqueline Wright</p>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-md shadow-md max-w-xs text-center">
          <p className="mb-4">This app is a game-changer! I can shop from anywhere, even in countries with shopping restrictions. The secure transactions are super convenient, and the real-time tracking keeps me updated on my orders.</p>
          <div className="flex items-center justify-center">
            <img
              src="/images/client.png"
              alt="Client Image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="ml-3 font-semibold">Jacqueline Wright</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStrategy;
