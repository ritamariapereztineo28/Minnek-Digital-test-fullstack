import FormData from "form-data";
const { REACT_APP_LINK } = process.env;

export const uploadFiles = async (files) => {
  const token = localStorage.getItem("auth_token");
  const url = [];

  let formData = new FormData();
  formData.append("imgUrl", files[0]);

  const bodyOpts = {
    method: "POST",
    headers: {
      auth_token: token,
      credentials: "include",
    },
    body: formData,
  };

  const image = await fetch(`${REACT_APP_LINK}/image`, bodyOpts).then((res) =>
    res.json()
  );

  if (image) {
    url.push(image);
  }

  return url;
};
