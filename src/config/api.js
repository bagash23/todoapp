import axios from "axios";

export const ApiTodo = axios.create({
    baseURL: "94.74.86.174:8080/api",
});