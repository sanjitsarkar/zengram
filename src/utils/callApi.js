import axios from "axios";
import { API_URL } from ".";
export const callApi = async (
  method,
  endPoint,
  isProtected = false,
  data = {}
) => {
  const token = JSON.parse(localStorage?.getItem("user"))?.token;
  endPoint = `${API_URL}/${endPoint}`;
  switch (method) {
    case "get": {
      return await axios.get(
        endPoint,
        isProtected && {
          headers: { authorization: token },
        }
      );
    }
    case "post": {
      return await axios.post(
        endPoint,
        data,
        isProtected && {
          headers: { authorization: token },
        }
      );
    }
    case "delete": {
      return await axios.delete(
        endPoint,
        isProtected && {
          headers: { authorization: token },
        }
      );
    }
    case "put": {
      return await axios.put(
        endPoint,
        data,
        isProtected && {
          headers: { authorization: token },
        }
      );
    }
    default: {
      return;
    }
  }
};
