import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
export const POST = async(req) => {
    console.log('api/[post]/route.js에서 POST 요청을 확인했습니다.')
    
    const reqData = await req.json();
    const email = reqData.email;
    const name = reqData.name;
    const text = reqData.text;

    const data = {email:email, name:name, text:text};
    console.log(data);

    try {
       MongoClient.connect('mongodb+srv://yhs:hQsBOflQQjQdHOxY@cluster0.aoiyfhc.mongodb.net/?retryWrites=true&w=majority')
       .then((client)=>{
        const db = client.db('events');
        return db.collection('comments').insertOne(data);
       }
       )
    } catch (error) {
        return NextResponse.json({status:500, message:"몽고db 연결 실패"});
    }
    
    return NextResponse.json(data);
}



