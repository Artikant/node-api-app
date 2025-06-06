import e from "express";
import {routes} from "./routes/user.route.js";

export const app = e();
app.use(e.json());

app.use("/api/users", routes);
app.get("/", (req, res) => {
  res.send("Welcome to the User API");
});
