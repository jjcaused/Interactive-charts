# Interactive Data Visualization Dashboard

The objective of this project is to create a data visualization dashboard using the given JSON data. The JSON data is retrieved from a MongoDB database using an API through Node.js. The dashboard features interactive graphs, charts, and visuals utilizing the Chart.js library. The web app is built using the MERN stack (MongoDB, Express.js, React, and Node.js).

## Features

- Interactive graphs and charts.
- Data retrieval from MongoDB via Node.js API.
- Various data visualization types using Chart.js.
- Easy navigation through the dashboard to view different data charts.
- Interactive elements to filter and select specific data.

## Live Demo

- [Frontend](https://interactive-charts-frontend.vercel.app/)
- [Backend API](https://interactive-charts.vercel.app/)

## Technology Stack

- **MongoDB:** Database to store and retrieve JSON data.
- **Express.js:** Backend framework to build API endpoints.
- **React:** Frontend library to build the user interface.
- **Node.js:** Runtime environment to execute backend JavaScript code.
- **Chart.js:** Library for creating interactive charts and visuals.

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance (local or cloud-based).

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/interactive-charts.git
    cd interactive-charts
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:

    ```
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/Importing_DB?retryWrites=true&w=majority
    ```

4. Start the server:

    ```bash
    npm start
    ```

   The server will run on `http://localhost:3001`.

### Frontend Setup

1. Navigate to the `client` directory:

    ```bash
    cd client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

   The frontend will run on `http://localhost:3000`.

## Usage

Navigate through the dashboard to view different charts of the data. You can interact with the charts to filter and see specific data points. 

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contact

For any inquiries or questions, feel free to contact me at [your email address].

