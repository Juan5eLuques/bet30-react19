
interface Props {
    className: string;
}

export const LiveSvg = (props: Props) => {
    return (
        <svg width="20"
            height="20"
            x="0px" y="0px" viewBox="0 0 24 24"
            fill="currentColor" // permite cambiar el color con clases de texto
            className={props.className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <path d="M21,12c0,2.481-1.009,4.731-2.639,6.361l1.414,1.414C21.766,17.783,23,15.033,23,12s-1.234-5.783-3.225-7.775l-1.414,1.414
           C19.991,7.269,21,9.519,21,12z"/>
                <path d="M3,12c0-2.481,1.009-4.731,2.639-6.361L4.225,4.225C2.234,6.217,1,8.967,1,12s1.234,5.783,3.225,7.775l1.414-1.414
           C4.009,16.731,3,14.481,3,12z"/>
                <path d="M16.947,7.053l-1.414,1.414C16.439,9.372,17,10.622,17,12s-0.561,2.628-1.466,3.534l1.414,1.414
           C18.215,15.68,19,13.93,19,12S18.215,8.32,16.947,7.053z"/>
                <path d="M7.053,16.947l1.414-1.414C7.561,14.628,7,13.378,7,12s0.561-2.628,1.466-3.534L7.053,7.053C5.785,8.32,5,10.07,5,12
           S5.785,15.68,7.053,16.947z"/>
            </g>
            <g>
                <circle cx="12" cy="12" r="3" />
            </g>
            <style jsx>{`
                a {
        text-decoration: none;
    }
    .border-top {
        box-shadow: inset 0 4px 0 0 #5fa8d3;
    }
    .menu-shadow {
        position: absolute;
        bottom: -6px; /* Ajusta según necesites */
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 5rem; /* Ajusta según el ancho que necesites */
        height: 1rem; /* Ajusta según la altura que necesites */
        background: linear-gradient(
            to bottom,
            transparent,
            #4c1d95
        ); /* Cambia #4c1d95 al color que prefieras */
        border-radius: 0 0 0.5rem 0.5rem; /* Redondeo en la parte inferior */
    }
    span {
        font-size: 12px;
    }

    @keyframes latido {
        0%,
        100% {
            transform: scale(1);
            filter: brightness(1) drop-shadow(0 0 0px #5fa8d3);
        }
        50% {
            transform: scale(1.1);
            filter: brightness(1.5) drop-shadow(0 0 15px #5fa8d3);
        }
    }

    .latido {
        animation: latido 1.5s ease-in-out 1; /* Se ejecuta una vez */
    }
            `}</style>
        </svg>
    );
};

