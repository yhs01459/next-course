import { NextResponse } from "next/server"
import { MongoClient } from "mongodb";
import { hash } from 'bcryptjs';
const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.aoiyfhc.mongodb.net/?retryWrites=true&w=majority`;
export const POST = async(req) => {
    const request = await req.json();

    const hashedPassword = await hash(request.password, 12);
    const data ={
        email: request.email,
        password: hashedPassword,
    }

    const client = await MongoClient.connect(url);
    const db = client.db('auth');

    //중복여부 확인
    const existedUserEmail = await db.collection('users').findOne({email:request.email});
    if(existedUserEmail){
        client.close();
        return NextResponse.json({message:'이미 존재하는 이메일 입니다.'})
    }

    //데이터 저장
    const user = await db.collection('users').insertOne(data);
    console.log('데이터 저장 성공')
    client.close();
    
    return NextResponse.json(data);
}