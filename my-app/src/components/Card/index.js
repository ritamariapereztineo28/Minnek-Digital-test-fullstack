import React, { useEffect, useState } from "react";
import "../Card/index.css";

export const Card = () => {
  const [data, setData] = useState();

  const getDataAPI = async () => {
    await fetch(" https://api.thedogapi.com/v1/breeds?limit=10", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": process.env.REACT_APP_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    getDataAPI();
  }, []);
  return (
    <div className={"container"}>
      {data &&
        data.map(({ name, image }, key) => (
          <div className={"card"} key={key}>
            <img className={"img"} src={image.url} alt="Avatar" />
            <p>{name}</p>
          </div>
        ))}
    </div>
  );
};
