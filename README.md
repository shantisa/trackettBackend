# Trackett Backend
This repository contains the backend code for the Trackett job application 
tracker software. The backend is responsible for handling user data, authentication, 
and communication with the MongoDB database.

## Author
* Shantisa Strowder

## Technologies Used
- Node.js
- Express.js
- Mongoose (MongoDB ODM)
- MongoDB

## Getting Started
To set up and run the backend locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies using `npm install`.
4. Start the server using `npm start`.

Make sure to have a MongoDB instance running, as the backend connects to it for data storage.

## Project Structure
The project is organized as follows:

- `server/`: Contains the server configuration and main application code.
  - `controller/`: Includes controller functions for user management.
  - `database/`:
    - `models/`: Contains Mongoose models for database interactions.
    - `schemas/`: Contains Mongoose schemas for defining data structures.
  - `server.js`: Main server setup.

## Available Endpoints

- `POST /createAccount`: Create a new user account.
- `POST /userAccount`: Authenticate a user's login.

## License
This project is licensed under the [MIT License](LICENSE).

Feel free to reach out to the author at [shantisastrowder1@gmail.com](mailto:shantisastrowder1@gmail.com) if you have any questions or feedback.
