import express from "express"; // Import express
const app = express(); // Create express app
// Middleware
app.use(express.json()); // Use express to parse JSON
// Start server
app.listen(5000, () => console.log("Server running on port 5000")); // Start server on port 5000
//# sourceMappingURL=index.js.map