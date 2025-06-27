// Import the express module to create a router
import express from 'express';
// Import the controller function for getting all provinces
import {
  getAllProvinces
} from '../controllers/provinceController';

// Create a new router instance
const router = express.Router();

// Define the route for getting all provinces
// GET /api/v1/provinces
router.get('/', getAllProvinces);

// Export the router to be used in other parts of the application
export default router;
