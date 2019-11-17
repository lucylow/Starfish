# Starfish: Decentralized Data Marketplace &#x1F49C;

  [![Status](https://img.shields.io/badge/status-work--in--progress-success.svg)]()
  [![GitHub Issues](https://img.shields.io/github/issues/lucylow/Starfish.svg)](https://github.com/lucylow/Starfish/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/lucylow/Starfish.svg)](https://github.com/lucylow/Starfish/pulls)
  [![License](https://img.shields.io/aur/license/android-studio.svg)]()
   
   
---
### Problem  &#x1F49C;

There is a need for high quality data in research. The problem is with distribution and consumption of data for AI specialists, data scientists, big data engineers, and buisness intelligence professionals. Most companies have tremendous amounts of data, but have difficulty exploiting. Conversely, many others are starving for data, particularly in AI. **Starfish allows data providers to share data, while maintaining control and having transparency.**

---

### Solution: Starfish Decentralized Data Marketplace &#x1F49C;

The Proof of Concept (PoC) Decentralized Data Marketplace. A data exchange that inventivies publishing data for training artificial intelligence models. The primary users of the Starfish marketplace are those who benefit from quality data: 
Help grow the decentralized data ecosystem by allowing users to explore, download, and publish open data sets.

Built on top of the Ocean Protocol. Starfish helps to unlock data, particularly for AI. It is designed for scale and uses blockchain technology that allows data to be shared and sold in a safe, secure and transparent manner. Data owners cannot be locked-in to any single marketplace. The data owner controls each dataset. Implementation of the paper ["A Decentralized Data Exchance Protocol to Unlock Data for Artifical Intelligence"](https://oceanprotocol.com/marketplace-framework.pdf).

* Development of data trusts, to improve trust and ease around sharing data
* Making research data machine more readable
* Supporting text and data mining as standards and essential tool for research

---

### Applications: Market Opportunity 

The primary users of the Starfish marketplace are those who benefit from quality data: 

**1. Individuals**
  * AI specialists
  * Data scientists
  * Big data engineers
  * Buisness intelligence professionals
  
**2. Corporate : From AI startups to international enterprises**
  * Accenture
  * CGI
  * KPMG
  
**3. Goverment**
  * Large databases to collect information
  * Ex. Datasets on climate monitoring, securities law compliance, geological surveys, patent applications and grants, surveillance, national security, border control, law enforcement, public health, voter registration, or vehicle registration

----
### Business Revenue Model

**Starfish will be financially sustainable through it's revenue from the Subscription (Monthly fee) model**. Every payment is first made to the Marketplace contract and is held until the Subscription is expired or the Data provider is punished (should their data stop being available)

* A Subscription holds the reference to instances of user-defined Contracts. 
* Contracts are the custom and user defined artifact that describe a data subscription service. 
* These are custom contracts that the data provider and consumer interacts with. 
* The existence of these contracts live within subscriptions. 

**The data consumers are the users in the Data Marketplace that pay for data.**  Data consumer needs to subscribe to the desired dataset to access an existing dataset:
  1. The subscriber approves the Starfish Data Marketplace contract as a spender in the ERC20 contract on their behalf for the specified amount (the monthly subscription for that dataset).
  2. Once the Marketplace contract has been approved, a consumer can send a subscription transaction that includes the desired dataset name. The price is specified in the dataset stored in the marketplace contract, and the amount is transferred on behalf of the user.

---

### Business: Data and Pricing &#x1F49C;

Ocean designed for industrial-scale use. Create a global supply chain of data for AI consumption. The main actors in Ocean Protocol are data providers, data consumers, data marketplaces, service providers and network keepers. Data providers offer data. Data consumers obtain data for their own use. Data marketplaces connect data producers and data consumers. 

**Types of Data**
* Proprietary Data
* Regulated Data
* Free/Commons Data

**Pricing of the data**
* Free Data
* Proprietary/Regulated, non-free, fungible data
* Prorpiteary/Regulated, free, non-fungible data

---

### Data Marketplace &#x1F49C;

Data Marketplaces connect data providers and consumers. The asset to be consumed is data. 

* **Data Providers**
    * provide the network with data and associated serices in exchange for tokens/ data commons
    * As a provider you can unlock your data and earn revenue
    * providers prime the network and provide data
    * data reside in situ - exposed to Ocean network protocol via APIs
    * Providers navigate to marketplace portal, select option to provide access to data, registers for network, provides info about data owner 
   * transactional information on-chain via keeper-nodes 
    * assets exposed in a controlled manner to consumer base
    * Asset providers control who/what access their assets and how/where assets are being used
    * can make data avaliable in exhcange for tokens using the marketplace 
    
* **Data Consumers**
    * The primary users and beneficaires of the marketplace assets - can range from indvidiuals, startups, small to multi-natinal enterprises or goverments
    * As a consumer you can discover and buy data
    * demand-side of network 
    * Marketplace has dashboard and windows for full access to data assets to download 
    * data consumer needs to provide the provider with the requite number of tokens 
 
Ocean Protocol also has data Science tools like Jupyter notebook (implemented with Manta Ray using Ocean APIs to abstract the smart contracts layer) which can be directly linked with Ocean allowing scientists to search, access, and run analysis directly on their Ocean assets.
    

---

### Technical Decentralized Data and Smart Contracts &#x1F49C;

Marketplace facilitate access to the data assets made avaliable by Ocean Protocol. **Starfish Decentralized Marketplace does not involve digital assets handling, only as a service institution. Contracts deployed on Ethereum network, allowing data curators to register new data sets and users to subscribe to existing data sets**. The goal is to improve data quality by preserving and validating the data source. 

Starfish Data Marketplace is governed by a smart contract deployed on the Ethereum network that is operated directly with tokens. The smart contract allows data curators to register new data sets, and allows users to subscribe to existing data sets. The subscription period defaults to one month, and prices for all data sets are designated accordingly as monthly costs. The smart contract stores each of the data sets metadata (owner, price, number of subscriptions, etc.) and information about each subscription to any data set (price, start time and end time). 

**Features**
* On-chain portion, dealing with contextual information about data-sets, namespaces, and subscriptions. The on-chain logic is coded in smart contracts deployed on the Ethereum network, and is operated directly with tokens. 
* Data sets are provided off-chain by several providers, and their storage is managed independently from the logic embedded in the smart contract.
* Provides the mechanism for storing every assets's metadata including links to the asset, asset ownership and associated IP licensing information.
* Data Tokens maps any asset or data in the real world to the digital assets in Ocean blockchain. For data or offchain assets to be traded, it is necessary to define smart contracts according to ontology contract asset specification, so as to facilitate chain transactions. The DataToken includes metadata MetaData, MetaData is a description of the data structure and constraints for the capitalized data.
* Digital watermarking  for data transaction traceability and copyright tracking when instantiating the Data Token

The Data Marketplace contract is publicly available and can be used by any other contract in the network. The smart contract stores each of the data sets metadata (owner, price, number of subscriptions,...) and information about each subscription to any data set (price, start time and end time).

---

### Technical Dependencies &#x1F49C;

Both client and server are written in TypeScript:

* Client : React app setup with squid-js, bootstrapped with Create React App
* Server :  Node.js app,

* oceaenprotocol /keeper-contracts and /squids 
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

    > git clone git@github.com:/lucylow/Starfish.git
    > cd marketplace
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

### Conclusion &#x1F49C;

The goal of Ocean is to unlock massive troves of data for consumption by AI in an equitabe and secure manner. Starfish Decentralized Data Marketplace on Ocean Protocol is done by asset tokenization on the blockchain. The power is redistributed by liberating siloed data and opening it up to data scientists and AI researchers. This will help engage the community, leverage data, and revolutionize the world. **Join the Ocean ecosystem building the future of distributed, decentralized, and permissionless technologies with Starfish Data Marketplace.**


---

### References &#x1F49C;
* Ocean Developer Documentation : https://docs.oceanprotocol.com/ and https://github.com/oceanprotocol/commons
* Whitepaper on Marketplace. https://oceanprotocol.com/marketplace-framework.pdf
* Code. Enigma's Marketplace smart contract . https://github.com/enigmampc/smart_contract_marketplace/blob/master/contracts/Marketplace.sol
* Datum's data marketplace. https://datum.org/

