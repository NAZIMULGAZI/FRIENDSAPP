import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
       console.log("mongodb connected succesfully");
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;


 
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

//   export default connectDB;