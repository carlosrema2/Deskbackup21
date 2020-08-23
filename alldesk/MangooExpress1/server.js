const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const User = require("./userModel.js");
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

const body ={
    username: "Paul",
    password: "passww+",
    email: "email5@gmail.com",
    firstName:"Paul",
    lastName: "Paul",
    setFullName: this.firstName + this.lastName
};

User.create(body)
.then(dbUser => {
    console.log(dbUser);
})
.catch(err => {
    console.log(err);
});
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});