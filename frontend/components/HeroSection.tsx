import { WalletSelector } from "./WalletSelector";

function HeroSection() {
  return (
    <section className='flex flex-col md:flex-row items-center justify-between bg-gray-50'>
      {/* Left side */}
      <div className='md:w-1/2 mb-8 md:mb-0 md:px-28 py-24 md:py-16'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Welcome to <span className='text-black'>AptoMart</span>
        </h1>
        <p className='text-lg md:text-xl text-gray-500 mb-8'>
          Global platform for secure shopping
        </p>
        <WalletSelector placeholder="Get Started" />
      </div>

      {/* Right side */}
      <div className='md:w-1/2 w-full h-auto'>
        <div className='relative w-full h-auto'>
          <img
            src='https://i.pinimg.com/736x/0e/0d/21/0e0d219627dd0f0a08996429d4398d18.jpg'
            alt="Hero Image"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
