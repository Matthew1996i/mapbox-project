import express from "express";
import "reflect-metadata";
import "dotenv/config";
import "./shared/infra/container";
import cors from "cors";
import { router } from "./shared/infra/routes/index";

const server = express();
const options: cors.CorsOptions = {
  origin: "*",
};

server.use(express.json());

server.use(cors(options));
server.use(router);

export default server;
