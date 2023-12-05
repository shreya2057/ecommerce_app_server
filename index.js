import express from "express";
import mongoDB_connection from "./mongodb/connection.js";

const app = express();
const port = 8000;

mongoDB_connection();

app.get('/',(req, res)=>{
    res.send("Hello world");
});

app.listen(port, ()=>console.log(`Server listening to the port ${port}`));