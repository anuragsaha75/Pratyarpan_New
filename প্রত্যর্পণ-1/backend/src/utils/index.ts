import { Request, Response } from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Utility function to generate a receipt
const generateReceipt = (donationDetails: any) => {
  const { donorName, amount, date } = donationDetails;
  return `
    Receipt for Donation
    ---------------------
    Donor Name: ${donorName}
    Amount: ${amount}
    Date: ${date}
  `;
};

export { upload, generateReceipt };