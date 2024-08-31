import { Router } from "express";
import { UserController } from "../../../modules/admin/controllers/users/users.controller";

const adminRoutes = Router();

const userController = new UserController();

adminRoutes.post("/user", userController.handleCreate);

export { adminRoutes };
