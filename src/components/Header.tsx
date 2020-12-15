export const Header = () => (
  <header className="fixed top-0 left-0 z-10 hidden w-full text-sm tracking-wide uppercase border-b-2 border-white header bg-white-70 h-15 sm:block">
    <nav className="h-full">
      <ul className="flex items-center justify-center w-full h-full space-x-36">
        <li className="relative">
          <a href="#projects">Projects</a>
        </li>
        <li className="relative">
          <a href="/files/Resume.pdf" target="__blank">
            Resume
          </a>
        </li>
        <li className="relative">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>

    <style jsx>{`
      .header {
        background-image: url(/images/drawer/drawer-box.png);
        backdrop-filter: blur(3px);
      }

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
