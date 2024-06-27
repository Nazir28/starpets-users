import { Router, Request, Response } from 'express';
import { userService } from '../services/users';
import { TxType } from '../utils/helpers/variables';
import { validateUpdateUserBalanceData } from '../validators/update-user-balance';
import { User } from '../db';

const router = Router();

export interface IUpdateBalanceRequest extends Request {
    params: {
        id: string;
    };
    body: {
        amount: number;
        type?: TxType;
    };
}

const updateUserBalanceHandler = async (
    req: IUpdateBalanceRequest,
    res: Response,
) => {
    try {
        const userId = parseInt(req.params.id, 0);
        const { amount, type } = req.body;
        let user: User;
        if (!type) {
            user = await userService.updateUserBalance({
                id: userId,
                amount,
            });
        } else {
            user = await userService.updateUserBalanceByType({
                id: userId,
                amount,
                type,
            });
        }
        res.json(user);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

router.post(
    '/:id/balance',
    validateUpdateUserBalanceData,
    updateUserBalanceHandler,
);

const userRouter = router;

export { userRouter };
