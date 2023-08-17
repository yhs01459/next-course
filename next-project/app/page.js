
import Image from 'next/image'
import styles from './page.module.css'

const Home = async() => {
  const data = await fetchDataByServer();

  return (
    
    <div>
      <ul>
       {data.map((m)=>(
        <li key={m.id}>{m.address}</li>
       ))}
      </ul>
    </div>
  )
}
export default Home;

export const fetchDataByServer = async() => {
  const res = await fetch('https://fir-project-70504-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json');
  const data = await res.json();
  const transformData = [];

  for( const key in data){
    transformData.push({id:key, address: data[key].address});
  }
  
  return transformData;
}


