
interface Props {
    className: string;
}

export const CrashSvg = (props: Props) => {
    return (
        <svg viewBox="0 0 24 24" width="20"
            height="20"
            fill="currentColor" // permite cambiar el color con clases de texto
            className={props.className}
            xmlns="http://www.w3.org/2000/svg"><path d="M20.5348 2.76843C19.458 2.52426 18.3573 2.40082 17.2532 2.40039C14.7756 2.40039 12.784 3.08375 11.492 4.37572C10.4714 5.39566 9.45705 6.42184 8.44901 7.45421C7.28547 7.3229 4.54148 7.25964 2.68212 9.11996C2.59269 9.2087 2.52171 9.31426 2.47328 9.43056C2.42484 9.54686 2.3999 9.67159 2.3999 9.79757C2.3999 9.92356 2.42484 10.0483 2.47328 10.1646C2.52171 10.2809 2.59269 10.3864 2.68212 10.4752L13.5249 21.3179C13.6137 21.4072 13.7192 21.4781 13.8355 21.5265C13.9518 21.5748 14.0765 21.5997 14.2025 21.5997C14.3284 21.5997 14.4531 21.5748 14.5694 21.5265C14.6857 21.4781 14.7913 21.4072 14.8801 21.3179C16.7529 19.4461 16.6954 16.704 16.5736 15.5578L19.6253 12.5071C22.6836 9.4487 21.293 3.70673 21.2326 3.46425C21.1902 3.29596 21.1029 3.14235 20.98 3.0198C20.8571 2.89725 20.7032 2.81037 20.5348 2.76843ZM18.2701 11.1528L14.881 14.5409C14.7695 14.6524 14.6873 14.7898 14.6416 14.9408C14.596 15.0917 14.5883 15.2517 14.6194 15.4063C14.6242 15.4303 15.0095 17.5551 14.1057 19.1864L4.81367 9.89533C6.44301 8.99632 8.59085 9.41228 8.59756 9.41228C8.91385 9.47937 9.25313 9.37778 9.48219 9.14105C9.48507 9.13817 10.8298 7.74845 12.8482 5.72999C14.0156 4.56261 15.8874 4.31726 17.2532 4.31726C18.1608 4.31726 18.9716 4.42364 19.4882 4.51182C19.7221 5.88334 20.0872 9.33465 18.2701 11.1528Z" fill="#EDEDED"></path><path d="M15.5585 10.3591C16.6171 10.3591 17.4753 9.50091 17.4753 8.44226C17.4753 7.3836 16.6171 6.52539 15.5585 6.52539C14.4998 6.52539 13.6416 7.3836 13.6416 8.44226C13.6416 9.50091 14.4998 10.3591 15.5585 10.3591Z" fill="#EDEDED"></path><path d="M5.27624 15.8184C3.35938 16.7768 3.35937 20.6105 3.35937 20.6105C3.35937 20.6105 6.23467 20.6105 8.15154 18.6937L5.27624 15.8184Z"></path>
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
            `}</style></svg>
    );
};


