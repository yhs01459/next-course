import { NextResponse } from "next/server";

export const POST = async(req) => {
    console.log('api/[post]/route.js에서 POST 요청을 확인했습니다.')
    const reqData = await req.json();
    const email = reqData.email;
    const name = reqData.name;
    const text = reqData.text;

    const data = {email:email, name:name, text:text};
    console.log(data);

    return NextResponse.json(data);
}



