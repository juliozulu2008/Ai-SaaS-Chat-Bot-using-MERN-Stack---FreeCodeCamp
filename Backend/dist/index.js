import express from "express"; // Import express
const app = express(); // Create express app
// GET -
// PUT -
// POST -
// DELETE -
app.get("/", (req, res, next) => {
    res.send("Hello World"); // Send response
});
app.listen(5000, () => console.log("Server running on port 5000")); // Start server on port 5000
//# sourceMappingURL=index.js.map