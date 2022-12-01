const REACT_APP_LINK = process.env.REACT_APP_LINK;

export const post = (url, body = {}) => {
  const bodyOpts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      // auth_token: token,
      // Authorization: token,
      // credentials: 'include',
      // 'mode': 'no-cors',
      // "crossorigin": true,
    },
    body: JSON.stringify(body),
  };
  return fetch(`${REACT_APP_LINK}${url}`, bodyOpts);
};

export const get = (url) => {
  const bodyOpts = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // auth_token: token,
      // Authorization: token,
      // credentials: 'include',
      // mode: 'no-cors',
    },
  };
  return fetch(`${REACT_APP_LINK}${url}`, bodyOpts);
};
