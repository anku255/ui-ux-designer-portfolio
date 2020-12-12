const HEADER_HEIGHT = "60";

const WebHeader = () => (
  <header className="hidden h-15 bg-powder-blue-70 text-sm uppercase tracking-wide border-b-2 border-white sm:block">
    <nav className="h-full">
      <ul className="w-full h-full flex items-center justify-center space-x-36">
        <li className="relative">Projects</li>
        <li className="relative">Resume</li>
        <li className="relative">Contact</li>
      </ul>
    </nav>

    <style jsx>{`
      li:before {
        position: absolute;
        bottom: 1px;
        content: "";
        width: 0;
        height: 8px;
        background: #b3e5e1;
        z-index: -1;
        transition: all 0.2s ease-in;
      }

      li:hover:before {
        width: 100%;
      }
    `}</style>
  </header>
);

const JumboTron = () => (
  <section className="jumbotron bg-powder-blue ">
    <div className="h-16" />
    <h1 className="text-white text-6xl font-cursive text-center">
      Ekanshi Kiran
    </h1>

    <style jsx>{`
      .jumbotron {
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
      }

      @media (min-width: 640px) {
        .jumbotron {
          height: calc(100vh - 60);
          height: calc(var(--vh, 1vh) * 100 - 60px);
        }
      }
    `}</style>
  </section>
);

export default function IndexPage() {
  return (
    <div>
      <WebHeader />
      <main>
        <JumboTron />
        <div>something after</div>
      </main>
    </div>
  );
}
