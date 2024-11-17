import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { useWallet, InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS, VENDOR_ADDRESS } from "@/constants";

const items_cost: string = "100";  // Corrected string type
const aptosConfig = new AptosConfig({ network: Network.DEVNET });
const aptos = new Aptos(aptosConfig);

console.log("Module Address:", MODULE_ADDRESS);
console.log("Items Cost:", items_cost);
console.log("Vendor Address:", VENDOR_ADDRESS);

function FullPaymentPage() {
  const { account, signAndSubmitTransaction } = useWallet();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isInsuranceChecked, setIsInsuranceChecked] = useState(false); // Initially unchecked
  const [isTermsChecked, setIsTermsChecked] = useState(false); // Initially unchecked

  const navigate = useNavigate(); // Initialize navigate for navigation

  const merchandiseSubtotal = 100.0;
  const deliveryFee = 20.0;
  const insuranceFee = 10.0;
  const totalCost = merchandiseSubtotal + deliveryFee + insuranceFee;
  const handInPrice = totalCost;

  const handlePaymentClick = async () => {
    if (isInsuranceChecked && isTermsChecked) {
      // Do payment transaction
      if (!account) return;

      try {
        // Corrected transaction structure
        const transaction: InputTransactionData = {
          data: {
            function: `${MODULE_ADDRESS}::payment::handle_payment`,
            functionArguments: [items_cost, VENDOR_ADDRESS], // Make sure these are strings or addresses
            typeArguments: [],
          },
        };

        console.log("buyer address", account?.address);
        console.log("Transaction payload:", transaction);

        // Sign and submit transaction to the chain
        const response = await signAndSubmitTransaction(transaction);
        console.log("Transaction response:", response);  // Log response for debugging

        // Wait for transaction confirmation
        await aptos.waitForTransaction({ transactionHash: response.hash });

        // Show success dialog after confirmation
        setIsDialogOpen(true);
      } catch (error: any) {
        console.error("Error during payment transaction:", error);  // Log specific error
        alert("Payment failed! Please try again.");
      }
    } else {
      alert("Please agree to the insurance and terms & conditions to proceed.");
    }
  };

  const handleContinueClick = () => {
    setIsDialogOpen(false);
    navigate("/vendors"); // Redirect to the VendorPage after successful payment
  };

  return (
    <div className="relative min-h-screen p-8 bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md pb-28">
        {/* Header Section */}
        <div className="flex items-center mb-6">
          <button className="mr-4 text-2xl">&larr;</button>
          <h1 className="text-2xl font-semibold">Payment</h1>
        </div>

        {/* Product Information Section */}
        <div className="flex flex-col items-start mb-6 md:flex-row md:items-center">
          <img
            src="/images/yacht2.jpg"
            alt="Delivery Illustration"
            width={244.67}
            height={186.45}
            className="h-48 mb-4 rounded-md"
          />
          <div className="mt-4 ml-0 md:ml-8 md:mt-0">
            <h3 className="text-2xl font-semibold">Yatch</h3>
            <span className="text-lg font-medium text-red-500">50% OFF</span>
            <p className="text-lg text-gray-400 line-through">Before $200</p>
            <p className="text-2xl font-bold text-cyan-600">Now $100</p>
          </div>
        </div>

        {/* Description Section */}
        <p className="mb-2 text-lg font-medium text-gray-800">Description</p>
        <p className="mb-8 text-lg text-gray-600">
          An engaging guide to mastering technology for the modern entrepreneur.
        </p>

        {/* Gray Bar */}
        <div className="bg-gray-200 h-[19px] w-full mb-6"></div>

        {/* Delivery Information Section */}
        <div className="mb-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="text-blue-600 w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 10H7M21 6H7m14 8H7m14 4H7m0 4H3m4-16H3m0 4H3m0 4H3m0 4H3m0 4H3m4-16H3m4 0H7"
                />
              </svg>
              <p className="ml-3 text-lg text-gray-600">Delivered by 18 - 21 Aug 2024</p>
            </div>
            <p className="text-lg text-gray-600">$20.00</p>
          </div>

          {/* Gray Bar */}
          <div className="bg-gray-200 h-[19px] w-full"></div>

          {/* Insurance Section */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="text-blue-600 form-checkbox"
                checked={isInsuranceChecked}
                onChange={(e) => setIsInsuranceChecked(e.target.checked)}
              />
              <span className="ml-3 text-lg text-gray-600">Insurance (10% product cost)</span>
            </label>
            <p className="text-lg text-gray-600">$10.00</p>
          </div>

          {/* Gray Bar */}
          <div className="bg-gray-200 h-[19px] w-full"></div>

          {/* Terms & Condition Section */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="text-blue-600 form-checkbox"
                checked={isTermsChecked}
                onChange={(e) => setIsTermsChecked(e.target.checked)}
              />
              <span className="ml-3 text-lg text-gray-600">Terms & Condition</span>
            </label>
          </div>
        </div>

        {/* Final Payment Section */}
        <div className="bg-gray-200 h-[19px] w-full mb-6"></div>
        <div className="space-y-4 text-right text-gray-600">
          <div className="flex justify-between text-lg">
            <p>Merchandise Subtotal:</p>
            <p>${merchandiseSubtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-lg">
            <p>Delivery Fee:</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-lg">
            <p>Insurance:</p>
            <p>${insuranceFee.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-xl font-semibold">
            <p>Total Cost:</p>
            <p className="text-orange-500">${totalCost.toFixed(2)}</p>
          </div>

          <div className="flex justify-between text-lg">
            <p>Hand-in Price:</p>
            <p className="font-semibold text-teal-600">${handInPrice.toFixed(2)}</p>
          </div>
        </div>

        {/* Payment Button */}
        <button
          className={`bg-black text-white font-bold py-3 px-6 rounded-full w-full mt-8`}
          onClick={handlePaymentClick}
        >
          Proceed to Payment
        </button>
      </div>

      {/* Success Dialog */}
      {isDialogOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-50">
          <div className="flex items-center justify-center h-full">
            <div className="p-8 text-center bg-white rounded-lg w-96">
              <h2 className="mb-4 text-2xl font-bold text-green-500">Payment Successful!</h2>
              <p className="mb-6 text-lg text-gray-600">
                Your payment has been processed successfully.
              </p>
              <button
                className="px-6 py-2 text-white bg-blue-600 rounded-full"
                onClick={handleContinueClick}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FullPaymentPage;
