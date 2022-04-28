import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    avatar: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Pritam",
    lastName: "Kumar",
    username: "pritamkr",
    avatar: "https://avatars.githubusercontent.com/u/84632214?v=4",
    password: "pritamkr123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Abhishek",
    lastName: "Gautam",
    username: "abhishekg",
    avatar: "https://avatars.githubusercontent.com/u/46835940?v=4",
    password: "abhishekG123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Srishti Maurya",
    lastName: "Maurya",
    username: "srishtim",
    avatar: "https://avatars.githubusercontent.com/u/39724354?v=4",
    password: "srishtim123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shruti",
    lastName: "Raj",
    username: "shrutir",
    avatar: "https://avatars.githubusercontent.com/u/69633187?v=4",
    password: "shrutir123123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
