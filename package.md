# Description of the packages

This file consists of the description of the packages and libraries used in this project.

## Express
Express.js is a popular web application framework for Node.js, designed to make it easier to build web applications and APIs.

<u>Installing Express</u>

```
$ npm install express
```

<u>Importing express</u>

```
$ const express = require("express")

# If package.json file consists of "type": "module"
$ import express from "express"
```

## Mongoose
Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. Mongoose simplifies the interaction with MongoDB databases by providing a schema-based solution and additional features.

<u>Installing mongoose</u>

```
$ npm install mongoose
```

## dotenv
dotenv is a popular npm package in the Node.js ecosystem that allows to load environment variables from a .env file into the process.env object. This is particularly useful for storing configuration settings and sensitive information in Node.js applications without hardcoding them into the code. The process.env object in Node.js provides access to the user environment. It is a global object that contains information about the environment in which the process is running, including system-specific details and user-defined environment variables.

<u>Installing mongoose</u>

```
$ npm install dotenv
```

<u>Using dotenv</u>

```
import dotenv from "dotenv";

dotenv.config();
const variable = process.env.env_variable_name;
```

## Cors

CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the original web page. CORS issues may encounter while building a web application with an API on a different domain.

Express provides the cors middleware to handle CORS headers and enable cross-origin requests.

<u>Installing cors</u>

```
npm install cors
```

<u>Using cors</u>

```
app.use(cors());
```