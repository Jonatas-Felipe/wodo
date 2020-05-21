import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import Usuario from '../app/models/Usuarios';
import Avatares from '../app/models/Avatares';

import databaseConfig from '../config/database';

const models = [Usuario, Avatares];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect('mongodb://localhost:27017/wodo', {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
