//import mongoose
import mongoose, {PassportLocalSchema} from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose.schema
import passportLocalMongoose from 'passport-local-mongoose';

//create a schema that matches the data
const UserSchema = new Schema({
    DisplayName: String,
    username: String,
    EmailAddress: String,
    Created:{
        type: Date,
        default: Date.now()
    },
    Updated:{
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"
});

declare global{
    export type UserDocument = mongoose.Document &
    {
        username: String,
        EmailAddress: String,
        DisplayName: String
    }
}

//plugin the passport local mongoose module
UserSchema.plugin(passportLocalMongoose);

//create model using the schema
const Model = mongoose.model("User", UserSchema as PassportLocalSchema);

//export the model, this makes the file a module
export default Model;