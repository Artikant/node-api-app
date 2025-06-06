import e from "express";
import { getUsers, getUserById, addUser, updateUser,deleteUser} from "../controllers/user.controller.js";
export const routes = e.Router();
routes.get("/", getUsers);
routes.get("/:id", getUserById);
routes.post("/add",addUser);
routes.put("/:id", updateUser);
routes.delete("/:id", deleteUser);
