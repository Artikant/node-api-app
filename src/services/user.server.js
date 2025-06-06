const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

export const fetchUsers = () => {
  return users;
}
export const fetchUserById = (id) => {
  return users.find(user => user.id === id);
}
export const addUserMethod = (user) => {
  const newUser = { id: users.length + 1, ...user };
  users.push(newUser);
  return newUser;
}
export const updateUserMethod = (id, user) => {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return null;
  }
  users[index] = { ...users[index], ...user };
  return users[index];
}
export const deleteUserMethod = (id) => {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return null;
  }
  const deletedUser = users.splice(index, 1);
  return deletedUser[0];
}