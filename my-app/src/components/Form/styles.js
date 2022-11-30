import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "Wrap",
    margin: "10% auto 45vh",
    maxWidth: 400,
    minWidth: 50,
    backgroundColor: "#FFFFFF",
    padding: "6% 2% 6% 2%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  input: {
    margin: "2% 0 2% 0",
  },
}));
