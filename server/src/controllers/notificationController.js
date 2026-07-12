import asyncHandler from "express-async-handler";

import Notification from "../models/Notification.js";

export const getNotifications = asyncHandler(async (req, res) => {
    const notifications = await Notification.find({
        user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        count: notifications.length,
        notifications,
    });
});

export const markAsRead = asyncHandler(async (req, res) => {
    const notification = await Notification.findById(req.params.id);

    if (!notification) {
        res.status(404);
        throw new Error("Notification not found");
    }

    if (
        notification.user.toString() !==
        req.user._id.toString()
    ) {
        res.status(403);
        throw new Error("Unauthorized");
    }

    notification.isRead = true;

    await notification.save();

    res.status(200).json({
        success: true,
        message: "Notification marked as read",
        notification,
    });
});

export const deleteNotification = asyncHandler(async (req, res) => {
    const notification = await Notification.findById(req.params.id);

    if (!notification) {
        res.status(404);
        throw new Error("Notification not found");
    }

    if (
        notification.user.toString() !==
        req.user._id.toString()
    ) {
        res.status(403);
        throw new Error("Unauthorized");
    }

    await notification.deleteOne();

    res.status(200).json({
        success: true,
        message: "Notification deleted successfully",
    });
});