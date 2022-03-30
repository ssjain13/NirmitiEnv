// Login

export const login = (user) => {
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: user,
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
};

//Register

export const register = (user) => {
  fetch("https://fakestoreapi.com/users", {
    method: "POST",
    body: user,
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
};
