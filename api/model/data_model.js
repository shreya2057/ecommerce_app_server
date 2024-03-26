import mongoose from "mongoose";

// Schema -> A schema is a way to define the structure of documents within
//           a collection.
//           It provides a blueprint for the data, including the shape of
//           the documents, the types of fields, and any constraints or
//           validations that should be applied.

const data_schema = mongoose.Schema({
  data: String,
});

// Model -> A model is a constructor function that provides an interface to
//          interact with a MongoDB collection.

// Data is the constructor function
// mongoose.model('Model_name', schema_name)
// Model_name -> name assigned to collection
const Data = mongoose.model("Data", data_schema);

export default Data;
