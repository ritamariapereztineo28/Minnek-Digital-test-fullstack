import React, { useEffect, useState } from "react";
import { Card, Container } from "@material-ui/core";
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
        return res.json();
      })
      .then((products) => setData(products));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container className={classes.dontHaveProduct} >
        {data.length === 0 && (
          <p1 >
            No hay productos para mostrar
          </p1>
        )}
      </Container>
      <div className={classes.container}>
        {data &&
          data.map(({ name, description }) => (
            <Card className={classes.card}>
              {/* <img className={classes.card} src={""} alt="Avatar" /> */}
              <p className={classes.name}>{name}</p>
              <p className={classes.description}>{description}</p>
            </Card>
          ))}
      </div>
    </>
  );
};
