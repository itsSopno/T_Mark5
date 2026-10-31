import type { Request, Response } from 'express';
import { LiquidCooler } from '../Models/liquidCooler.model.js';

/**
 * @name createLiquidCoolerController
 * @desc Create one or many liquid cooler documents
 * @access public
 */
export const createLiquidCoolerController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const products = Array.isArray(req.body) ? req.body : [req.body];

        for (const p of products) {
            if (!p.name || !p.image || !p.description) {
                return res.status(400).json({ message: 'Missing required fields (name, image, or description).' });
            }
        }

        const coolers = await LiquidCooler.create(products);
        return res.status(201).json({ success: true, message: 'Liquid cooler(s) created successfully.', coolers });
    } catch (error) {
        console.error('Error creating liquid cooler:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

/**
 * @name getAllLiquidCoolersController
 * @desc Get all liquid coolers with optional brand/search filter
 * @access public
 */
export const getAllLiquidCoolersController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { brand, searchTerm } = req.query;
        const query: Record<string, unknown> = {};

        if (brand) query.brand = brand;
        if (searchTerm) {
            query.$or = [
                { name: { $regex: searchTerm, $options: 'i' } },
                { description: { $regex: searchTerm, $options: 'i' } },
            ];
        }

        const coolers = await LiquidCooler.find(query);
        return res.status(200).json({ success: true, count: coolers.length, coolers });
    } catch (error) {
        console.error('Error fetching liquid coolers:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

/**
 * @name getSingleLiquidCoolerController
 * @desc Get a single liquid cooler by id
 * @access public
 */
export const getSingleLiquidCoolerController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const cooler = await LiquidCooler.findById(id);
        if (!cooler) return res.status(404).json({ message: 'Liquid cooler not found.' });
        return res.status(200).json({ success: true, cooler });
    } catch (error) {
        console.error('Error fetching liquid cooler:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

/**
 * @name updateLiquidCoolerController
 * @desc Update a liquid cooler by id
 * @access public
 */
export const updateLiquidCoolerController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const cooler = await LiquidCooler.findByIdAndUpdate(id, req.body, { new: true });
        if (!cooler) return res.status(404).json({ message: 'Liquid cooler not found.' });
        return res.status(200).json({ success: true, cooler });
    } catch (error) {
        console.error('Error updating liquid cooler:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

/**
 * @name deleteLiquidCoolerController
 * @desc Delete a liquid cooler by id
 * @access public
 */
export const deleteLiquidCoolerController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const cooler = await LiquidCooler.findByIdAndDelete(id);
        if (!cooler) return res.status(404).json({ message: 'Liquid cooler not found.' });
        return res.status(200).json({ success: true, message: 'Liquid cooler deleted successfully.' });
    } catch (error) {
        console.error('Error deleting liquid cooler:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};
