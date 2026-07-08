require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");





const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes"); // ✅ HERE



const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

//All Routes 
app.use("/api/auth", authRoutes); //  Routes added here
app.use("/api/users", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;

// Start server safely
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed:", error.message);
  }
};

startServer();