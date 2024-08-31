import { Router } from "express";

import { adminRoutes } from "./admin.routes";
import { authRoutes } from "./auth.routes";
import { doctorsRoutes } from "./doctors.routes";
import { hospitalsRoutes } from "./hospitals.routes";
import { calledsRoutes } from "./calleds.routes";

const router = Router();

router.use(adminRoutes);
router.use(authRoutes);
router.use(doctorsRoutes);
router.use(hospitalsRoutes);
router.use(calledsRoutes);

export { router };
