import ActivityLog from "../models/ActivityLog.js";

const createActivityLog = async ({
    user,
    action,
    module,
    description = "",
    ipAddress = "",
}) => {
    await ActivityLog.create({
        user,
        action,
        module,
        description,
        ipAddress,
    });
};

export default createActivityLog;