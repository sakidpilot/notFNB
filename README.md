[Video Tutorial](https://youtu.be/V36-nT_XqXU)

# MERN Banking Application

This is a simple banking application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to sign up, log in, and make payments. All routes (except for signup) are protected and require user authentication.

## Features
- **User Registration**: Capture user details like name, ID number, account number, email, and password.
- **User Login**: Users can log in using their name, account number, and password.
- **Authentication**: Tokens are assigned on successful login, stored in `localStorage` for authenticated routes.
- **Payments**: Authenticated users can make payments with inputs of amount, currency, provider, account number, and code.
- **Logout**: Users can log out, which clears their authentication token and redirects them to the welcome page.
- **Protected Routes**: Payments and other routes are protected and can only be accessed by authenticated users.

## Technologies Used
- **Frontend**: React, Axios, CSS
- **Backend**: Node.js, Express.js, JWT (for authentication)
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Getting Started

### Prerequisites
Ensure that you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (either local or Atlas for cloud database)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/fnbapp.git
   cd fnbapp
   ```

2. **Backend Setup:**

   Navigate to the `server` folder and install the dependencies:

   ```bash
   cd server
   npm install
   ```

   Create a `.env` file in the `server` folder and add the following:

   ```env
   PORT=5000
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   ```

   Start the backend server:

   ```bash
   npm run server
   ```

3. **Frontend Setup:**

   Navigate to the `client` folder and install the dependencies:

   ```bash
   cd ../client
   npm install
   ```

   Start the React app:

   ```bash
   npm start
   ```

   The frontend will now be running on [http://localhost:3000](http://localhost:3000).

### Running the Application

- **Backend**: By default, the Express backend will run on [http://localhost:5000](http://localhost:5000).
- **Frontend**: React will run on [http://localhost:3000](http://localhost:3000).

### API Endpoints

| Method | Endpoint           | Description                           |
|--------|--------------------|---------------------------------------|
| POST   | `/register`         | Register a new user                   |
| POST   | `/login`            | Log in a user and receive a JWT token |
| POST   | `/logout`           | Log out a user                        |
| GET    | `/payments`         | Get all user payments (protected)     |
| POST   | `/payments`         | Add a new payment (protected)         |

### Available Scripts

In the project directory, you can run:

#### Frontend:
- `npm start`: Runs the app in the development mode.<br>
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- `npm run build`: Builds the app for production to the `build` folder.<br>

#### Backend:
- `npm run server`: Starts the backend with `nodemon` for live reloading.

### Environment Variables

- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for signing JWT tokens.
- `PORT`: Port number on which the backend will run.

### Authentication Flow

- **Sign Up**: Users register by sending their details to the `/register` endpoint.
- **Login**: Users log in with their credentials (name, account number, and password) to receive a JWT token.
- **Authenticated Requests**: All protected routes require a valid JWT token to be sent in the `Authorization` header.
- **Logout**: Users can log out, which clears the token from `localStorage` and redirects them to the welcome page.

### Folder Structure

```bash
mern-banking-app/
 ├── client/              # Frontend React code
 │   ├── src/
 │   ├── public/
 │   └── package.json
 ├── server/              # Backend Express.js code
 │   ├── models/          # Mongoose models
 │   ├── routes/          # API routes
 │   ├── controllers/     # Route logic
 │   ├── middleware/      # Authentication middleware (JWT)
 │   └── package.json
 ├── README.md            # Project documentation
 └── .gitignore           # Git ignore file
```

### Security Considerations

- **JWT Storage**: Tokens are stored in `localStorage`. This is fine for simple applications, but in a production environment, consider using `httpOnly` cookies for added security.
- **HTTPS**: Ensure your application is served over HTTPS in production to secure all communication between the client and server.

  
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.