import React, { useEffect, useState } from "react";
import { Card, Container } from "@material-ui/core";
import useStyles from "./styles";
import { get } from "../../fetch";
import User from "../../helpers/User";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktopTwo: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1300, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
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
      <Container className={classes.dontHaveProduct}>
        {data.length === 0 && <p1>No hay productos para mostrar</p1>}
      </Container>
      <Carousel responsive={responsive}>
        {data &&
          data.map(({ name, description, imgUrl }) => (
            <div className={classes.container}>
              <Card className={classes.card}>
                <img
                  className={classes.imgUrl}
                  src={imgUrl}
                  alt="img"
                  width={"100%"}
                />
                <p className={classes.name}>{name}</p>
                <p className={classes.description}>{description}</p>
              </Card>
            </div>
          ))}
      </Carousel>
    </>
  );
};
