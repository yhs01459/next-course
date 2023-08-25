import { NextResponse } from "next/server"
import { MongoClient } from "mongodb";
import {hash} from 'bcryptjs';
const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.aoiyfhc.mongodb.net/?retryWrites=true&w=majority`;
export const POST = async(req) => {
    const request = await req.json();
    
    const hashedPassword = hash(request.password, 12);
    const data ={
        email: request.email,
        password: hashedPassword,
    }


    const client = await MongoClient.connect(url);
    const db = client.db('auth');
    db.collection('users').insertOne(data);

    return NextResponse.json(data);
}