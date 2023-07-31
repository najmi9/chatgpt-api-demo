# ChatGPT API Demo

This repository contains the source code for a simple web application that demonstrates how to use the ChatGPT API to create an interactive chatbot.

## Overview

The application consists of a server-side application built with Node.js and Express, and a client-side application built with React. The server-side application handles interactions with the ChatGPT API, while the client-side application provides a user interface for users to interact with the chatbot.

## Requirements

- Docker & Docker-compose
- Node.js
- React JS
- OpenAI account for API key

## Setup

1. Clone this repository to your local machine.

```bash
git clone https://github.com/yourusername/chatgpt-api-demo.git
```

Navigate to the cloned repository.

```bash
cd chatgpt-api-demo
```

Install the dependencies for the server-side application.

```bash
cd chatgpt-api-server
npm install
```

Install the dependencies for the client-side application.

```bash
cd ../chatgpt-api-client
npm install
```

Create a .env file in the chatgpt-api-server directory and add your OpenAI API key.

```bash
OPENAI_API_KEY=your_openai_api_key
```

Start the application using Docker.

```bash
cd ..
docker-compose up
```
The client-side application will be available at http://localhost:3000, and the server-side application will be available at http://localhost:5000.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Just replace `yourusername` with your actual GitHub username. This README provides a brief overview of the project, lists the requirements, and provides step-by-step instructions for setting up and running the application.
