import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';
// Load environment variables
dotenv.config();
const app = express();
// CORS configuration for production
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
}));
// Middleware
app.use(express.json());
// Health check endpoint
app.get('/health', async (req, res) => {
    try {
        // Basic health check
        const healthData = {
            status: 'OK',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            environment: process.env.NODE_ENV || 'development'
        };
        res.status(200).json(healthData);
    }
    catch (error) {
        res.status(500).json({
            status: 'ERROR',
            timestamp: new Date().toISOString(),
            error: 'Health check failed'
        });
    }
});
// Root endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'SMEease Backend API is running!',
        status: 'OK',
        timestamp: new Date().toISOString()
    });
});
// Routes
app.use('/api', routes);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map