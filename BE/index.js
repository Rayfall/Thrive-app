const express = require('express');
const parser = require("body-parser");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({
        "status": 200,
        "msg" : "server is up and running"
    });    
});

const taskRouter = require('./routes/task-routes');
const userRouter = require('./routes/user-routes');
const groupRouter = require('./routes/group-routes');

app.use('/api/tasks/', taskRouter);
app.use('/api/users/', userRouter);
app.use('/api/groups/', groupRouter);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

//git subtree push --prefix BE heroku master