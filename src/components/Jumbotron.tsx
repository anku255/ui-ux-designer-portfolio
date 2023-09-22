import { useEffect } from "react";
import Rellax from "rellax";

export const JumboTron = () => {
  useEffect(() => {
    const rellax = new Rellax(".rellax", {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    return function cleanListeners() {
      rellax.destroy();
    };
  }, []);
  return (
    <section
      className="relative pt-20 sm:pt-15 jumbotron rellax"
      data-rellax-speed={6}
    >
      <div className="background"></div>
      <div className="h-16" />
      <h1 className="relative z-30 text-6xl font-bold tracking-wide text-center uppercase text-alabaster font-josephin">
        Ekanshi Kiran
      </h1>
      <div className="h-3 " />
      <h2 className="relative z-30 text-2xl font-bold text-center font-baskerville text-powder-blue-dark">
        Experience Designer
      </h2>

      <div
        className="absolute bottom-0 left-0 clouds bg-powder-blue rellax"
        data-rellax-speed={6}
      />
      <div
        className="absolute top-0 left-0 illustration rellax"
        data-rellax-speed={-6}
      />

      <style jsx>{`
        .background {
          position: absolute;
          top: 0;
          left: 0;
          height: 80vh;
          height: calc(var(--vh, 1vh) * 80);
          background: var(--powder-blue);
          width: 100%;
          z-index: -1;
        }

        .jumbotron {
          height: 100vh;
          height: calc(calc(var(--vh, 1vh) * 100) + 12rem);
        }

        .clouds {
          width: 100%;
          height: calc(calc(var(--vh, 1vh) * 100) - 3.75rem);
          margin-top: 12rem;
          background-color: transparent;
          background-image: url(/images/desktop/clouds.png);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          z-index: 11;
        }

        .illustration {
          width: 100vw;
          height: 70vh;
          background-color: var(--powder-blue);
          background-image: url(/images/desktop/illustration.png);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 80%;
          top: 48%;
          left: 48%;
          transform: translate(-50%, -50%) !important;
          z-index: 10;
        }

        @media (min-width: 640px) {
          .illustration {
            top: 50%;
            background-size: 45%;
          }
        }
      `}</style>
    </section>
  );
};
