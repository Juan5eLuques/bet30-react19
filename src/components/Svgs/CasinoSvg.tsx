interface Props {
    className: string;
}

export const CasinoSvg = (props: Props) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 64 64"
            fill="currentColor" // permite cambiar el color con clases de texto
            className={props.className}
            xmlns="http://www.w3.org/2000/svg"> <title></title> <path d="M12.265 47.726.21 14.603a3.574 3.574 0 0 1 2.108-4.553l.024-.007 19.282-7.015a3.55 3.55 0 0 1 4.553 2.082l.008.024.694 1.92L12.69 46.073a8.9 8.9 0 0 0-.418 1.598l-.008.056ZM63.79 15.511 48.002 58.93a3.529 3.529 0 0 1-4.558 2.1l.024.009-21.948-8.001a3.58 3.58 0 0 1-2.124-4.585l-.008.024 15.787-43.39a3.555 3.555 0 0 1 4.559-2.126l-.024-.008 21.948 8a3.58 3.58 0 0 1 2.124 4.585l.008-.024v-.002ZM50.457 32.685l-1.386-3.254a1.789 1.789 0 0 0-2.333-.956l.012-.004-2.666 1.174a1.787 1.787 0 0 1-2.316-.948l-.004-.012-1.146-2.667a1.764 1.764 0 0 0-2.332-.93l.012-.004-3.28 1.386a1.738 1.738 0 0 0-.929 2.33l-.004-.01 3.92 9.255a1.816 1.816 0 0 0 2.359.928l-.012.005 9.227-3.947a1.737 1.737 0 0 0 .794-2.356l.004.01h.08Z"></path>
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
            `}</style></svg>
    );
};


