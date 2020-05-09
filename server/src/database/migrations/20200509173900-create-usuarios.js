module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        // unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      nascimento: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      sexo: {
        type: Sequelize.STRING(1),
        allowNull: true,
      },
      rg: {
        type: Sequelize.STRING(12),
        allowNull: true,
      },
      cpf: {
        type: Sequelize.STRING(14),
        allowNull: true,
      },
      cep: {
        type: Sequelize.STRING(9),
        allowNull: true,
      },
      estado: {
        type: Sequelize.STRING(2),
        allowNull: true,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      complemento: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      celular: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      telefone: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      id_avatar: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      cadastro_finalizado: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },

      deleted_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('usuarios');
  },
};
