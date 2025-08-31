const service = require("./user.service");

async function getById(req, res, next) {
  try {
    const user = await service.getUser(req.params.id);
    res.json(user);
  } catch (err) {
    if (err.message === "USER_NOT_FOUND") return res.status(404).json({ error: "User not found" });
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const user = await service.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (err) {
    if (err.message === "USER_NOT_FOUND") return res.status(404).json({ error: "User not found" });
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const result = await service.removeUser(req.params.id);
    res.json(result);
  } catch (err) {
    if (err.message === "USER_NOT_FOUND") return res.status(404).json({ error: "User not found" });
    next(err);
  }
}

module.exports = {
  // já existentes:
  create: async (req, res, next) => { try {
    const { name, email, password } = req.body;
    const user = await service.createUser({ name, email, password });
    res.status(201).json(user);
  } catch (e) { next(e); } },
  list: async (req, res, next) => { try {
    res.json(await service.listUsers());
  } catch (e) { next(e); } },
  // novos:
  getById, update, remove
};
