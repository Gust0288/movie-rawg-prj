import cors from "cors";
import express from "express";
import dbConnection from "./dbConnection";
import setupRouters from "./setupRouters";

const init = async (app: express.Application) => {
  app.use(express.json()); // Middleware to parse JSON request bodies
  app.use(cors());

  await dbConnection(); // Initialize database connection and wait for it

  setupRouters(app);
};

export default init;