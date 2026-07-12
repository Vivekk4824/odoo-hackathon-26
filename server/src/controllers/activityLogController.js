import asyncHandler from "express-async-handler";

import ActivityLog from "../models/ActivityLog.js";

export const getActivityLogs = asyncHandler(async (req, res) => {
    const logs = await ActivityLog.find()
        .populate("user", "name email role")
        .sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        count: logs.length,
        logs,
    });
});