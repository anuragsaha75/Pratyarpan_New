# Project Title: প্রত্যর্পণ

## Overview
"প্রত্যর্পণ" is a full-stack web application designed as a charity platform focused on distributing clothes and supporting children in need. The application allows users to register, donate, and view a gallery of items available for distribution. An admin dashboard is also included for managing donations and users.

## Features
- User registration and authentication
- Donation system with payment processing
- Admin dashboard for managing users and gallery items
- Gallery section to display available items for distribution

## Technology Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Payment Processing**: Razorpay
- **Authentication**: Google OAuth, Email

## Setup Instructions

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open your browser and go to `http://localhost:3000`.

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   npm run dev
   ```
4. Ensure MongoDB is running and connected.

## Directory Structure
```
প্রত্যর্পণ
├── backend
│   ├── src
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── src
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md
```

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.