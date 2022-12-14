import express from "express";
import asyncHandler from "express-async-handler";
import Employess from "../Models/EmplaoyeeModel.js";
import generateToken from "../utils/generateToken.js";
import User from "./../Models/UserModel.js";
import multer from "multer"
// import Product from "../Models/product.js";
// import mongoose from "mongoose";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './../ingenero_code/public/upload/')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.e_name + file.originalname)
    }
})
const upload = multer({ storage: storage })

const userRoute = express.Router();

userRoute.post("/login", asyncHandler(
    async (req, res) => {
        const { username, password } = req.body;
        const user = await User.findOne({ username })
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id),
            })

        }
        else {
            res.status(401)
            throw new Error("Invaild Email or Password")
        }
    }
));


// REGISTER FOR EMPLOYES
userRoute.post("/emp", upload.single('e_photo'), (req, res) => {
    // console.log(req.file.path);

    const employee = new Employess({
        e_id: req.body.e_id,
        e_name: req.body.e_name,
        e_bdate: req.body.e_bdate,
        e_age: req.body.e_age,
        e_contact: req.body.e_contact,
        email: req.body.email,
        e_bgrp: req.body.e_bgrp,
        e_skill: req.body.e_skill,
        gender: req.body.gender,
        e_dis: req.body.e_dis,
        e_pincode: req.body.e_pincode,
        e_state: req.body.e_state,
        e_add: req.body.e_add,
        e_city: req.body.e_city,
        e_department: req.body.e_department,
        e_position: req.body.e_position,
        e_work: req.body.e_work,
        e_salary: req.body.e_salary,
        e_joining: req.body.e_joining,
        e_photo: req.file.path,
    })

    // const empExists = await Employess.findOne({ email });

    // if (empExists) {
    //     res.status(400);
    //     throw new Error("This Employee is already Exist")

    // }

    employee
        .save()
        .then(result => {
            res.status(500).json({
                message: "Images Uploaded Successfully",
                e_id: result.e_id,
                e_name: result.e_name,
                e_bdate: result.e_bdate,
                e_age: result.e_age,
                e_contact: result.e_contact,
                email: result.email,
                e_bgrp: result.e_bgrp,
                e_skill: result.e_skill,
                gender: result.gender,
                e_dis: result.e_dis,
                e_pincode: result.e_pincode,
                e_state: result.e_state,
                e_add: result.e_add,
                e_city: result.e_city,
                e_department: result.e_department,
                e_position: result.e_position,
                e_work: result.e_work,
                e_salary: result.e_salary,
                e_joining: result.e_joining,
                e_photo: result.e_photo,
                e_status: "waiting"
            })
        })
        .catch((e) => {
            console.log('this is error:', e);
        })
    // const employee = await Employess.create({
    //     e_id, e_name, e_bdate, e_age, e_contact, email, e_bgrp, e_skill, gender, e_dis, e_pincode, e_state, e_add, e_city, e_department, e_position, e_work, e_salary, e_joining, e_photo

    // })



    // if (employee) {
    //     res.status(200).json({
    //         e_id: employee.e_id,
    //         e_name: employee.e_name,
    //         e_bdate: employee.e_bdate,
    //         e_age: employee.e_age,
    //         e_contact: employee.e_contact,
    //         email: employee.email,
    //         e_bgrp: employee.e_bgrp,
    //         e_skill: employee.e_skill,
    //         gender: employee.gender,
    //         e_dis: employee.e_dis,
    //         e_pincode: employee.e_pincode,
    //         e_state: employee.e_state,
    //         e_add: employee.e_add,
    //         e_city: employee.e_city,
    //         e_department: employee.e_department,
    //         e_position: employee.e_position,
    //         e_work: employee.e_work,
    //         e_salary: employee.e_salary,
    //         e_joining: employee.e_joining,
    //         e_photo: employee.e_photo
    //     })
    // }

    // else {
    //     res.status(400)
    //     throw new Error("Please check your input data, this is invalid")
    // }

})



// GET ALL EMPLOYESS:
userRoute.get("/employess", asyncHandler(async (req, res) => {
    const employess = await Employess.find({});
    res.json(
        employess
    );
}))


// GET SINGLE EMPLOYEES:
userRoute.get("/employess/:id", asyncHandler(
    async(req, res)=>{
        const employee = await Employess.findById(req.params.id);
        if (employee) {
            res.json(employee)
        }
        else{
            res.status(404);
            throw new Error()
        }
    }
))


// Try code
// userRoute.post("/upload", upload.single('profileImg'), (req, res, next) => {
//     const product = new Product({
//         _id: new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         profileImg: req.file.path
//     });
//     product
//         .save()
//         .then(result => {
//             res.status(201).json({

//                 message: "created Product Successful",
//                 name: result.name,
//                 price: result.price,
//                 _id: result._id,


//             })
//         })
//         .catch((e) => {
//             console.log('Error:', e);
//         })
// })

export default userRoute;