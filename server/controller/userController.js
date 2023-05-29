let User = require('../database/models/userModel');
const mongoose = require('mongoose');
let bodyParser = require('body-parser');
const express = require('express')
const app = express()
const userController = express.Router();

/* Using body-parser for Post */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**
 * Add a new User to database
 */
userController.post('/createAccount', async function (req, res) {
        let firstName = req.body.first;
        let lastName = req.body.last;
        let email = req.body.email;
        let password = req.body.password;
        let confirm = req.body.confirm;
        let valid = true;

        let result = {}
        if (firstName.length === 0) {
            result.fnError = "Please provide your first name";
            valid = false;
        }
        if (lastName.length === 0) {
            result.lnError = "Please provide your last name";
            valid = false;
        }
        if (!email.match(/^\S+@\S+\.\S+$/)) {
            result.emailError = "Please provide a valid email";
            valid = false;
        } else if (await User.exists({email: email})) {
            result.emailError = "Email address is already taken";
            valid = false;
        }
        if (password.length < 8) {
            result.pwdError = "Password must be 8 characters or more";
            valid = false;
        }
        if (password !== confirm) {
            result.pwdrError = "Password do not match";
            valid = false;
        }
        if (valid) {
            const userData = {firstName, lastName, email, password};
            const newUser = new User(userData);
            newUser.save(function (err, data) {
                if (err) {
                    console.error(err);
                    res.status(400).json({message: "Failed to create user"});
                } else {
                    res.json({message: "User Created Successfully"});
                    console.log(data);
                }
            });
        } else {
            return res.status(400).json(result);
        }
    }
);

userController.post('/userAccount', async function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let valid = true;
    let result = {};

    if (!email.match(/^\S+@\S+\.\S+$/)) {
            result.emailError = "Please provide a valid email";
            valid = false;
    }
    if (password.length < 8) {
            result.pwdError = "Password must be 8 characters or more";
            valid = false;
    }
    if(valid){
            User.find({$and: [{email: email}, {password: password}]}, function(err, data) {
                if(err || data.length < 1){
                    console.error(err);
                    res.status(400).json({pwdError: "Username and/or Password is incorrect"});
                } else{
                    res.json({message: "User Login Successfully"});
                    console.log(data);
                }
            });
        } else {
        return res.status(400).json(result);
    }
}
);

module.exports = userController;