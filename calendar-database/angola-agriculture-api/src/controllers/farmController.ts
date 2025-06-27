import { Request, Response } from 'express';
import pool from '../config/database';

// Get all farms
export const getAllFarms = async (req: Request, res: Response): Promise<void> => {
  try {
    const query = `
      SELECT 
        f.farm_id,
        f.farm_name,
        f.owner_name,
        f.farm_size_hectares,
        f.elevation_meters,
        f.soil_type,
        f.water_source,
        f.contact_phone,
        f.contact_email,
        f.is_active,
        f.created_at,
        p.province_name,
        ST_X(f.location) as longitude,
        ST_Y(f.location) as latitude
      FROM agriculture.farms f
      LEFT JOIN agriculture.provinces p ON f.province_id = p.province_id
      WHERE f.is_active = true
      ORDER BY f.created_at DESC
    `;
    
    const result = await pool.query(query);
    res.json({
      success: true,
      data: result.rows,
      count: result.rows.length
    });
  } catch (error) {
    console.error('Error fetching farms:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching farms',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Get farm by ID
export const getFarmById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    const query = `
      SELECT 
        f.farm_id,
        f.farm_name,
        f.owner_name,
        f.farm_size_hectares,
        f.elevation_meters,
        f.soil_type,
        f.water_source,
        f.contact_phone,
        f.contact_email,
        f.registration_number,
        f.is_active,
        f.created_at,
        f.updated_at,
        p.province_name,
        p.province_code,
        ST_X(f.location) as longitude,
        ST_Y(f.location) as latitude
      FROM agriculture.farms f
      LEFT JOIN agriculture.provinces p ON f.province_id = p.province_id
      WHERE f.farm_id = $1
    `;
    
    const result = await pool.query(query, [id]);
    
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'Farm not found'
      });
      return;
    }
    
    res.json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error fetching farm:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching farm',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Create new farm
export const createFarm = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      farm_name,
      owner_name,
      province_id,
      longitude,
      latitude,
      farm_size_hectares,
      elevation_meters,
      soil_type,
      water_source,
      contact_phone,
      contact_email,
      registration_number
    } = req.body;

    // Validate required fields
    if (!farm_name || !longitude || !latitude) {
      res.status(400).json({
        success: false,
        message: 'Farm name, longitude, and latitude are required'
      });
      return;
    }

    const query = `
      INSERT INTO agriculture.farms (
        farm_name, owner_name, province_id, location, 
        farm_size_hectares, elevation_meters, soil_type, 
        water_source, contact_phone, contact_email, registration_number
      ) VALUES (
        $1, $2, $3, ST_SetSRID(ST_MakePoint($4, $5), 4326),
        $6, $7, $8, $9, $10, $11, $12
      ) RETURNING farm_id, farm_name, owner_name, created_at
    `;

    const values = [
      farm_name,
      owner_name,
      province_id,
      longitude,
      latitude,
      farm_size_hectares,
      elevation_meters,
      soil_type,
      water_source,
      contact_phone,
      contact_email,
      registration_number
    ];

    const result = await pool.query(query, values);
    
    res.status(201).json({
      success: true,
      message: 'Farm created successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error creating farm:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating farm',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Update farm
export const updateFarm = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const {
      farm_name,
      owner_name,
      province_id,
      longitude,
      latitude,
      farm_size_hectares,
      elevation_meters,
      soil_type,
      water_source,
      contact_phone,
      contact_email,
      registration_number,
      is_active
    } = req.body;

    const query = `
      UPDATE agriculture.farms SET
        farm_name = COALESCE($1, farm_name),
        owner_name = COALESCE($2, owner_name),
        province_id = COALESCE($3, province_id),
        location = CASE 
          WHEN $4 IS NOT NULL AND $5 IS NOT NULL 
          THEN ST_SetSRID(ST_MakePoint($4, $5), 4326)
          ELSE location 
        END,
        farm_size_hectares = COALESCE($6, farm_size_hectares),
        elevation_meters = COALESCE($7, elevation_meters),
        soil_type = COALESCE($8, soil_type),
        water_source = COALESCE($9, water_source),
        contact_phone = COALESCE($10, contact_phone),
        contact_email = COALESCE($11, contact_email),
        registration_number = COALESCE($12, registration_number),
        is_active = COALESCE($13, is_active),
        updated_at = CURRENT_TIMESTAMP
      WHERE farm_id = $14
      RETURNING farm_id, farm_name, owner_name, updated_at
    `;

    const values = [
      farm_name,
      owner_name,
      province_id,
      longitude,
      latitude,
      farm_size_hectares,
      elevation_meters,
      soil_type,
      water_source,
      contact_phone,
      contact_email,
      registration_number,
      is_active,
      id
    ];

    const result = await pool.query(query, values);
    
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'Farm not found'
      });
      return;
    }
    
    res.json({
      success: true,
      message: 'Farm updated successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error updating farm:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating farm',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Delete farm (soft delete)
export const deleteFarm = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    const query = `
      UPDATE agriculture.farms 
      SET is_active = false, updated_at = CURRENT_TIMESTAMP
      WHERE farm_id = $1
      RETURNING farm_id, farm_name
    `;
    
    const result = await pool.query(query, [id]);
    
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: 'Farm not found'
      });
      return;
    }
    
    res.json({
      success: true,
      message: 'Farm deleted successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error deleting farm:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting farm',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
