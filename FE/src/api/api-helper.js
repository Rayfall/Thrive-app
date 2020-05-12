import axios from "axios";

const api = axios.create({
    baseURL: "https://thrive-app-be.herokuapp.com/api/",
});

export const secret = async () => {
    const resp = await api.get("/secret");
    console.log("secret: ", resp)
    return resp.data;
};