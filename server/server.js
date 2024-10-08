const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();
require("./config/db");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(cookieParser());

//Router
app.use("/api/user", require("./router/userRouter"));
app.use("/api/form", require("./router/formRouter"));
app.use("/api/response", require("./router/responseRouter"));
app.use("/api/invite", require("./router/inviteRouter"));

app.get("/", (req, res) => {
  res.send("Online");
});

app.listen(PORT, () => console.log(`SERVER_ONLINE_PORT_${PORT}/`));
