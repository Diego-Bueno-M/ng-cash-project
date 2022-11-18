import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Accounts extends Model {
  id!: number;
  balance!: number
}

Accounts.init({
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  balance: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'accounts',
  timestamps: false,
});

export default Accounts;
