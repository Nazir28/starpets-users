import { QueryInterface } from 'sequelize';

export async function up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('users', [{ balance: 10000 }]);
}

export async function down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('users', {}, {});
}
