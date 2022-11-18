import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Accounts from './Accounts';

class Transactions extends Model {
  id!: number;
  value!: number;
  createdAt!: number;
  debitedAccountId!: number;
  creditedAccountId!: number;
}

Transactions.init({
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  value: {
    type: INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'transactions',
  timestamps: false,
});

Transactions.belongsTo(Accounts, { foreignKey: 'debitedAccountId', as: 'id'});
Transactions.belongsTo(Accounts, { foreignKey: 'creditedAccountId', as: 'id'})

export default Transactions;
