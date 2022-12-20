const REACT_APP_LINK = process.env.REACT_APP_LINK;

export const post = (url, body = {}) => {
  const token = localStorage.getItem("auth_token");
  const bodyOpts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      auth_token: token,
      Authorization: token,
      credentials: "include",
    },
    body: JSON.stringify(body),
  };
  return fetch(`${REACT_APP_LINK}${url}`, bodyOpts);
};

export const get = (url) => {
  const token = localStorage.getItem("auth_token");

  const bodyOpts = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      auth_token: token,
      Authorization: token,
      credentials: "include",
    },
  };
  return fetch(`${REACT_APP_LINK}${url}`, bodyOpts);
};
