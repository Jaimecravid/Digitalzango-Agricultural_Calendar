import express from 'express';
import {
  getAllFarms,
  getFarmById,
  createFarm,
  updateFarm,
  deleteFarm
} from '../controllers/farmController';

const router = express.Router();

// GET /api/v1/farms - Get all farms
router.get('/', getAllFarms);

// GET /api/v1/farms/:id - Get farm by ID
router.get('/:id', getFarmById);

// POST /api/v1/farms - Create new farm
router.post('/', createFarm);

// PUT /api/v1/farms/:id - Update farm
router.put('/:id', updateFarm);

// DELETE /api/v1/farms/:id - Delete farm (soft delete)
router.delete('/:id', deleteFarm);

export default router;
