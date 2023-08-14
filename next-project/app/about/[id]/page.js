'use client'
import { useSearchParams, usePathname} from "next/navigation";
import { useEffect } from "react";

const AboutUserDetail = () => {

        const pathname = usePathname();
        const searchParams = useSearchParams();
       
        useEffect(() => {
          const url = `${pathname}`;
          const param = `${searchParams}`;
          console.log(url);
          console.log(param);
        }, [pathname, searchParams])

    return (<div>
        <h1> about detail </h1>
    </div>);


}

export default AboutUserDetail;