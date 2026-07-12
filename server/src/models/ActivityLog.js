import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        action: {
            type: String,
            required: true,
            trim: true,
        },

        module: {
            type: String,
            enum: [
                "Authentication",
                "Department",
                "Category",
                "Employee",
                "Asset",
                "Allocation",
                "Booking",
                "Maintenance",
                "Audit",
            ],
            required: true,
        },

        description: {
            type: String,
            default: "",
        },

        ipAddress: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("ActivityLog", activityLogSchema);