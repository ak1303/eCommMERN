
import mongoose from "mongoose";


export const Connection=async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@ecommerce-web.ilydi1t.mongodb.net/Ecommerce-web?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
       console.log('Database connected successfully');
    }catch(error){
       console.log('error while connectiong',error.message);
    }
}
export default Connection;