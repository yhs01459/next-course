import NextAuth from "next-auth/next";
import { MongoClient } from "mongodb";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.aoiyfhc.mongodb.net/?retryWrites=true&w=majority`;

export const authOptions = {
    jwt:{
        secret:process.env.NEXTAUTH_SECRET,
    },
    providers: [
             CredentialsProvider({
                 async authorize(credentials){
               
                    const client = await MongoClient.connect(url);
                    const db = client.db('auth');
                    const user = await db.collection('users').findOne({email:credentials.email});
                    if(!user){
                        client.close();
                        return null;
                    }
                    const isValid = await compare(credentials.password, user.password);
                    if(!isValid){
                        client.close();
                        return null;
                    }
                    client.close();
                
                    return {email:user.email};
                }
            })
    ]
}
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}   