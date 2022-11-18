import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Accounts from './Accounts';

class Users extends Model {
  id!: number;
  username!: string;
  password!: string;
  accountId!: number;
}

Users.init({
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: STRING(100),
    allowNull: false,
  },
  password: {
    type: STRING(100),
  },
  accountId: {
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

Users.belongsTo(Accounts, { foreignKey: 'accountId' });

export default Users;
