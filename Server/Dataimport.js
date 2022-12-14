import express from "express";
import users from "./data/users.js";
import User from "./Models/UserModel.js";
import asyncHandler from "express-async-handler"
import Employess from "./Models/EmplaoyeeModel.js";
import employess from "./data/employess.js";

const ImportData = express.Router()

ImportData.post("/user", asyncHandler(async (req, res) => {
    await User.remove({})
    const importUser = await User.insertMany(users);
    res.send({ importUser });
}));


// Get all Infomation

ImportData.post("/empo", asyncHandler(async(req,res)=>{
    await Employess.remove({})
    const importEmployee = await Employess.insertMany(employess);
    res.send({
        importEmployee
    })
}))

export default ImportData;