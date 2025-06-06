import {fetchUsers,fetchUserById} from "../services/user.server.js";

export const getUsers = (req, res) => {
  const users = fetchUsers();
  res.status(200).json(users);
}

export const getUserById = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = fetchUserById(userId);
  
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  
  res.status(200).json(user);
}
