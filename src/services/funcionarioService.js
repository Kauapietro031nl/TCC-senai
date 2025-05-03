const repository = require('../repositories/funcionariosRepository');

module.exports = {
  getAll: (search) => repository.findAll(search),
  getById: (id) => repository.findById(id),
  create: (data) => repository.create(data),
  update: (id, data) => repository.update(id, data),
  remove: (id) => repository.remove(id),
};
