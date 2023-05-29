import userModel from "../models/userModel";
import {Schema} from "mongoose";
const mongoose = require('mongoose');

/* Create Company Schema (reference user model)*/
const companySchema = new mongoose.Schema({
   email: [{type: Schema.Types.ObjectId, ref: 'userModel'}],
    companyName: {type: String},
    jobTitle: {type: String},
    appliedDate: {type: Date}
});

module.exports = companySchema;