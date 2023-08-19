"use client";
import { useState } from "react";

const DataPage = () => {
  const [loadedData, setLoadedData] = useState();
  const [loading, setLoading] = useState(false);

  fetch("/api/feedback", { cache: "no-cache" })
    .then((response) => response.json())
    .then((data) => {
      setLoading(true);
      setLoadedData(data);
    });

  if (!loading && !loadedData) {
    return (
      <div>
        <h1>로딩중입니다.</h1>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {loadedData.map((m) => (
          <li key={m.id}>
            id :{m.id} email : {m.email} - feedback : {m.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataPage;
