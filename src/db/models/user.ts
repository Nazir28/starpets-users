import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../';

interface IUserModel {
    id?: number;
    balance: number;
}

const userModel: Record<keyof IUserModel, any> = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
};

class User extends Model<IUserModel> implements IUserModel {
    public id!: number;
    public balance!: number;

    static initModel(): void {
        this.init(userModel, {
            sequelize,
            modelName: 'User',
            tableName: 'users',
            timestamps: false,
        });
    }
}
User.initModel();
export { User, userModel };
