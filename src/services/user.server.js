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
