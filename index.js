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

const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use(bodyParser.json());

// app.use() -> The function that is used to add middleware function in
//              the application.
app.use("/data", data_routes);
app.use("/auth", auth_routes);

// Handling routes that does not exist
app.use((_, res) => res.json({ message: "Page not found", status: 404 }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.listen() -> The function that binds and listen to connections
//                 on specified host and port.
app.listen(port, () => console.log(`Server listening to the port ${port}`));
