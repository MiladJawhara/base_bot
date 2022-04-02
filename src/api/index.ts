import cors from "cors";
import express from "express";
import usersRouter from "./routes/usersRouter";

const app = express();

app.use(cors());

app.use("/users", usersRouter);

app.listen(3333, function () {
  console.log("CORS-enabled web server listening on port 80");
});
