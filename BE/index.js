const express = require('express');
const parser = require("body-parser");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        "status": 200,
        "msg" : "server is up and running"
    });
    
});

const taskRouter = require('./routes/task-routes');

app.use(parser.json());
app.use('/api/tasks/', taskRouter);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});