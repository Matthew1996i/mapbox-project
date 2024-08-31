import { Router } from "express";
import { DoctorsController } from "../../../modules/admin/controllers/doctors/doctors.controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const doctorsRoutes = Router();

const doctorsController = new DoctorsController();

doctorsRoutes.get(
  "/doctors",
  ensureAuthenticated,
  doctorsController.handleList
);
doctorsRoutes.post(
  "/doctors",
  ensureAuthenticated,
  doctorsController.handleCreate
);

export { doctorsRoutes };
