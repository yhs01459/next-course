import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export const POST = async(req) => {
    console.log('/api/route.js에서 POST 요청을 확인했습니다.')
    const reqData = await req.json();
    const email = reqData.email;
  
    console.log(email);

    return NextResponse.json({message:'suecces', email:email});
}

export const GET = async(req) => {
    console.log('/api/route.js에서 GET 요청을 확인했습니다.')
    let comments =[];
    
    try {
        const client = await MongoClient.connect('mongodb+srv://yhs:hQsBOflQQjQdHOxY@cluster0.aoiyfhc.mongodb.net/?retryWrites=true&w=majority');
         const db = client.db('events');
         comments = await db.collection('comments').find().sort({_id:-1}).toArray();    
     } catch (error) {
         return NextResponse.json({status:500, message:"몽고db 연결 실패"});
     }

    return NextResponse.json(comments);
}
