import mongoose from 'mongoose';
let MONGODB_URL = process.env.MONGODB_URL;


let isConnected:number = 0;


const dbConnect = async () => {

    if(isConnected){
        
        return;
    }
 
const db = await mongoose.connect(MONGODB_URL as string);
console.log("ready state:" + db.connections[0].readyState);
isConnected = db.connections[0].readyState;
};

export default dbConnect;

