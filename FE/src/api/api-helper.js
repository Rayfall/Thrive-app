import axios from 'axios';

const api = axios.create({
    baseURL: "https://thrive-app-be.herokuapp.com",
});

export const secret = async () => {
    const resp = await api.get("/api/secret");
    console.log("secret: ", resp);
    return resp.data;
};

export const getTasks = async () => {
    const resp = await api.get("/api/tasks/");
    console.log("Tasks: ", resp);
    return resp.data;
}