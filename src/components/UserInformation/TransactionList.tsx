interface Transaction {
    id: string;
    type: 'Depósito' | 'Retiro';
    amount: number;
    balance: number;
    date: string;
}


const transactions: Transaction[] = [
    { id: '2260809', type: 'Depósito', amount: 2000.0, balance: 2052.77, date: '9/17, 11:04' },
    { id: '1572417', type: 'Depósito', amount: 2000.0, balance: 2000.17, date: '8/15, 16:21' },
];

export default function TransactionList() {
    return (
        <div className="mt-4 space-y-4">
            <h3 className="text-lg font-semibold text-[#5fa8d3]">Transacciones Recientes</h3>
            {transactions.map((transaction) => (
                <div key={transaction.id} className="bg-[#030f2f] rounded-lg p-4 space-y-2 border border-[#021b79]">
                    <p>{transaction.type} - ${transaction.amount.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
}