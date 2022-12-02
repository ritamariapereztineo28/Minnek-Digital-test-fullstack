import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import useStyles from "./styles";
import { get } from "../../fetch";
import User from "../../helpers/User";

export const Products = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  const getData = async () => {
    await get("/products")
      .then((res) => {
        if (res.status === 403) {
          User.logout();
        }
        return res.json()
      })
      .then((products) => setData(products));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={classes.container}>
        {data &&
          data.map(({ name, description }) => (
            <Card className={classes.card}>
              {/* <img className={classes.card} src={""} alt="Avatar" /> */}
              <p className="name">{name}</p>
              <p className="description">{description}</p>
            </Card>
          ))}
      </div>
    </>
  );
};
