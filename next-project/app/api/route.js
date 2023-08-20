import { NextResponse } from "next/server";

export const POST = async(req) => {
    console.log('/api/route.js에서 POST 요청을 확인했습니다.')
    const reqData = await req.json();
    const email = reqData.email;
  
    console.log(email);

    return NextResponse.json({message:'suecces'});
}

export const GET = async(req) => {
    console.log('/api/route.js에서 GET 요청을 확인했습니다.')
    const data=[{email:'dd@dd', text:'test message', name:'ths'},{email:'23@23', text:'test message23', name:'ths23'}];
    return NextResponse.json(data);
}
