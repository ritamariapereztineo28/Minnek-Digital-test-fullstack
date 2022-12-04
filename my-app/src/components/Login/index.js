import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Card, TextField } from "@material-ui/core";
import useStyles from "./styles";
import { post } from "../../fetch";

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const classes = useStyles();
  const [message, setMessage] = useState("");

  const onSubmit = (data) => {
    post("/login", data)
      .then((res) => {
        return res.json();
      })
      .then(({ token, message }) => {
        setMessage(message);
        if (token) {
          localStorage.setItem("auth_token", token);
          window.location = "/form";
        }
      });
  };

  return (
    <Card className={classes.container}>
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
              label="Usuario"
              variant="outlined"
              error={Boolean(errors.name)}
              helperText={errors.name && errors.name.message}
            />
          )}
          rules={{
            required: "Este campo es requerido",
            pattern: {
              value: /^\S[a-zA-Z]*$/,
              message: "Este campo solo permite letras, no permite espacios",
            },
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              className={classes.input}
              fullWidth
              id="outlined-basic"
              {...field}
              label="Contraseña"
              variant="outlined"
              error={Boolean(errors.password)}
              helperText={errors.password && errors.password.message}
            />
          )}
          rules={{
            required: "Este campo es requerido",
            minLength: {
              value: 8,
              message: "El teléfono debe contener 8 dígitos",
            },
          }}
        />
        <p className={classes.labelErr}>{message}</p>
        <Button type="submit" variant="outlined">
          Login
        </Button>
      </form>
    </Card>
  );
};
