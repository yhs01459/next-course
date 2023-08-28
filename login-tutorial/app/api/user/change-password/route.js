import { NextResponse } from "next/server";
import { hash, compare } from "bcryptjs";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { MongoClient } from "mongodb";


const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.aoiyfhc.mongodb.net/?retryWrites=true&w=majority`;

export const PATCH = async(req) => {
    
    const request = await req.json();
  
    const session = await getServerSession(authOptions);
   
    if(!session){
        return NextResponse.json({message:"허가되지 않은 사용자 입니다."})
    }
    const userEmail = session.user.email;
    const oldPassword = request.password;
    const newPassword = request.changePassword;

    const client = await MongoClient.connect(url);
    const userCollection = client.db('auth').collection('users');

   
    const user = await userCollection.findOne({email:userEmail});
    if(!user){
        client.close();
        return NextResponse.json({message:"db에 존재하지 않습니다."})
    }

    //
    const currentPassword = user.password;
    if(!compare(oldPassword, currentPassword))
    {
        client.close();
        return NextResponse.json({message:"비밀번호가 틀립니다."})
    }
    const hashedPassword = await hash(newPassword, 12);
    userCollection.updateOne({email:userEmail}, { $set: { password:hashedPassword } });

    const changedpass = await compare(newPassword,user.password);
    const data = {
        oldpass:oldPassword,
        newpass:newPassword,
        changedpass:changedpass,
    }
    client.close();
    return NextResponse.json(data)
}

