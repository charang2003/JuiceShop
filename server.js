import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

dotenv.config();
const app = express();
connectDB();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
