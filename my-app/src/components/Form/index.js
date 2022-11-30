import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Card, TextField } from "@material-ui/core";
import useStyles from "./styles";

export const Form = () => {
  const { control, handleSubmit } = useForm();
  const classes = useStyles();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <Card className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              className={classes.input}
              id="outlined-basic"
              {...field}
              label="Nombre"
              variant="outlined"
            />
          )}
        />
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <TextField
              className={classes.input}
              id="outlined-basic"
              {...field}
              label="Precio"
              variant="outlined"
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              className={classes.input}
              id="outlined-basic"
              {...field}
              label="Descripción"
              variant="outlined"
            />
          )}
        />

        <Button type="submit" variant="outlined">
          Enviar
        </Button>
      </form>
    </Card>
  );
};
