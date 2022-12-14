import mongoose from "mongoose";

const employesSchema = mongoose.Schema({
    e_id: {
        type: Number,
        unique: true
    },
    e_name: {
        type: String,
        required: true
    }
    ,
    e_bdate: {
        type: Date,
        required: true
    }
    ,
    e_age: {
        type: Number,
        required: true
    }
    ,
    e_contact: {
        type: Number,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
    ,
    e_bgrp: {
        type: String,
        required: true
    }
    ,
    e_skill: {
        type: String,
        required: true
    },
    gender: {
        type: Boolean,
        required: true,
    }
    ,
    e_dis: {
        type: String,
        required: true
    },
    e_pincode: {
        type: Number,
        required: true
    },
    e_state: {
        type: String,
        required: true
    },
    e_add: {
        type: String,
        required: true
    },
    e_city: {
        type: String,
        required: true
    },
    e_department: {
        type: String,
        required: true
    },
    e_position: {
        type: String,
        required: true
    },
    e_work: {
        type: String,
        required: true
    },
    e_salary: {
        type: Number,
        required: true
    },
    e_joining: {
        type: Date,
        required: true
    },
    e_photo:{
        type:String,
        required:true
    },
    e_status:{
        type: String
    }

})

const Employess= mongoose.model("Employess", employesSchema)

export default Employess;