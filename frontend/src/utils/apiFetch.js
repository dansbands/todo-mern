const apiFetch = (path, options) => {
  const BASE_URL = "http://localhost:3001";
  const fetchOptions = {
    ...options,
    mode: "cors",
    headers: {
      Accept: "application/json",
    },
  };

  if (fetchOptions.body && fetchOptions.body instanceof Object) {
    fetchOptions.headers["Content-Type"] = "application/json";
    fetchOptions.body = JSON.stringify(fetchOptions.body);
  }

  return fetch(`${BASE_URL}/${path}`, fetchOptions).then((res) => res.json());
};

export default apiFetch;
