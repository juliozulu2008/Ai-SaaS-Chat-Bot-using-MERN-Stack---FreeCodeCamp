import express from "express"; // Import express
import { config } from "dotenv"; // Import dotenv
config(); // Configure dotenv
const app = express(); // Create express app
// Middleware
app.use(express.json()); // Use express to parse JSON
export default app;
//# sourceMappingURL=app.js.map