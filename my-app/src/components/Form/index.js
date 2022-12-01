import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Card, TextField } from "@material-ui/core";
import useStyles from "./styles";
// import { Login } from "../Login";
import { post } from "../../fetch/index";

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const classes = useStyles();

  const onSubmit = (data) => {
    post("/product", data);
  };
  return (
    <>
      <Card className={classes.container}>
        {/* <Login container={classes.container} input={classes.input} /> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                className={classes.input}
                fullWidth
                id="outlined-basic"
                {...field}
                label="Nombre"
                variant="outlined"
                error={Boolean(errors.name)}
                helperText={errors.name && errors.name.message}
              />
            )}
            rules={{
              required: "Este campo es requerido",
              pattern: {
                value:
                  /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
                message:
                  "Este campo solo permite letras, no permite espacios al inicio o final de lo digitado",
              },
            }}
          />
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <TextField
                className={classes.input}
                id="outlined-basic"
                {...field}
                fullWidth
                label="Precio"
                variant="outlined"
                error={Boolean(errors.price)}
                helperText={errors.price && errors.price.message}
              />
            )}
            rules={{
              required: "Este campo es requerido",
              pattern: {
                value: /^[0-9]+([.,][0-9]+)?$/,
                message:
                  "Este campo solo permite números o decimales, no permite espacios al inicio o final de lo digitado",
              },
            }}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                className={classes.input}
                id="outlined-basic"
                {...field}
                fullWidth
                label="Descripción"
                variant="outlined"
                error={Boolean(errors.description)}
                helperText={errors.description && errors.description.message}
              />
            )}
            rules={{
              required: "Este campo es requerido",
              pattern: {
                value: /^\S[0-9a-zA-Z ]+$/,
                message:
                  "Este campo solo permite letras y números, no permite espacios al inicio o final de lo digitado",
              },
            }}
          />

          <Button type="submit" variant="outlined">
            Enviar
          </Button>
        </form>
      </Card>
    </>
  );
};
