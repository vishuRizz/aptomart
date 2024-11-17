import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-semibold mb-6">Terms and Conditions: Deposit and Payment</h1>
        
        {/* Section 1 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1. Deposit Requirement</h2>
          <p className="mb-2">
            <strong>1.1.</strong> By placing an order on our platform, you agree to pay a non-refundable deposit equal to 10% of the total product price.
          </p>
          <p>
            <strong>1.2.</strong> This deposit must be paid using a supported cryptocurrency wallet and will be held in a secure smart contract until the order is fulfilled.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">2. Payment Process</h2>
          <p className="mb-2">
            <strong>2.1.</strong> After the deposit is made, the product will be ordered from the producer and shipped to our warehouse.
          </p>
          <p className="mb-2">
            <strong>2.2.</strong> Once the product arrives at our warehouse, you will be notified to pay the remaining balance, which includes the rest of the product price, shipping fees, and any applicable insurance charges.
          </p>
          <p>
            <strong>2.3.</strong> The remaining payment must also be made using a supported cryptocurrency wallet and will be held in the smart contract until the product is successfully delivered to you.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">3. Smart Contract Conditions</h2>
          <p className="mb-2">
            <strong>3.1.</strong> The funds held in the smart contract will only be released to us once you confirm the successful delivery of the product.
          </p>
          <p>
            <strong>3.2.</strong> If the product is not delivered, or if there are any issues with the delivery, you may initiate a dispute to retrieve your payment from the smart contract.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">4. Order Cancellation</h2>
          <p className="mb-2">
            <strong>4.1.</strong> If you choose to cancel the order after we have received the product from the producer, a penalty will be applied.
          </p>
          <p className="mb-2">
            <strong>4.2.</strong> The penalty will be deducted from your initial deposit, and the remaining balance (if any) will be refunded to you.
          </p>
          <p>
            <strong>4.3.</strong> The penalty amount will be determined based on the costs incurred up to the point of cancellation, including but not limited to shipping and handling fees.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">5. Customer Responsibilities</h2>
          <p className="mb-2">
            <strong>5.1.</strong> It is your responsibility to ensure that the payment is made using a valid and supported cryptocurrency wallet.
          </p>
          <p className="mb-2">
            <strong>5.2.</strong> You must confirm the delivery of the product through the provided platform interface to release the funds from the smart contract.
          </p>
          <p>
            <strong>5.3.</strong> Any disputes or issues must be reported within the specified timeframe provided in the delivery confirmation notification.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">6. Refunds and Disputes</h2>
          <p className="mb-2">
            <strong>6.1.</strong> If the product is not delivered or if you receive the wrong or damaged product, you are entitled to a full refund of the deposit and remaining payment held in the smart contract.
          </p>
          <p className="mb-2">
            <strong>6.2.</strong> Disputes regarding the delivery or product condition must be initiated through our platform’s dispute resolution process.
          </p>
          <p>
            <strong>6.3.</strong> We will work to resolve disputes promptly, and funds will be handled according to the outcome of the dispute resolution.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
          <p className="mb-2">
            <strong>7.1.</strong> We reserve the right to modify these terms and conditions at any time. Any changes will be communicated to you, and your continued use of our platform will constitute your acceptance of the updated terms.
          </p>
          <p>
            <strong>7.2.</strong> It is your responsibility to review these terms periodically for any changes.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Acceptance of Terms</h2>
          <p className="mb-2">
            <strong>8.1.</strong> By proceeding with the deposit payment, you acknowledge that you have read, understood, and agreed to these terms and conditions.
          </p>
          <p>
            <strong>8.2.</strong> If you do not agree with these terms, you should not proceed with the deposit payment.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermsAndConditions;
