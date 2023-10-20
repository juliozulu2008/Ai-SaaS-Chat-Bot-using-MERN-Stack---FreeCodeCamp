import { connect, disconnect } from "mongoose"; // Import Mongoose Package
async function connectToDataBase() {
    // Create async function
    try {
        await connect(process.env.MONGODB_URL); // Connect to MongoDB Atlas
        console.log("====================================");
        console.log("Connected To Mongo ...");
        console.log("====================================");
    }
    catch (error) {
        // Catch errors
        throw new Error("Cannot Connect To Mongo ..." + error);
        console.log("====================================");
        console.log(error); // Log errors
        console.log("====================================");
    }
}
async function DisconnectDataBaseConnection() {
    // Create async function
    try {
        await disconnect(); // DisConnect to MongoDB Atlas
    }
    catch (error) {
        throw new Error("Cannot Connect To Mongo ..." + error); // Catch errors
        console.log("====================================");
        console.log(error); // Log errors
        console.log("====================================");
    }
}
export { connectToDataBase, DisconnectDataBaseConnection }; // Export functions
//# sourceMappingURL=connection.js.map