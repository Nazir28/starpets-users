import { QueryInterface } from 'sequelize';

import { userModel } from '../models/user';

export async function up(queryInterface: QueryInterface) {
    await queryInterface.createTable('users', userModel);
    // await queryInterface.bulkInsert('users', [{ balance: 10000 }]);
}

export async function down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('users');
}
