import Link from "next/link";
const HomePage = () => {
  return (<div>
    <h1>Home Page </h1>
    <Link href="/about">go to about page</Link>
  </div>);
}

export default HomePage