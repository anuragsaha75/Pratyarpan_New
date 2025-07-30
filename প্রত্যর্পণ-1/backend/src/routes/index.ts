import { Router } from 'express';
import { registerUser, loginUser, makeDonation, getGalleryItems } from '../controllers';

const router = Router();

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

// Donation route
router.post('/donate', makeDonation);

// Gallery items route
router.get('/gallery', getGalleryItems);

export default router;