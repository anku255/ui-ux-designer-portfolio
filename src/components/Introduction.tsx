import Image from "next/image";

export const Introduction = () => (
  <section className="flex flex-col pb-24 sm:flex-row sm:h-172">
    {/* Left */}
    <div className="flex items-center justify-center order-3 w-full h-92 sm:h-full sm:w-1/2 sm:order-1">
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
    <div className="flex flex-col justify-center order-1 w-full h-full px-12 py-10 text-center sm:w-1/2 sm:py-0 sm:text-left sm:pr-40 sm:pl-0">
      <div className="text-5xl font-cursive">Hello there!</div>
      <div className="h-6"></div>
      <div className="text-xl">
        I am a product designer who love to design beautiful website, products
        and design systems that help people to makes a difference.
      </div>
    </div>
  </section>
);
