import Image from "next/image";

export const JumboTron = () => (
  <section className="relative pt-20 sm:pt-15 jumbotron bg-powder-blue">
    <div className="h-16" />
    <h1 className="text-6xl text-center text-alabaster font-cursive">
      Ekanshi Kiran
    </h1>
    <div className="h-3" />
    <h2 className="text-2xl tracking-wider text-center uppercase">
      Product Designer
    </h2>

    <div className="absolute top-0 left-0 sm:w-full sm:h-full sm:mt-24">
      {/* <img
        src="/images/mobile/clouds.png"
        alt="Clouds"
        className="absolute bottom-0 left-0 w-full h-full sm:object-cover"
      /> */}
      <Image
        src="/images/desktop/clouds.png"
        alt="Clouds"
        width={1366}
        height={883}
        layout="responsive"
        className="absolute bottom-0 left-0 w-full h-full sm:object-cover"
      />
    </div>

    <div className="absolute left-0 w-full top-72 sm:top-64 jumbotron">
      <div className="flex justify-center transform -translate-x-4">
        <Image
          src="/images/desktop/illustration.png"
          alt="Ekanshi Kiran"
          className="max-w-full "
          width={530}
          height={409}
          layout="intrinsic"
        />
      </div>
    </div>

    <style jsx>{`
      .jumbotron {
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
      }
    `}</style>
  </section>
);
