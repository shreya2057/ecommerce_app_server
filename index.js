import express from "express";
import mongoDB_connection from "./mongodb/connection.js";
import data_routes from "./router/data.js"
import cors from "cors"

const app = express();
const port = 8000;

// MongoDB Connection
mongoDB_connection();

app.use(cors());
app.use(express.json())

// app.use() -> The function that is used to add middleware function in 
//              the application.
app.use('/data', data_routes);

// app.listen() -> The function that binds and listen to connections
//                 on specified host and port.
app.listen(port, ()=>console.log(`Server listening to the port ${port}`));