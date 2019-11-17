# Starfish: Decentralized Data Marketplace &#x1F49C;

  [![Status](https://img.shields.io/badge/status-work--in--progress-success.svg)]()
  [![GitHub Issues](https://img.shields.io/github/issues/lucylow/Starfish.svg)](https://github.com/lucylow/Starfish/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/lucylow/Starfish.svg)](https://github.com/lucylow/Starfish/pulls)
  [![License](https://img.shields.io/aur/license/android-studio.svg)]()
   
   
---
### Introduction &#x1F49C;

The Proof of Concept (PoC) Data Marketplace. A decentralized data exchange that inventivies publishing data for training artificial intelligence models. Encourages distribution and consumption of data for AI specialists, data scientists, big data engineers, or buisness intelligence professionals. Quality data is an asset for data scientists and researchers. Help grow the decentralized data ecosystem by allowing users to explore, download, and publish open data sets. 

Implementation of the paper ["A Decentralized Data Exchance Protocol to Unlock Data for Artifical Intelligence"](https://oceanprotocol.com/marketplace-framework.pdf).

* Development of data trusts, to improve trust and ease around sharing data
* Making research data machine more readable
* Supporting text and data mining as standards and essential tool for research


---
### Judging Criteria &#x1F49C; 

Solving the technical challenge 


Large Scale Adoptoion 
* High potential project


Sustainability 
* Can this solution be financially sustainable? Has the team thought through how to best reach & engage target users?

Effectiveness
* How effective is this solution in meeting the target user’s needs? 
* Does this solution adequately address the problem or opportunity identified?

---

### Technical Decentralized Data and  Smart Contracts &#x1F49C;

Marketplace facilitate access to the assets(data) made avaliable by Ocean Protocol and cater to the needs to AI researchers and data scientists.

Decentralized Marketplace: Decentralized Marketplace does not involve digital assets handling, only as a service institution, the main work includes: 1 run websites for visual data exchanging 2, the development of data exchange standards, for both parties and the transaction participants. There will be a lot of differences in data exchange standards in different industries, so there will be a variety of different stardards and rules of data exchanges.

This is a decentralized data marketplace that allows data consumers to place bids on auctions for high-value sensor/IoT devices to compensate for invaluable data.

Data Marketplace is governed by specific contracts deployed on Ethereum network, allowing data curators to register new data sets and users to subscribe to existing data sets, in conjunction with IOTA network to preserve and validate data source.

Data Marketplace contract is publicly available and can be used by any other contract in the network. The smart contract stores each of the data sets metadata (owner, price, number of subscriptions, etc.) and information about each subscription to any data set (price, start time and end time).

A Subscription holds the reference to instances of user-defined Contracts.

The subscribers are the users in the Data Marketplace that pay for data. Every payment is first made to the Marketplace contract and is held until the Subscription is expired or the Data curator is punished (should their data stop being available). In case the data provider was punished then and only then, the subscriber will able to ask for a refund. The refund is prorated on the fraction of the monthly subscription when the data was available, and will be deposited back to the subscriber's address.

Contracts are the custom and user defined artifact that describe a data subscription service. These are custom contracts that the buyer interacts with. The existence of these contracts live within subscriptions. Additional client code accompanies Contracts, where either the consumer and service provider run a custom client and server.

...


The Data Marketplace is currently in Phase 1 of its development. The current implementation includes the on-chain portion, dealing with contextual information about data-sets, namespaces, and subscriptions. The on-chain logic is coded in smart contracts deployed on the Ethereum network, and is operated directly with Enigma tokens (ENG). In this first implementation, all data sets are provided off-chain by several providers, and their storage is managed independently from the logic embedded in the smart contract.

The first implementation of the data marketplace is designed for integration with Catalyst on the application layer. Data sets are consumed as premium data inputs to trading algorithms that derive trading signals from them in the quest to improve performance.

Phase 2 includes the first implementation of an off-chain network, which will run on a federated network of known nodes (a-la sidechains). This could also be considered the MVP of the Enigma protocol — one that operates under a restricted threat model. Phase 3 is where things get really interesting, and we launch our open off-chain network where anyone can become a node and provide storage and computational resources in return for ENG tokens. Finally, Phase 4 is where we introduce important privacy features for protecting data in the network. This would allow extending the usability of our data protocol to practically all kinds of data streams, including those that include personally identifiable information (PII).

---

### Technical Smart Contract &#x1F49C;

Ocean provides the mechanism for storing every assets's metadata including links to the asset, asset ownership and associated IP licensing information.

Starfish Data Marketplace is governed by a smart contract deployed on the Ethereum network that is operated directly with ________ tokens . The smart contract allows data curators to register new data sets, and allows users to subscribe to existing data sets. The subscription period defaults to one month, and prices for all data sets are designated accordingly as monthly costs.

The Data Marketplace contract is publicly available and can be used by any other contract in the network. The smart contract stores each of the data sets metadata (owner, price, number of subscriptions,...) and information about each subscription to any data set (price, start time and end time).


---
 
### Technical Ocean Protocol &#x1F49C;


Open source protocol. Opening access to data. 

Ocean helps to unlock data, particularly for AI. It is designed for scale and uses blockchain technology that allows data to be shared and sold in a safe, secure and transparent manner.

Ocean Protocol is designed so that data owners cannot be locked-in to any single marketplace. The data owner controls each dataset.

Most companies have tremendous amounts of data, but have difficulty exploiting it. Conversely, many others are starving for data, particularly in AI. Ocean Protocol allows data providers to share data, while maintaining control and having transparency.

---

### Technical &#x1F49C;
Both client and server are written in TypeScript 

* Client : React app setup with squid-js, bootstrapped with Create React App
* Server :  Node.js app, utilizing Express. The server provides various microservices, like remote file checking. The endpoints are documented in server Readme.


---

### Technical Dependencies &#x1F49C;
* oceaEnprotocol /keeper-contracts and /squids 
* react, react -dom - scripts 
* web3
* Node.js >=8 <12
* npm
* Ocean Protocol components (with Docker)
* MetaMask
* Storage: Azure or AWS 
* React.JS app - Seting up with a dataset
* Wallets : Setup MetaMask, connect to Ocean Network, Use Wallet to manage Ocean Tokens and make transfers 
* Ganache -Test network
* Truffle - Testing and deployment.


---

### Technical - In Development: Get Started Locally &#x1F49C;

Before you can run this application, you will need to install Node.js on your machine. Once you've installed Node.js, you can use npm to run commands listed below.

    > git clone git@github.com:lucylow/Lucy-s-Data-Marketplace.git
    > cd react-tutorial
    > npm install
    > npm start

Open http://localhost:3000 in your browser to see the following: 

[Screenshot of front end of Data-Marketplace here.]

Connect to an Ocean network. By default, the client will connect to Ocean components running within Ocean's Pacific network remotely. It uses a burner wallet connected to the correct network automatically. If you choose to use MetaMask, you need to connect to the Pacific network. To do this:

    beach_umbrella Remote Ocean: Pacific
    
    select Custom RPC in the network dropdown in MetaMask
    under New Network, enter https://pacific.oceanprotocol.com as the custom RPC URL
    Hit Save, and you’re now connected to Pacific
    
Be sure to login into your MetaMask account and select the respective network. By default, Pleuston and Barge will run a Spree test network:

    Spree test network (Localhost 8545)
    Nile test network (RPC https://nile.dev-ocean.com)
    Pacific PoA network (RPC https://pacific.oceanprotocol.com)
---

### Technical - In Production &#x1F49C;

Use [Ocean Protocol's Barge](https://github.com/oceanprotocol/barge) to run Ocean Protocol components on local machine to run in production

    Your marketplace/publisher app
    Aquarius
    A database to go with Aquarius, e.g. Elasticsearch or MongoDB
    Brizo
    Recommended: a keeper node with the keeper contracts deployed to it, connected to an Ocean network
    Optional: your own Secret Store nodes (for a more advanced setup)

---

### Technical - Testing &#x1F49C;

[Test on Ocean Protocol testnet](https://docs.oceanprotocol.com/concepts/testnets/)

---

### Data and Pricing &#x1F49C;

Ocean designed for industrial-scale use. Create a global supply chain of data for AI consumption.

The main actors in Ocean Protocol are data providers, data consumers, data marketplaces, service providers and network keepers. Data providers offer data. Data consumers obtain data for their own use. Data marketplaces connect data producers and data consumers. 

Types of Data 
* Proprietary Data
* Regulated Data
* Free/Commons Data

Pricing of the data 
* Free Data
* PRoprietary/Regulated, non-free, fungible data
* PRorpiteary/Regulated, free, non-fungible data

---

### Data Tokens &#x1F49C;

DToken (short for DataToken) maps any asset or data in the real world to the digital assets in Ocean blockchain. For data or offchain assets to be traded, it is necessary to define Data eXchange smart contracts according to ontology contract asset specification, so as to facilitate chain transactions.

The DataToken includes metadata MetaData, MetaData is a description of the data structure and constraints for the capitalized data.

In the process of instantiating the DToken, it will be used in combination with cryptographic components, such as digital watermarking, etc., for data transaction traceability and copyright tracking.

---

### Data Marketplace &#x1F49C;

Data Marketplaces connect data providers and consumers. The asset to be consumed is data. 

* Data Providers 
    * provide the network with data and associated serices in exchange for tokens/ data commons
    * As a provider you can unlock your data and earn revenue
    * providers prime the network and provide data
    * data reside in situ - exposed to Ocean network protocol via APIs
    * Providers navigate to marketplace portal, select option to provide access to data, registers for network, provides info about data owner 
   * transactional information on-chain via keeper-nodes 
    * assets exposed in a controlled manner to consumer base
    * Asset providers control who/what access their assets and how/where assets are being used
    * can make data avaliable in exhcange for tokens using the marketplace 
    
* Data Consumers
    * The primary users and beneficaires of the marketplace assets - can range from indvidiuals, startups, small to multi-natinal enterprises or goverments
    * As a consumer you can discover and buy data
    * demand-side of network 
    * Marketplace has dashboard and windows for full access to data assets to download 
    * data consumer needs to provide the provider with the requite number of tokens 
 
Ocean has data Science tools like Jupyter notebook (implemented with Manta Ray  using Ocean APIs to abstract the smart contracts layer) can be directly linked with Ocean allowing scientists to search, access, and run analysis directly on their Ocean assets.
    
---

### Conclusion &#x1F49C;

The goal of Ocean is to unlock massive troves of data for consumption by AI in an equitabe and secure manner. Starfish Decentralized Data Marketplace on Ocean Protocol is done by asset tokenization on the blockchain. The power is redistributed by liberating siloed data and opening it up to data scientists and AI researchers. This will help engage the community, leverage data, and revolutionize the world. 

---

### References &#x1F49C;
* Ocean Protocol github repos https://github.com/oceanprotocol
* Developer Documentation : https://docs.oceanprotocol.com/
* Ocean's example marketplace: https://github.com/oceanprotocol/commons
* Whitepaper on Marketplace. https://oceanprotocol.com/marketplace-framework.pdf
* Code. Enigma's Marketplace smart contract . https://github.com/enigmampc/smart_contract_marketplace/blob/master/contracts/Marketplace.sol
* Datum's data marketplace. https://datum.org/

