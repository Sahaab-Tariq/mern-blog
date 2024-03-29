import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'

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

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use('/api/user', userRoutes);