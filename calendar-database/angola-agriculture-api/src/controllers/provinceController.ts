// Import necessary modules from express and the database pool
import { Request, Response } from 'express';
import pool from '../config/database';

// Controller function to get all provinces
export const getAllProvinces = async (req: Request, res: Response): Promise<void> => {
  try {
    // SQL query to select province details from the 'agriculture.provinces' table
    const query = `
      SELECT 
        province_id,
        province_code,
        province_name
      FROM 
        agriculture.provinces
      ORDER BY 
        province_name ASC
    `;
    
    // Execute the query using the connection pool
    const result = await pool.query(query);
    
    // Send a successful JSON response with the fetched data
    res.json({
      success: true,
      data: result.rows,
      count: result.rows.length
    });
  } catch (error) {
    // Log any errors to the console
    console.error('Error fetching provinces:', error);
    
    // Send an error response if something goes wrong
    res.status(500).json({
      success: false,
      message: 'Error fetching provinces',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
