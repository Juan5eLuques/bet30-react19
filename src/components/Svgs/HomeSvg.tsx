interface Props {
    className: string;
}

export const HomeSvg = (props: Props) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="currentColor" // permite cambiar el color con clases de texto
            className={props.className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                clipRule="evenodd"
                d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z"
            />

            <style jsx>{`
                a {
                    text-decoration: none;
                    transition: color 0.3s ease; /* Transición para color */
                }
                .border-top {
                    box-shadow: inset 0 4px 0 0 #5fa8d3;
                }
                span {
                    font-size: 12px;
                    transition: color 0.3s ease; /* Transición para el texto */
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
                    animation: latido 1.5s ease-in-out; /* Hacer que la animación sea infinita para un efecto continuo */
                }
            `}</style>
        </svg>

    );
};
