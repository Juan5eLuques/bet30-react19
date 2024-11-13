
interface Bet {
    id: string;
    type: 'Combinada';
    status: 'Ganado' | 'Perdido';
    quota: number;
    date: string;
    amount: number;
    lostAmount: number;
    matches: {
        status: 'Ganado' | 'Perdido';
        teams: string;
        startTime: string;
        bet: string;
    }[];
}


const bets: Bet[] = [
    {
        id: '23339',
        type: 'Combinada',
        status: 'Perdido',
        quota: 1.85,
        date: '8/22, 20:01',
        amount: 1616.0,
        lostAmount: 1616,
        matches: [
            { status: 'Perdido', teams: 'Belgrano VS Athletico Paranaense', startTime: '8/22, 20:01', bet: '1X2Belgrano(1.54)' },
            { status: 'Ganado', teams: 'Sao Paulo SP VS Nacional Montevideo', startTime: '8/22, 20:01', bet: '1X2Sao Paulo SP(1.2)' },
        ],
    },
];

export default function BetList() {

    return (
        <div className="mt-4 space-y-4">
            <h3 className="text-lg font-semibold text-[#5fa8d3]">Últimas Apuestas</h3>
            {bets.map((bet) => (
                <div key={bet.id} className="bg-[#030f2f] rounded-lg p-4 space-y-2 border border-[#021b79]">
                    <div className="flex justify-between items-center">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${bet.status === 'Ganado' ? 'bg-green-600' : 'bg-[#dc2626]'}`}>{bet.status}</span>
                    </div>
                    <div className="text-sm">
                        <p>Cuota({bet.quota})</p>
                        <p>Tiempo de Apuesta: {bet.date}</p>
                        <p>Monto: ${bet.amount.toFixed(2)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}