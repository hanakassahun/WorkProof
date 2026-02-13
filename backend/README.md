# WorkProof Backend

## Overview
This is the backend server for the WorkProof application. It is built using Node.js and Express, and it connects to a MongoDB database using Mongoose.

## Project Structure
```
backend
├── package.json
├── .gitignore
├── .env.example
├── server.js
├── app.js
├── config
│   └── db.js
├── models
│   ├── Project.js
│   └── User.js
├── routes
│   ├── projects.js
│   └── users.js
├── controllers
│   ├── projectController.js
│   └── userController.js
└── README.md
```

## Setup Instructions

1. **Clone the repository**
   ```
   git clone https://github.com/hanakassahun/WorkProof.git
   cd WorkProof/backend
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure environment variables**
   - we have `.env` and update the MongoDB connection string.

4. **Run the server**
   ```
   node server.js
   ```

## API Endpoints

- **GET /projects**: Retrieve a list of all projects.
- **GET /users**: Retrieve a list of all users.

## License
This project is licensed under the MIT License.