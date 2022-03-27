# Hello, folks! Welcome to OpenFund <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="36px">
Welcome to the **OpenFund Grants** project.

This repository contains the essential codebase that powers the [**OpenFund Initiative**](https://openfund.live). It's still in development phase and everybody is welcome to contribute in this wonderful journey of Funding Awesome Projects in **Web3.0**

This project is completely build on **NEAR Protocol**. LFG 🚀🚀🚀


Quick Start 🛠
===========
To run this project locally:
1. **Prerequisites:** Make sure you've installed [Node.js] ≥ 12
2. **Install dependencies:** `yarn install`
3. **Run the local development server:** `yarn dev` (see `package.json` for a full list of `scripts` you can run with `yarn`)

Now you'll have a local development environment backed by the **NEAR TestNet!**

Go ahead and play with the app and the code. As you make code changes, the app will automatically reload.

Exploring The Code 📝
==================

1. The **backend** code lives in the `/contract` folder.
2. The **frontend** code lives in the `/src` folder. `/src/index.html` is a great place to start exploring. Note that it loads in `/src/index.js`, where you can learn how the frontend connects to the NEAR blockchain.
3. There are different kinds of **tests** for the frontend and the **smart contract**. See `contract/README` for info about how it's tested.

In case you want to learn some basic Rust to start coding, feel free to check out [this awesome 30-min video](https://www.youtube.com/watch?v=KDn_j48yoAo&t=581s) or this [Rust 101](https://github.com/ashucoder9/Rust-101) tutorial.


Deploy 🚀
======

Every smart contract in NEAR has its [own associated account][NEAR accounts]. When you run `yarn dev`, your smart contract gets deployed to the live NEAR TestNet with a throwaway account. When you're ready to make it permanent, here's how.


Step 1: Install near-cli 💻
-------------------------------------

**near-cli** is a command line interface (CLI) for interacting with the NEAR blockchain. It was installed to the local `node_modules` folder when you ran `yarn install`, but for best ergonomics you may want to install it globally:

    yarn install --global near-cli

Or, if you'd rather use the locally-installed version, you can prefix all `near` commands with `npx`

Ensure that it's installed with `near --version` (or `npx near --version`)


Step 2: Create an account for the contract 🖋
------------------------------------------

Each account on NEAR can have at most one contract deployed to it. If you've already created an account such as `your-name.testnet`, you can deploy your contract to `openfund.your-name.testnet`. Assuming you've already created an account on **NEAR Wallet**, here's how to create `openfund.your-name.testnet`:

1. Authorize NEAR CLI, following the commands it gives you:

>near login

2. Create a subaccount (replace `YOUR-NAME` below with your actual account name):

>near create-account openfund.YOUR-NAME.testnet --masterAccount YOUR-NAME.testnet


Step 3: Set contract name 🖋
---------------------------------

Modify the line in `src/config.js` that sets the account name of the contract. Set it to the account id you used above.

    const CONTRACT_NAME = process.env.CONTRACT_NAME || 'openfund.YOUR-NAME.testnet'


Step 3: Deploy 🌏
---------------

One command:

    yarn deploy

As you can see in `package.json`, this does two things:

1. builds & deploys **smart contract** to *NEAR TestNet*
2. builds & deploys **frontend** code to GitHub using *gh-pages*. This will only work if the project already has a repository set up on GitHub. Feel free to modify the `deploy` script in `package.json` to deploy elsewhere.


Connect with Me 😁
---------------------------------

I love meeting new people in the community. Feel free to check out my Twitter account [@pythontony](https://twitter.com/pythontony) and ping me in case you got some awesome idea to build.

You can also reach out to me via LinkedIn [@ashucoder9](https://linkedin.com/in/ashucoder9)
