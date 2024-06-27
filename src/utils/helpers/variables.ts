export const txType = {
    DEPOSIT: 'DEPOSIT',
    WITHDRAW: 'WITHDRAW',
};
export type TxType = keyof typeof txType;
