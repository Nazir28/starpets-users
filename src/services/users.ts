import { User } from '../db';
import { TxType, txType } from '../utils/helpers/variables';

interface IUpdateUserBalance {
    id: number;
    amount: number;
}

interface IUpdateUserBalanceByType {
    id: number;
    amount: number;
    type: TxType;
}

class UserService {
    async getUserById(id: number) {
        return await User.findByPk(id);
    }

    async updateUserBalance({ id, amount }: IUpdateUserBalance) {
        const user = await this.getUserById(id);
        if (!user) {
            throw new Error('User not found');
        }

        user.balance = user.balance + amount;
        if (user.balance < 0) {
            throw new Error('Balance cannot be negative');
        }

        await user.save();

        return user;
    }
    async updateUserBalanceByType({
        id,
        amount,
        type,
    }: IUpdateUserBalanceByType) {
        const user = await this.getUserById(id);
        if (!user) {
            throw new Error('User not found');
        }
        if (type === txType.WITHDRAW) {
            user.balance = user.balance - Math.abs(amount);
        } else {
            user.balance = user.balance + Math.abs(amount);
        }
        if (user.balance < 0) {
            throw new Error('Balance cannot be negative');
        }

        await user.save();

        return user;
    }
}
const userService = new UserService();
export { userService };
