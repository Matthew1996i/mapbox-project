import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { HospitalsController } from "../../../modules/admin/controllers/hospitals/hospitals.controller";

const hospitalsRoutes = Router();

const hospitalsController = new HospitalsController();

hospitalsRoutes.get(
  "/hospitals",
  ensureAuthenticated,
  hospitalsController.handleList
);
hospitalsRoutes.post(
  "/hospitals",
  ensureAuthenticated,
  hospitalsController.handleCreate
);

export { hospitalsRoutes };
