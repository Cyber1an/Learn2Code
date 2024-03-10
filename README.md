
# Project Setup Guide

This document provides instructions on setting up the project environment. Please follow the steps carefully to ensure a smooth setup process.

## Prerequisites

- Windows / Linus or MacOS Operating System
- Git installed on your machine
- [SQLite Studio](https://sqlitestudio.pl/)

## 1. Install Node.js

Ensure you have Node.js version 20.11 LTS or newer installed on your machine. To install the latest Node.js LTS version, follow these steps:

1. Visit the [Node.js official website](https://nodejs.org/).
2. Download the Windows installer for the LTS version.
3. Run the installer and follow the prompts to complete the installation.
4. After installation, open a command prompt or PowerShell and run `node -v` to verify the installation. The version should be 20.11 or newer.

## 2. Clone the Repository

Clone the `Learn2Code` repository from GitHub to your local machine by running the following command in your preferred terminal:

```bash
git clone https://github.com/Cyber1an/Learn2Code.git
```

Alternatively you can download code without using git clone, but then you won't be able to push your changes to git repository for review.

Once code is Cloned or Downloaded >
Navigate into the project directory:

```bash
cd Learn2Code
```

## 3. Install Dependencies

Install the required Node.js packages defined in `package.json` by running:

```bash
npm install
```

## 4. Create Temporary Directory

Create a `tmp` directory within the project to store temporary files:

```bash
mkdir tmp
```

## 5. Database Reset

Reset the project database to its initial state by running:

```bash
npm run db:reset
```

## 6. Checkout to Your Branch

Create and switch to a new branch for your development work. Replace `[your_name]` with your actual name, removing the brackets:

```bash
git checkout -b L2C-01-[your_name]
```

## 7. Start Development Server

Start the development server to run the project locally:

```bash
npm run dev
```

Your project should now be up and running. Open your web browser and navigate to the provided local server address (usually `http://localhost:3333`) to view the project.

If you encounter any issues during the setup, please review the steps to ensure all instructions were followed correctly. For further assistance, contact the project maintainers or consult the project documentation.
