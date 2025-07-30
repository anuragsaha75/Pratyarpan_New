# Project Title: প্রত্যর্পণ

## Overview
"প্রত্যর্পণ" is a full-stack web application designed as a charity platform focused on distributing clothes and supporting children in need. The application allows users to register, donate, and view a gallery of items available for distribution. An admin dashboard is also included for managing donations and users.

## Features
- User registration and authentication
- Donation system integrated with payment processing
- Admin dashboard for managing users and donations
- Gallery section to showcase items available for distribution

## Technology Stack
- **Backend**: Node.js, Express, MongoDB, Mongoose, TypeScript
- **Frontend**: React, TypeScript, Tailwind CSS
- **Payment Processing**: Razorpay
- **Authentication**: Google OAuth and email/password

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables for MongoDB connection and other configurations.
4. Start the server:
   ```
   npm start
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## Directory Structure
```
প্রত্যর্পণ
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middlewares
│   │   ├── services
│   │   ├── utils
│   │   └── app.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── utils
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md
```

## Contribution
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.