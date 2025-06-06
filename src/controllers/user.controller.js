import { json } from "express";
import {
  fetchUsers,
  fetchUserById,
  addUserMethod,
  updateUserMethod,
  deleteUserMethod,
} from "../services/user.server.js";

export const getUsers = (req, res) => {
  const users = fetchUsers();
  res.status(200).json(users);
};

export const getUserById = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = fetchUserById(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
};

export const addUser = (req, res) => {
  const user = JSON.parse(JSON.stringify(req.body));
  if (user.name === undefined || user.email === undefined) {
    return res.status(400).json({ message: "Name and email are required" });
  }
  const newuser = addUserMethod(user);
  res.status(200).json({ message: "User added successfully", newuser });
};

export const updateUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const updatedUser = updateUserMethod(userId, req.body);

  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ message: "User updated successfully", updatedUser });
};

export const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const deletedUser = deleteUserMethod(userId);
  if (!deletedUser) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ message: "User deleted successfully", deletedUser });
};
