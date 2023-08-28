import AuthForm from '@/components/auth/auth-form';
import { getServerSession } from 'next-auth';
import { redirect, useRouter } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';


const AuthPage = async() =>  {
    const session = await getServerSession(authOptions);
    console.log("Session", JSON.stringify(session, null, 2))
    if(session){
      redirect('/');
    }
    return <AuthForm />;
}


export default AuthPage;

