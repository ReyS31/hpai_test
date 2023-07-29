/* eslint-disable camelcase */
const bcrypt = require('bcrypt');

exports.shorthands = undefined;

exports.up = async (pgm) => {
  const hashedPassword = await bcrypt.hash('password', 10);
  pgm.createTable('users', {
    id: {
      type: 'SERIAL',
      primaryKey: true,
    },
    name: {
      type: 'VARCHAR(255)',
      notNull: true,
    },
    email: {
      type: 'VARCHAR(50)',
      unique: true,
      notNull: true,
    },
    password: {
      type: 'TEXT',
      notNull: true,
    },
    role_id: {
      type: 'INTEGER',
    },
  });

  pgm.addConstraint(
    'users',
    'fk_users.role_id_roles.id',
    'FOREIGN KEY(role_id) REFERENCES roles(id)',
  );

  pgm.sql(`INSERT INTO users(name,email,password,role_id) VALUES 
            ('admin','admin@admin.com','${hashedPassword}', 1),
            ('user','user@user.com','${hashedPassword}', 2)`);
};

exports.down = (pgm) => {
  pgm.dropTable('users');
};
