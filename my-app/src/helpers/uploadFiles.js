
import FormData from 'form-data';
const { REACT_APP_LINK } = process.env;

export const uploadFiles = async (files) => {
  const token = localStorage.getItem("auth_token");
  const url = [];
  console.log("--------files-----",files[0]);
  
  let formData = new FormData();
  formData.append("imgUrl", files[0]);
  
  const bodyOpts = {
    method: "POST",
    headers: {
      // 'Content-Type': 'multipart/form-data',
      auth_token: token,
      credentials: "include",
      // "Boundary":'WebKitFormBoundaryyrV7KO0BoCBuDbTL'
    },
    body: formData,
  };
  
  // console.log("--------form-",formData)
  const {image} = await fetch(
        `${REACT_APP_LINK}/image`,
        bodyOpts
      ).then((res) => res.text());
      console.log("--------jij",image)

      if (image) {
        url.push(image);
      }
      
  return url;
};
