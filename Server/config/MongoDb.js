import mongoose from "mongoose";

const connectDatabase = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,   
        })
        console.log("Connection Succesfully");
    } catch (error) {
        console.log(`Eroor: ${error.message}`);
        process.exit(1)
    }
}

export default connectDatabase