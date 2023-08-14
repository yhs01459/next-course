'use client'
import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from "react";

const EventDetailPage = () => {
  const [pathName, setPathName] = usePathname();
  const [searchParams,setSearchParams ]= useSearchParams();

  useEffect(()=>{
    const path = `${pathName}`;
    const params = `${searchParams}`;
    console.log(path);
    console.log(params);
  }
  ,[]);


    return(
      <div>
        <h1>WELCOME EVENT DETAIL PAGE</h1>
        <h2>key:{pathName}  value:{searchParams}</h2>
      </div>
    )
  }
  export default EventDetailPage;