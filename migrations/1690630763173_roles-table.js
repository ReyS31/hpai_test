/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('roles', {
    id: {
      type: 'SERIAL',
      primaryKey: true,
    },
    name: {
      type: 'VARCHAR(20)',
      notNull: true,
    },
  });

  pgm.sql("INSERT INTO roles(name) VALUES ('admin'),('user')");
};

exports.down = (pgm) => {
  pgm.dropTable('roles');
};
