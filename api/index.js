import express from "express";
import mongoDB_connection from "./mongodb/connection.js";
import data_routes from "./router/data.js";
import auth_routes from "./router/auth.js";
import cors from "cors";

import bodyParser from "body-parser";

const app = express();
const port = 8000;

// MongoDB Connection
mongoDB_connection();

app.use(cors());
app.use(bodyParser.json());

// app.use() -> The function that is used to add middleware function in
//              the application.
app.use("/data", data_routes);
app.use("/auth", auth_routes);
app.get("/", (req, res) => res.send("server running"));

// Handling routes that does not exist
app.use((_, res) => res.json({ message: "Page not found", status: 404 }));

// app.listen() -> The function that binds and listen to connections
//                 on specified host and port.
app.listen(port, () => console.log(`Server listening to the port ${port}`));
