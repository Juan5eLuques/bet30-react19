interface Props {
    className: string;
}

export const SportsSvg = (props: Props) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 96 96"
            fill="currentColor" // permite cambiar el color con clases de texto
            className={props.className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                clipRule="evenodd"
                d="M14.287 13.917c16.599 6.854 30.869 15.965 43.231 27.143l-.001.002.126.11-.125-.112C64.262 31 65.501 17.31 60.63 1.865 56.773.739 52.34.092 47.758.092c-13.046 0-24.87 5.249-33.47 13.748v.077Zm79.997 46.514a46.803 46.803 0 0 1-7.907 15.996v-.003c-2.275-3.87-4.709-7.622-7.185-11.295l-.137.08c4.463-2.823 9.63-4.63 15.307-5.11l-.078.332ZM80.986 82.734c-4.75 4.553-10.46 8.116-17.124 10.458h-.003l.006-.108a38.977 38.977 0 0 1 9.137-22.842l-.281-.41c2.838 3.924 5.478 8.005 8.265 12.902Zm0 0 .016-.014-.015.015ZM12.017 64.772a83.99 83.99 0 0 0 9.697.599h.003l-.117-.006c.832.039 1.674.06 2.518.06 12.98 0 24.848-4.766 33.883-12.589a132.455 132.455 0 0 1 9.859 11.137 47.738 47.738 0 0 0-11.975 31.216l.284-.042c-2.68.49-5.44.751-8.269.76-21.022-.012-38.88-13.566-45.416-32.75 3.102.685 6.287 1.224 9.931 1.654l-.398-.039Zm-9.533-1.614c-.226-.05-.45-.1-.675-.152l.667.129.008.023Zm65.376.815.045-.051-.045.05ZM58 52.836l-.009-.009.01.01Zm-5.59-5.706A140.354 140.354 0 0 0 9.776 20.677l-.952-.332C3.305 28.021 0 37.61 0 47.97v.038c.018 2.3.192 4.539.512 6.733l-.033-.266c3.542.97 7.889 1.823 12.325 2.386l.488.05c16.526 1.797 30.138-1.637 39.12-9.78Zm21.58 11.182a149.73 149.73 0 0 0-10.601-11.7c7.864-10.897 10.059-25.19 6.466-41.155l.267.126C85.46 13.537 95.953 29.542 96 48.007c0 .604-.048 1.247-.097 1.904-.051.688-.104 1.393-.104 2.087h-.042c-8.002.159-15.445 2.596-21.552 6.586l-.215-.272Zm-10.601-11.7-.003-.003.003.003Z"
            />
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
    )
}
