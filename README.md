# Pizza Management System

## Overview

The Pizza Management System is a web application designed to manage ingredients, and streamline the process of customizing and creating pizzas with specific toppings. Built with a Flask backend and React frontend, this system offers an intuitive interface for managing pizza varieties and toppings while providing a robust API for integration with other applications.

## Features
- **Custom Pizza Creation:** Easily create pizzas with chosen toppings.
- **Topping Management:** Add, edit, and delete available toppings for pizzas.
- **User-Friendly Interface:** A simple UI for managing pizzas and toppings.
- **Automated Testing:** Test suite to ensure reliability of key functionalities.

## Live Demo
 [Pizza Management System on Vercel](https://pizza-management-five.vercel.app/)


## Technologies Used

- **Frontend:** React, Vite, JavaScript
- **Backend:** Flask, SQLAlchemy, Flask-Marshmallow, Python
- **Testing:** Pytest for backend, and MySQL & Insomnia for API

## Setup
Prerequisites
- Node.js and npm
- Python 3
- MySQL (for development)
- PostgreSQL (for production, hosted on Render)

## Getting Started
#### Clone the repository
```bash
git clone <repository-url>
cd PizzaManagementSystem
```
Backend Setup
Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

Install dependencies:
```bash
pip install -r requirements.txt
```

Set up the MySQL Database for local development:
Run initial migrations (if applicable).

Run the application:
```bash
flask run / python app.py
The backend will start at http://localhost:5000.
```

Frontend Setup
Navigate to the frontend directory:
```bash
cd ../frontend
```

Install dependencies:
```bash
npm install
```

Run the application:
```bash
npm start
