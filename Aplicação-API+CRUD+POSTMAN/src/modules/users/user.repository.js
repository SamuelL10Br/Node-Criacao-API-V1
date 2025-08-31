const User = require("./user.model");

async function create(data) {
  const doc = await User.create(data);
  return doc.toObject();
}

async function list() {
  return User.find().lean();
}

async function getById(id) {
  return User.findById(id).lean();
}

async function update(id, data) {
  return User.findByIdAndUpdate(id, data, { new: true, runValidators: true }).lean();
}

async function remove(id) {
  return User.findByIdAndDelete(id).lean();
}

module.exports = { create, list, getById, update, remove };
