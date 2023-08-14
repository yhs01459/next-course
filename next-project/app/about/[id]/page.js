'use client'
import { useSearchParams, usePathname, useRouter} from "next/navigation";
import { useEffect } from "react";

const AboutUserDetail = () => {
        const router = useRouter();

        const pathname = usePathname();
        const searchParams = useSearchParams();
       
        useEffect(() => {
          const url = `${pathname}`;
          const param = `${searchParams}`;
          console.log(url);
          console.log(param);
        }, [pathname, searchParams])

        const loadProjectHandler = () => {
            router.push('/about/max/projecta', {scroll:false});
            /*  router.push({
                pathname:'/about/max/projecta',
                query : {}
                }}, {scroll:false});*/
        }

    return (<div>
        <h1> about detail </h1>
        <button type="button" onClick ={loadProjectHandler}>123</button>
    </div>);


}

export default AboutUserDetail;