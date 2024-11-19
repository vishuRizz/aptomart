
# AptoMart

## Overview

AptoMart is a decentralized marketplace built on the Aptos blockchain, designed to facilitate secure and transparent transactions for digital products. It includes smart contracts for handling payments and managing a lottery system that adds a gamified element to the shopping experience.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Smart Contracts](#smart-contracts)
  - [payment.move](#paymentmove)
  - [prize_pool.move](#prize_poolmove)
- [Process Flow](#process-flow)
- [Benefits](#benefits)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Secure Transactions:** Utilizes the Aptos blockchain for secure and tamper-proof transactions.
- **Low Transaction Fees:** Transactions on the Aptos blockchain come with minimal gas fees compared to Ethereum, making it cost-effective for both vendors and customers.
- **Automated Processes:** The use of smart contracts automates payment processing and lottery management.
- **Gamified Shopping Experience:** Customers can participate in a lottery with each purchase, adding an element of excitement and increasing engagement.
- **Broad Product Support:** AptoMart accommodates a wide range of digital products, including eBooks, online courses, and more.
- **Enhanced Vendor Visibility:** By listing their products on AptoMart, vendors gain access to a broader audience on the blockchain.
- **Transparent and Fair:** The use of Aptos’s randomness API for the lottery ensures that the selection process is fair and transparent.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.
- A cryptocurrency wallet compatible with the Aptos blockchain (e.g., Petra).

### Clone the Repository

To get started with this project, you'll first need to clone the repository to your local machine. Open your terminal and run the following command:

```bash
git clone https://github.com/your-username/your-repo-name.git
Installation
Once you have the project cloned, navigate into the project directory and install the necessary dependencies using npm:

bash

Copy
cd your-repo-name
npm install
Running the Development Server
After the dependencies are installed, you can start the development server. Run the following command:

bash

Copy
npm run dev
Smart Contracts
This prototype includes two smart contracts written in the MOVE language: payment.move and prize_pool.move. These contracts are deployed at the following object address on the Aptos blockchain: 0x7bbb6ba4078a0d5984875eb573d6b596f229920d83260eb93bc9fd9e2e4d78e6.

payment.move
The payment.move smart contract is integral to handling transactions on the AptoMart platform. When a customer purchases a digital product, the contract deducts the total cost from their wallet and securely transfers it to the vendor’s wallet via the Aptos blockchain. An additional 1% of the purchase price is automatically deducted and allocated to a lottery. This lottery contribution, along with the customer’s wallet address, is sent to the prize_pool.move contract. The customer’s information is then added to a vector of participants, which tracks everyone who has made a purchase and contributed to the lottery during the specified period. This ensures that all buyers are automatically entered into the lottery, with their details recorded for the subsequent drawing.

prize_pool.move
The prize_pool.move smart contract is designed to manage the lottery system within AptoMart, using Aptos’s randomness API to ensure a fair selection process. As the lottery contributions and associated wallet addresses are received from the payment.move contract, they are stored in a vector that tracks all participants. At the end of each lottery cycle, the contract uses the randomness API to generate a random number, which corresponds to an index in the participant vector, thereby selecting a winner. The total amount accumulated in the prize pool from the 1% contributions is then transferred to the winner’s wallet. After the winner is determined, the vector of participants and the prize pool are reset, ready for the next round of the lottery.

Process Flow
Here’s a step-by-step guide to the purchasing process:

Connect Wallet: Begin by connecting your cryptocurrency wallet (e.g., Petra) to the AptoMart platform. Make sure your wallet is compatible with the Aptos blockchain and has sufficient APT coins.
Select Product: Browse through the available products and choose the one you wish to purchase.
Click on Buy Now: After selecting your desired product, click on the "Buy Now" button to proceed with the payment.
Make a Payment: The payment will be processed through your connected wallet. Ensure that you have enough APT coins in your wallet to complete the transaction.
Transaction Completion: The APT coins required for the purchase will be sent to the vendor account with the address 0xd7cc5f1b18f120b0864c2d3c64359adf8f55db9727c5bab969435d1dd4104bc7.
Benefits
Secure Transactions: AptoMart ensures that all transactions are secure and tamper-proof using the Aptos blockchain.
Low Transaction Fees: Transactions on the Aptos blockchain come with minimal gas fees compared to Ethereum, making it cost-effective for both vendors and customers.
Automated Processes: The use of smart contracts automates payment processing and lottery management.
Gamified Shopping Experience: Customers can participate in a lottery with each purchase, adding an element of excitement and increasing engagement.
Broad Product Support: AptoMart accommodates a wide range of digital products, including eBooks, online courses, and more.
Enhanced Vendor Visibility: By listing their products on AptoMart, vendors gain access to a broader audience on the blockchain.
Transparent and Fair: The use of Aptos’s randomness API for the lottery ensures that the selection process is fair and transparent.
Contributing
We welcome contributions to improve AptoMart. Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.
