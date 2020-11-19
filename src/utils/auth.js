import jwt_decode from "jwt-decode";

export const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }

  const decoded = jwt_decode(token);
  const dateNow = new Date();

  return decoded.exp < dateNow.getTime();
};
