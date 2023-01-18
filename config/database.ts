import mongoose from 'mongoose';
let MONGODB_URL = process.env.MONGODB_URL;


let isConnected:number = 0;


export default (async () => {

    if(isConnected){
        return;
    }
 
const db = await mongoose.connect(MONGODB_URL as string)
isConnected = db.connections[0].readyState;

}); // iife - immediately invoked function expressions




