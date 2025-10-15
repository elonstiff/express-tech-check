# 🪙 Node.js Blockchain – Full User Guide

A fully-featured educational blockchain built with **Node.js** and **Express**.  
This project demonstrates how blockchain technology works internally — including block creation, mining, proof-of-work, transaction validation, and RESTful APIs for interaction.

---

## 📖 Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Running the Node](#running-the-node)
6. [API Reference](#api-reference)
7. [Mining Process](#mining-process)
8. [Data Persistence](#data-persistence)
9. [Project Structure](#project-structure)
10. [Developer Guide](#developer-guide)
11. [Testing](#testing)
12. [Troubleshooting](#troubleshooting)
13. [Extending the Blockchain](#extending-the-blockchain)
14. [License](#license)

---

## 🧠 Overview

This blockchain system implements a **proof-of-work (PoW)** consensus model.  
Each node maintains its own copy of the ledger. Blocks contain verified transactions and cryptographic hashes linking them together, ensuring immutability and integrity.

Key Features:

- RESTful API for blockchain access
- Transaction creation and validation
- Proof-of-Work mining mechanism
- Persistent JSON storage
- Modular architecture with ~90 `.js` files across 9 folders
- Easily extensible for P2P networking, wallets, and smart contracts

---

- **Express Layer** — Handles HTTP requests and routes.
- **Core Layer** — Implements blockchain logic.
- **Service Layer** — Logging, validation, and persistence utilities.
- **Data Layer** — Stores blocks and transactions in local JSON files.
- **Config Layer** — Defines network settings, difficulty, and mining reward.

---

## ⚙️ Installation

### Prerequisites

- Node.js **v18 or higher**
- npm package manager

### Steps

```bash
# Clone the repository
git clone https://github.com/elonstiff/express-tech-check.git
cd blockchain_project

# Install dependencies
npm install
```
