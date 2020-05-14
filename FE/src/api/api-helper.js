import axios from 'axios';

const api = axios.create({
    baseURL: "https://thrive-app-be.herokuapp.com",
});

//User Routes
export const createUser = async (email, pass, firstname, lastname) => {
    const resp = await api.post("/api/users/user/", email, pass, firstname, lastname);
    return resp.data;
};


export const getUserInfo = async (user) => {
    const resp = await api.get("/api/users/user/", user);
    return resp.data;
};

export const getUserName = async (user) => {
    const resp = await api.get("/api/users/user/name", user);
    return resp.data;
};

export const getUserCheck = async (user) => {
    const resp = await api.get("/api/users/auth", user);
    return resp.data;
};


export const changeUserName = async (firstname, lastname) => {
    const resp = await api.get("/api/users/user", firstname, lastname);
    return resp.data;
};


export const deleteUser = async (user) => {
    const resp = await api.delete("/api/users/delete/", user);
    return resp.data;
}

export const authenticateUser = async (email, pass) => {
    const resp = await api.post("/api/users/authenticate", email, pass);
    return resp.data;
};


export const createTasks = async (user) => {
    const resp = await api.post("/api/users/task/", user);
    return resp.data;
};

export const getUserTasks = async (user) => {
    const resp = await api.get("/api/users/getTasks/", user);
    return resp.data;
};

//Task Routes
export const getAllTasks = async () => {
    const resp = await api.get("/api/tasks/");
    return resp.data;
};

//Group Routes
export const getGroup = async (group) => {
    const resp = await api.get("/api/groups/group/", group);
    return resp.data;
}

export const createGroup = async (user) => {
    const resp = await api.post("/api/groups/create", user);
    return resp.data;
}

export const changeGroupName = async (group) => {
    const resp = await api.put("/api/groups/name", group);
    return resp.data;
}

export const deleteGroup = async (group) => {
    const resp = await api.delete("/api/groups/delete", group);
    return resp.data;
}


export const createGroupTask = async (group) => {
    const resp = await api.post("/api/groups/task/", group);
    return resp.data;
}

export const getGroupTasks = async (group) => {
    const resp = await api.get("/api/groups/getTasks/", group);
    return resp.data;
}


export const getUsersInGroup = async (group) => {
    const resp = await api.get("/api/groups/users/", group);
    return resp.data;
}

export const addUser = async (group, user) => {
    const resp = await api.put("/api/groups/addUsers/", group, user);
    return resp.data;
}

export const removeUser = async (group, user) => {
    const resp = await api.get("/api/groups/removeUser/", group, user);
    return resp.data;
}