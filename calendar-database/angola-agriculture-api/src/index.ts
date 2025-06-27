import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import farmRoutes from './routes/farmRoutes';
import provinceRoutes from './routes/provinceRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Angola Agriculture API is running',
    timestamp: new Date().toISOString() 
  });
});

// Basic API route
app.get('/api/v1/test', (req, res) => {
  res.json({ 
    message: 'Angola Agriculture API Test Route',
    database: 'Connected to angola_agriculture'
  });
});

// Farm routes
app.use('/api/v1/farms', farmRoutes);

// Province routes
app.use('/api/v1/provinces', provinceRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Farm API: http://localhost:${PORT}/api/v1/farms`);
});
