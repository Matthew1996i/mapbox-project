import { AuthController } from "../../../modules/admin/controllers/auth/auth.controller";
import { Router } from "express";

const authRoutes = Router();

const authController = new AuthController();

authRoutes.post("/sessions", authController.handle);

export { authRoutes };
