interface Props {
    outcome: number
}

export const LabelResult = ({ outcome }: Props) => {

    switch (outcome) {
        case 1: return <div className={`text-xs font-semibold text-[#4ade80]`}>Pendiente</div>
        case 2: return <div className={`text-xs font-semibold text-[#4ade80]`}>Ganada</div>
        case 3: return <div className={`text-xs font-semibold text-[#f87171]`}>Perdida</div>
        case 4: return <div className={`text-xs font-semibold text-[#4ade80]`}>Reembolsado</div>
        case 6: return <div className={`text-xs font-semibold text-[#4ade80]`}>Gana la mitad</div>
        case 5: return <div className={`text-xs font-semibold text-[#4ade80]`}>Retirado</div>
        case 7: return <div className={`text-xs font-semibold text-[#4ade80]`}>Pierde la mitad</div>
        case 8: return <div className={`text-xs font-semibold text-[#4ade80]`}>Cancelado</div>
        case 10: return <div className={`text-xs font-semibold text-[#4ade80]`}>Restablecer</div>
    }


}