// import { useEffect } from "react";
import Image from "next/image";

const WebHeader = () => (
  <header
    className="fixed top-0 left-0 z-10 hidden w-full text-sm tracking-wide uppercase border-b-2 border-white h-15 sm:block"
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      backgroundImage: "url(/images/drawer/drawer-box.png)",
      backdropFilter: "blur(3px)",
    }}
  >
    <nav className="h-full">
      <ul className="flex items-center justify-center w-full h-full space-x-36">
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
  <section className="relative jumbotron bg-powder-blue ">
    <div className="h-16" />
    <h1 className="text-6xl text-center text-alabaster font-cursive">
      Ekanshi Kiran
    </h1>
    <div className="h-3" />
    <h2 className="text-2xl tracking-wider text-center uppercase">
      Product Designer
    </h2>

    <div className="absolute top-0 left-0 w-full h-full mt-24">
      <img
        src="/images/desktop/clouds.png"
        alt=""
        className="absolute bottom-0 left-0 w-full h-full"
      />
    </div>

    <div className="absolute left-0 w-full top-44 jumbotron">
      <div className="flex justify-center transform -translate-x-4">
        <img
          src="/images/desktop/illustration.png"
          alt="Ekanshi Kiran"
          className="max-w-full"
        />
      </div>
    </div>

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

const Introduction = () => (
  <section className="flex pb-24 h-172">
    {/* Left */}
    <div className="flex items-center justify-center w-1/2 h-full">
      <Image
        src="/images/desktop/ekanshi.png"
        width={419}
        height={470}
        alt="Ekanshi Kiran"
        className=""
        layout="intrinsic"
      />
    </div>
    {/* Right */}
    <div className="flex flex-col justify-center w-1/2 h-full pr-40">
      <div className="text-5xl font-cursive">Hello there!</div>
      <div className="h-6"></div>
      <div className="text-xl">
        I am a product designer who love to design beautiful website, products
        and design systems that help people to makes a difference.
      </div>
    </div>
  </section>
);

const SectionHeader = ({ children }: { children: string }) => (
  <div className="text-4xl text-center font-cursive text-silver">
    {children}
  </div>
);

const Project = ({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) => (
  <div className="px-24 mx-auto h-112">
    <div className="flex max-h-240">
      {/* Left */}
      <div className="self-start w-1/2 p-10 mr-16 bg-white">
        <div className="text-5xl font-cursive">{title}</div>
        <div className="h-8"></div>
        <div className="text-xl">{description}</div>
      </div>
      {/* Right */}
      <div className="flex justify-center w-1/2">
        <Image
          src={imageUrl}
          alt={title}
          width={450}
          height={450}
          layout="intrinsic"
        />
      </div>
    </div>
  </div>
);

const DownArrow = () => (
  <div className="flex justify-center">
    <svg
      className="text-silver"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="8"
    >
      <path
        d="M.015.606c-.406.93 6.9 7.37 7.969 7.394s8.672-6.718 7.969-7.394S.422-.324.015.606z"
        fill="currentColor"
      />
    </svg>
  </div>
);
const Projects = () => (
  <section className="pt-8 pb-24 bg-alabaster">
    <SectionHeader>Projects</SectionHeader>
    <div className="h-3"></div>
    <DownArrow />

    <div className="h-16"></div>
    {/* Projects */}
    <Project
      title="Go Flatmates"
      description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      imageUrl="/images/desktop/project-1.png"
    />
    <div className="h-24"></div>
    <Project
      title="Cron J"
      description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      imageUrl="/images/desktop/project-2.png"
    />
    <div className="h-24"></div>
    <Project
      title="Quotic"
      description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      imageUrl="/images/desktop/project-3.png"
    />
    <div className="h-16"></div>
    <div className="flex justify-center ">
      <a
        href="https://www.behance.net/ekanshikiran"
        target="_blank"
        rel="noreferrer noopener"
      >
        <button className="px-8 py-6 text-base tracking-widest uppercase bg-white border border-powder-blue focus:outline-none hover:bg-powder-blue hover:text-white">
          View All
        </button>
      </a>
    </div>
  </section>
);

const BackToTop = () => (
  <button
    id="scroll-to-top"
    className="absolute right-0 px-4 py-3 text-white uppercase border border-white mr-18 bottom-1 focus:outline-none"
    onClick={() => {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }}
  >
    <div className="flex justify-center mb-2 transform rotate-180">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8">
        <path
          d="M.015.606c-.406.93 6.9 7.37 7.969 7.394s8.672-6.718 7.969-7.394S.422-.324.015.606z"
          fill="currentColor"
        />
      </svg>
    </div>
    Top
  </button>
);

const Footer = () => (
  <footer className="relative flex items-center justify-center bg-powder-blue py-27">
    <ul className="flex space-x-16 text-3xl font-bold tracking-wide text-white">
      <li>
        <a
          href="https://www.behance.net/ekanshikiran"
          target="_blank"
          rel="noreferrer noopener"
        >
          Behance
        </a>
      </li>
      <li>
        <a
          href="https://dribbble.com/ekanshi"
          target="_blank"
          rel="noreferrer noopener"
        >
          Dribble
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ekanshikiran/"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          href="ekanshi.design@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Email
        </a>
      </li>
    </ul>
    <BackToTop />
  </footer>
);

const GetInTouch = () => (
  <section className="py-14">
    <SectionHeader>Get in Touch</SectionHeader>
    <div className="h-3"></div>
    <DownArrow />
  </section>
);

export default function IndexPage() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollToTopButton = document.getElementById("scroll-to-top");
  //     if (window.scrollY > 300) {
  //       scrollToTopButton.classList.add("block");
  //     } else {
  //       scrollToTopButton.classList.remove("block");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <div className="mt-15">
      <WebHeader />
      <main>
        <JumboTron />
        <Introduction />
        <Projects />
        <GetInTouch />
        <Footer />
      </main>
    </div>
  );
}
