import { Donation, User, GalleryItem } from '../models';
import { Request, Response } from 'express';

// Function to handle user registration
export const registerUser = async (req: Request, res: Response) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Function to handle donations
export const createDonation = async (req: Request, res: Response) => {
    try {
        const donation = new Donation(req.body);
        await donation.save();
        res.status(201).send(donation);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Function to get all gallery items
export const getGalleryItems = async (req: Request, res: Response) => {
    try {
        const items = await GalleryItem.find();
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Function to add a new gallery item
export const addGalleryItem = async (req: Request, res: Response) => {
    try {
        const item = new GalleryItem(req.body);
        await item.save();
        res.status(201).send(item);
    } catch (error) {
        res.status(400).send(error);
    }
};