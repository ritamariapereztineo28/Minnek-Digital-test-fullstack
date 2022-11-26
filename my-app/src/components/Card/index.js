import React, { useEffect, useState } from "react";
import "../Card/index.css";

export const Card = () => {
  const [data, setData] = useState();
  
  const getDataAPI = async () => {
    await fetch(" https://api.thedogapi.com/v1/breeds?limit=12", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key":
          "live_ySq2ChwliEVYaLevOo41OMIC47mMdvkk2lhVf1M2PMtBaRNyw41r95GcPqKsvmhw",
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
        data.map(({ name }) => (
          <div className={"card"}>
            <img src="" alt="Avatar" />
            <div className="container">
              <h4>
                <b>{name}</b>
              </h4>
            </div>
          </div>
        ))}
    </div>
  );
};
