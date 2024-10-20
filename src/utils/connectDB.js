import mongoose from "mongoose";

async function ConnectDB() {
    try {
        if (mongoose.connection.readyState) return;
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connect DB");
    } catch (error) {
        console.error(error.message);
        console.log("Error Connect DB");
    }
}

export default ConnectDB;
