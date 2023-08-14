import Link from "next/link";
const AboutPage = () => {

    const user = [
        {id:"one", name:"NameIsOne"},
        {id:"two", name:"NameIsTwo"},
    ];

    return(
        <div>
            <h1>About page</h1>
            <ul>
                {user.map( (m) => (
                    <li key={m.id}>
                        <Link href={ {
                            pathname : "/about/[id].page.js",
                            query : {id:m.id}
                        }}>{m.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default AboutPage;