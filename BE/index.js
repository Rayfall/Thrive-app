const express = require('express');
const parser = require("body-parser");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const withAuth = require('./middleware/middleware');
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        "status": 200,
        "msg" : "server is up and running"
    });    
});

app.get('/api/secret', function(req, res) {
  res.send('The password is potato');
});

const taskRouter = require('./routes/task-routes');
const authRouter = require('./routes/auth-routes.js');

app.use(parser.json());
app.use(cors());
app.use('/api/tasks/', taskRouter);
app.use('/api/auth/', authRouter);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

//git subtree push --prefix BE heroku master