import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "grid",
    gap: "20px",
    "grid-template-columns": "repeat(auto-fill, minmax(300px, 1em))",
    justifyContent: "center",
    margin: "2%",
  },
  card: {
    gridRow: "auto / span 2",
    display: "grid",
    alignItems: "unset",
  },
  img: {
    border: "5px solid transparent",
    borderRadius: "1em",
    width: "100%",
    height: "200px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "600",
  },
  dontHaveProduct: {
    color: "#FFFFFF",
    marginTop: "5%",
  },
}));
