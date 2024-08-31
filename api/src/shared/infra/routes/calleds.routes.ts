import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CalledsController } from "../../../modules/admin/controllers/calleds/calleds.controller";

const calledsRoutes = Router();

const calledsController = new CalledsController();

calledsRoutes.get(
  "/calleds",
  ensureAuthenticated,
  calledsController.handleList
);
calledsRoutes.post(
  "/calleds",
  ensureAuthenticated,
  calledsController.handleCreate
);

export { calledsRoutes };
