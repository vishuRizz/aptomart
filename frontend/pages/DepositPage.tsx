import { useNavigate, useParams } from "react-router-dom";


function DepositPage() {

  const navigate = useNavigate();
  const { vendorName, productName } = useParams();

  const handlePayDepositClick = () => {
    navigate(`/vendors/${vendorName}/${productName}/deposit/full-payment`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 relative">
      <div className="bg-white rounded-lg shadow-md p-8 pb-28"> {/* Added pb-20 for padding-bottom */}
        {/* Header Section */}
        <div className="flex items-center mb-6">
          <button className="text-2xl mr-4">&larr;</button>
          <h1 className="text-2xl font-semibold">Deposit</h1>
        </div>

        {/* Product Information Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
          <img
            src="/images/mi.png"
            alt="Delivery Illustration"
            width={244.67}
            height={186.45}
            className="h-48 rounded-md mb-4"
          />
          <div className="ml-0 md:ml-8 mt-4 md:mt-0">
            <h3 className="text-2xl font-semibold">Xiaomi Band 3</h3>
            <span className="text-red-500 text-lg font-medium">50% OFF</span>
            <p className="text-gray-400 text-lg line-through">Before $200</p>
            <p className="text-cyan-600 text-2xl font-bold">Now $100</p>
          </div>
        </div>

        {/* Description Section */}
        <p className="text-gray-800 text-lg font-medium mb-2">Description</p>
        <p className="text-gray-600 text-lg mb-8">
          The Mi Band 3 is a budget-friendly fitness tracker featuring a sleek,
          water-resistant design with an OLED touchscreen display. It tracks
          your daily steps, heart rate, sleep patterns, and more, while offering
          up to 20 days of battery life on a single charge...
        </p>

        {/* Gray Bar */}
        <div className="bg-gray-200 h-[19px] w-full mb-6"></div>

        {/* Delivery Information Section */}
        <div className="space-y-6 mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-7 h-7 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 10H7M21 6H7m14 8H7m14 4H7m0 4H3m4-16H3m0 4H3m0 4H3m0 4H3m0 4H3m4-16H3m4 0H7"
                />
              </svg>
              <p className="ml-3 text-gray-600 text-lg">
                Delivered by 18 - 21 Aug 2024
              </p>
            </div>
            <p className="text-gray-600 text-lg">$20.00</p>
          </div>

          {/* Gray Bar */}
          <div className="bg-gray-200 h-[19px] w-full"></div>

          {/* Insurance Section */}
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600"
              />
              <span className="ml-3 text-gray-600 text-lg">
                Insurance (10% product cost)
              </span>
            </label>
            <p className="text-gray-600 text-lg">$10.00</p>
          </div>

          {/* Gray Bar */}
          <div className="bg-gray-200 h-[19px] w-full"></div>

          {/* Terms & Condition Section */}
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600"
              />
              <span className="ml-3 text-gray-600 text-lg">
                Terms & Condition
              </span>
            </label>
          </div>

          {/* Gray Bar */}
          <div className="bg-gray-200 h-[19px] w-full"></div>

          {/* Promo Code Section */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-7 h-7 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 10H7M21 6H7m14 8H7m14 4H7m0 4H3m4-16H3m0 4H3m0 4H3m0 4H3m0 4H3m4-16H3m4 0H7"
              />
            </svg>
            <input
              type="text"
              placeholder="Store Promo Code"
              className="ml-3 w-full bg-gray-100 rounded-lg p-3 border border-gray-300"
            />
            <p className="text-gray-600 ml-3 text-lg">$0.00</p>
          </div>
        </div>

        {/* Gray Bar */}
        <div className="bg-gray-200 h-[19px] w-full mb-8"></div>

        {/* Cost Breakdown Section */}
        <div className="space-y-4 text-right text-gray-600">
          <div className="flex justify-between text-lg">
            <p>Deposit Fee (Payable amount):</p>
            <p className="text-orange-500">$10.00</p>
          </div>
          <div className="flex justify-between text-lg">
            <p>Merchandise Subtotal:</p>
            <p>$100.00</p>
          </div>
          <div className="flex justify-between text-lg">
            <p>Delivery Fee:</p>
            <p>$20.00</p>
          </div>
          <div className="flex justify-between text-lg">
            <p>Insurance:</p>
            <p>$10.00</p>
          </div>
          <div className="flex justify-between font-semibold text-xl">
            <p>Total Cost:</p>
            <p className="text-orange-500">$130.00</p>
          </div>
        </div>

        {/* Pay Deposit Now Button */}
        <button
          onClick={handlePayDepositClick}
          className="bg-black text-white font-bold py-3 px-6 rounded-lg absolute bottom-16 right-16"
        >
          Pay Deposit Now
        </button>
      </div>
    </div>
  );
}

export default DepositPage;
