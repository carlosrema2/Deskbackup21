const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username: {
        type: String,
        trim:true,
        required: "String is Requiere"
    },
    email: {
        type:String,
        match: [/.+\@.+\..+/, "Please enter a valid email"]
    },  
    password: {
        type:String,
       
    },
    firstName: {
        type: String,
        trim:true,
        required: "String is Requiere"
    },
    lastName: {
        type: String,
        trim:true,
        required: "String is Requiere"
    },
    setFullName: {
        type: String,
        trim:true,
        required: "String is Requiere"
    }
  
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
