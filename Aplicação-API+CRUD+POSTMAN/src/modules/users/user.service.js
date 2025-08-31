const bcrypt = require("bcryptjs");
const repo = require("./user.repository");

async function createUser({ name, email, password }) {
  const passwordHash = await bcrypt.hash(password, 10);
  return repo.create({ name, email, passwordHash });
}

async function listUsers() {
  return repo.list();
}

async function getUser(id) {
  const user = await repo.getById(id);
  if (!user) throw new Error("USER_NOT_FOUND");
  return user;
}

async function updateUser(id, { name, email, password }) {
  const payload = {};
  if (name) payload.name = name;
  if (email) payload.email = email;
  if (password) payload.passwordHash = await bcrypt.hash(password, 10);

  const updated = await repo.update(id, payload);
  if (!updated) throw new Error("USER_NOT_FOUND");
  return updated;
}

async function removeUser(id) {
  const deleted = await repo.remove(id);
  if (!deleted) throw new Error("USER_NOT_FOUND");
  return { success: true };
}

module.exports = { createUser, listUsers, getUser, updateUser, removeUser };
