import axios from 'axios';

const api = axios.create({
    baseURL: "https://thrive-app-be.herokuapp.com",
});

export const secret = async () => {
    const resp = await api.get("/api/secret");
    console.log("secret: ", resp);
    return resp.data;
};

export const createUser = async (email, pass) => {
    const resp = await api.post("/api/auth/", email, pass);
    console.log("Successfully created a new user");
    return resp.data;
};

export const authenticateUser = async (email, pass) => {
    const resp = await api.post("api/auth/authenticate", email, pass);
    console.log("User successfully authenticated.");
    return resp.data;
};

export const getTasks = async () => {
    const resp = await api.get("/api/tasks/");
    console.log("Tasks: ", resp);
    return resp.data;
};