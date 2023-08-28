'use client'
import UserProfile from '@/components/profile/user-profile';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const ProfilePage = () =>  {
    const {data:session, status} = useSession();
    const router = useRouter();
    if(session && status==='authenticated'){
      return <UserProfile />;
    }
    else{
      router.replace('/auth');
    }
}



export default ProfilePage;