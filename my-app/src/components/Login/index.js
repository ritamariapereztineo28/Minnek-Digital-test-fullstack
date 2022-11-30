import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Card, Container, TextField } from "@material-ui/core";

export const Login = (container, loginForm, input) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            className={input}
            fullWidth
            id="outlined-basic"
            {...field}
            label="Usuario"
            variant="outlined"
            error={Boolean(errors.username)}
            helperText={errors.username && errors.username.message}
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
            className={input}
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

      <Button type="submit" variant="outlined">
        Login
      </Button>
    </form>
  );
};
