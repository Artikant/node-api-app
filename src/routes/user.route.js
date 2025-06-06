import e from "express";
import { getUsers, getUserById} from "../controllers/user.controller.js";
export const routes = e.Router();
routes.get("/", getUsers);
routes.get("/:id", getUserById);
