import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'

dotenv.config();

console.log("MongoDB connection string:", process.env.MONGO);

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log("Connected to MongoDB!");
   })
   .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
   });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


app.use((err, req, res, next) => {
   const statusCode = err.statusCode || 500; // Default to 500 if statusCode is not defined
   const message = err.message || 'Internal Server Error'; // Default message to Internal Server Error if not defined
   res.status(statusCode).json({
       success: false,
       statusCode,
       message,
   });
});