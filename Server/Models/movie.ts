//import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose.schema

//create a schema that matches the data
const MovieSchema = new Schema({
    Name: String,
    Year: String,
    Director: String,
    Rating: String
},
{
    collection: "movies"
});

//create model using the schema
const Model = mongoose.model("Movies", MovieSchema);

//export the model, this makes the file a module
export default Model;