
import mongoose from 'mongoose';
import { cache } from 'react';

//URI LATER
const MONGODB_URI = process.env.MONGODB_URI;

if(!MONGODB_URI){
    throw new Error('please define the URI enviorment argument');
}

// 글로벌 변수에 캐싱된 연결을 저장 (TypeScript 전역 타입 선언 필요할 수 있음)
let cached  = (global as any).mongoose;

if(!cached) {
    cached =  (global as any).mongoose = {conn:null, promise:null };
}

async function connectDB(){
    if(cached.conn){
        return cached.conn;
    }

    if(!cached.promise){
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) =>{
            return mongoose;
        });
    }

    try{
        cached.conn = await cached.promise;
    } catch(e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;   
}

export default connectDB;


