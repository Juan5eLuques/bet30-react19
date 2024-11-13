interface Spin {
    id: string;
    game: string;
    date: string;
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    status: 'Ganado' | 'Perdido';
}
const spins: Spin[] = [
    { id: '1211198824', game: 'Cosmic Cash', date: '9/19, 22:37', amount: 9.6, balanceBefore: 337.57, balanceAfter: 327.97, status: 'Perdido' },
];

export default function SpinList() {
    return (
        <div className="mt-4 space-y-4">
            <h3 className="text-lg font-semibold text-[#5fa8d3]">Spins Recientes</h3>
            {spins.map((spin) => (
                <div key={spin.id} className="bg-[#030f2f] rounded-lg p-4 space-y-2 border border-[#021b79]">
                    <p>{spin.game} - ${spin.amount.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
}