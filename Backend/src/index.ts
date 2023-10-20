import app from "./app.js";
import { connectToDataBase } from "./db/connection.js";

const PORT = process.env.PORT || 5000; // Create port

//Connect to database and Listeneres
connectToDataBase()
  .then(() => {
    // Start server
    app.listen(PORT, () => console.log("Server running ... on port 5000")); // Start server on port 5000
  })
  .catch((err) => console.log(err));
