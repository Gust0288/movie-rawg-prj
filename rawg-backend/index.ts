import express from "express";
import init from "./startup/init";

const app = express();

const startServer = async () => {
  try {
    await init(app);
    
    app.get("/", (req, res) => {
      res.send("Hello, World!");
    });

    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();