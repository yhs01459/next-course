/** @type {import('next').NextConfig} */
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');


module.exports = (phase) => {
    /* 개발단계에서 사용할 환경변수 객체*/ 

    if(phase === PHASE_DEVELOPMENT_SERVER){
        return( {
            env:{
                NEXTAUTH_SECRET:'asdsadasd',
                mongodb_username:'yhs',
                mongodb_password:'9swsqjh0MO8RuiyN',
                mongodb_clustername:'cluster0',
            }
        })
    }
    /* 개발단계가 아닌 경우 아래 환경변수가 적용된다. */
    // return(
    //     {
    //         env:{
    //             mongodb_username:'yhs',
    //             mongodb_password:'',
    //             mongodb_clustername:'',
    //         }
    //     }
    // )
}
