//import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose.schema

//create a schema that matches the data
const ContactSchema = new Schema({
    Name: String,
    Number: String,
    Email: String,
},
{
    collection: "bcontacts"
});

//create model using the schema
const Model = mongoose.model("Movies", ContactSchema);

//export the model, this makes the file a module
export default Model;