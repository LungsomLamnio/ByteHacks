import React, { useEffect, useState } from "react";
import { fetchHomeData } from "../api";

const HomePage = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetchHomeData();
      setData(response);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>{data}</p>
    </div>
  );
};

export default HomePage;
