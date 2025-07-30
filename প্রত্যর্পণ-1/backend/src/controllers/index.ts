import { Request, Response } from 'express';
import User from '../models/User';
import Donation from '../models/Donation';
import GalleryItem from '../models/GalleryItem';

// User Registration Controller
export const registerUser = async (req: Request, res: Response) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Donation Controller
export const createDonation = async (req: Request, res: Response) => {
    try {
        const donation = new Donation(req.body);
        await donation.save();
        res.status(201).send(donation);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Gallery Management Controller
export const addGalleryItem = async (req: Request, res: Response) => {
    try {
        const galleryItem = new GalleryItem(req.body);
        await galleryItem.save();
        res.status(201).send(galleryItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all gallery items
export const getGalleryItems = async (req: Request, res: Response) => {
    try {
        const items = await GalleryItem.find();
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error);
    }
};