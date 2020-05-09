import Sequelize from 'sequelize';

import Usuario from '../app/models/Usuarios';
import Avatares from '../app/models/Avatares';

import databaseConfig from '../config/database';

const models = [Usuario, Avatares];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
