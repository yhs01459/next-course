import Link from "next/link";

const HomePage = () => {
  return(
    <div>
      <h1>WELCOME HOME PAGE</h1>
      <Link href="/events">이벤트 보러 가기</Link>
    </div>
  )
}
export default HomePage;
