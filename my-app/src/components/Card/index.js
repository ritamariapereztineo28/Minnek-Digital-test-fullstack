import React, { useEffect, useState } from "react";
import "../Card/index.css";

export const Card = () => {
  const [data, setData] = useState();
  const [threeFirstBreeds, setThreeFirstBreeds] = useState([]);

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
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    getDataAPI();

    let arr = [];
    data &&
      data.map(({ breed_group }) => {
        if (breed_group && arr.length < 3) {
          arr.push(breed_group);
          setThreeFirstBreeds(arr);
        }
      });
  }, []);

  return (
    <div className={"container"}>
      {data &&
        data.map(({ name, image }, key) => (
          <div className={"card"} key={key}>
            <img className={"img"} src={image.url} alt="Avatar" />
            <div className="breeds">
              {threeFirstBreeds &&
                threeFirstBreeds.map((breed) => <li>{breed}</li>)}
            </div>
            <p className="name">{name}</p>
          </div>
        ))}
    </div>
  );
};
