import { TxType, txType } from '../utils/helpers/variables';

class ValidateEnum {
    amount = (amount: number) => {
        if (typeof amount !== 'number') {
            return 'Amount must be a number';
        }
        return null;
    };
    txType = (type: TxType) => {
        const keys = Object.keys(txType);
        if (!keys.some((t) => t === type)) {
            return 'Invalid tx type';
        }
        return null;
    };
}
export const validateEnum = new ValidateEnum();
