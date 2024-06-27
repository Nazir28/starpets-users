import { Response, NextFunction } from 'express';
import { IUpdateBalanceRequest } from '../controllers/users';
import { validateEnum } from './validate-enums';

export const validateUpdateUserBalanceData = (
    req: IUpdateBalanceRequest,
    res: Response,
    next: NextFunction,
) => {
    const { amount, type } = req.body;
    const isAmount = validateEnum.amount(amount);
    if (isAmount !== null) {
        res.status(400).json({ error: isAmount });
        return;
    }
    if (!type) {
        next();
        return;
    }
    const isType = validateEnum.txType(type);
    if (isType !== null) {
        res.status(400).json({ error: isType });
        return;
    }
    next();
};
