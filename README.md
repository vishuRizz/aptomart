# GLOBUY

## Brief Description

This prototype is part of the dEVMatch Hackathon organized by APUBCC, developed in the OPEN TRACK on the Aptos Blockchain. Globuy is a web app that empowers digital vendors to create smart contracts and sell products like eBooks, application licenses, online courses, and other digital products securely and efficiently on the Aptos blockchain. With low transaction fees and seamless integration into existing online stores, Globuy simplifies the process of selling digital products. Customers benefit from a smooth shopping experience and can participate in a gamified lottery by paying 1% extra on their purchase, which is added to a prize pool for a chance to win a weekly/monthly prize. Globuy merges the latest blockchain technology with practical features, creating a reliable and engaging marketplace for both sellers and buyers.

## Getting Started

### Clone the Repository

To get started with this project, you'll first need to clone the repository to your local machine. Open your terminal and run the following command:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

Once you have the project cloned, navigate into the project directory and install the necessary dependencies using npm:

```bash
npm install
```

After the dependencies are installed, you can start the development server. Run the following command:

```bash
npm run dev
```

## Smart Contract
This prototype includes two smart contracts written in the MOVE language: payment.move and prize_pool.move. These contracts are deployed at the following object address on the Aptos blockchain: 0x7bbb6ba4078a0d5984875eb573d6b596f229920d83260eb93bc9fd9e2e4d78e6.

### payment.move
The payment.move smart contract is integral to handling transactions on the Globuy platform. When a customer purchases a digital product, the contract deducts the total cost from their wallet and securely transfers it to the vendor’s wallet via the Aptos blockchain. An additional 1% of the purchase price is automatically deducted and allocated to a lottery. This lottery contribution, along with the customer’s wallet address, is sent to the prize_pool.move contract. The customer’s information is then added to a vector of participants, which tracks everyone who has made a purchase and contributed to the lottery during the specified period. This ensures that all buyers are automatically entered into the lottery, with their details recorded for the subsequent drawing.

### prize_pool.move
The prize_pool.move smart contract is designed to manage the lottery system within Globuy, using Aptos’s randomness API to ensure a fair selection process. As the lottery contributions and associated wallet addresses are received from the payment.move contract, they are stored in a vector that tracks all participants. At the end of each lottery cycle, the contract uses the randomness API to generate a random number, which corresponds to an index in the participant vector, thereby selecting a winner. The total amount accumulated in the prize pool from the 1% contributions is then transferred to the winner’s wallet. After the winner is determined, the vector of participants and the prize pool are reset, ready for the next round of the lottery.

## Process Flow

Here’s a step-by-step guide to the purchasing process:

1. Connect Wallet: Begin by connecting your cryptocurrency wallet (e.g., Petra) to the Globuy platform. Make sure your wallet is compatible with the Aptos blockchain and has sufficient APT coins.

2. Select Bandcamp: Once your wallet is connected, navigate to the Bandcamp vendor section on Globuy.
   
3. Select a Product: Browse through the available products and choose the one you wish to purchase. Select a product like "Yacht."
  
4. Click on Buy Now: After selecting your desired product, click on the "Buy Now" button to proceed with the payment. 

5. Make a Payment: The payment will be processed through your connected wallet. Ensure that you have enough APT coins in your wallet to complete the transaction.

6. Transaction Completion: The APT coins required for the purchase will be sent to the vendor account with the address 0xd7cc5f1b18f120b0864c2d3c64359adf8f55db9727c5bab969435d1dd4104bc7.

## Benefits

1. Secure Transactions: Aptos blockchain with Globuy ensures that all transactions are secure and tamper-proof.

2. Low Transaction Fees: Transactions on the Aptos blockchain come with minimal gas fees compared to Ethereum, making it cost-effective for both vendors and customers.

3. Automated Processes: The use of smart contracts automates payment processing and lottery management.

4. Gamified Shopping Experience: Customers can participate in a lottery with each purchase, adding an element of excitement and increasing engagement.

5. Broad Product Support: Globuy accommodates a wide range of digital products, including eBooks, online courses, and more.

6. Enhanced Vendor Visibility: By listing their products on Globuy, vendors gain access to a broader audience on the blockchain.

7. Transparent and Fair: The use of Aptos’s randomness API for the lottery ensures that the selection process is fair and transparent.
