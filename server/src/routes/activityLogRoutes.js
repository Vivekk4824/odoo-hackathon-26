import express from "express";

import { getActivityLogs } from "../controllers/activityLogController.js";

import auth from "../middleware/auth.js";
import role from "../middleware/role.js";

const router = express.Router();

router.get(
    "/",
    auth,
    role("Admin"),
    getActivityLogs
);

export default router;