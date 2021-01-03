import Image from "next/image";
import Link from "next/link";
import { DownArrow } from "./DownArrow";
import { SectionHeader } from "./SectionHeader";

const Project = ({
  title,
  description,
  imageUrl,
  projectUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}) => (
  <Link href={projectUrl}>
    <a target="_blank" rel="noopener noreferrer">
      <div className="px-6 mx-auto sm:px-24 sm:h-112">
        <div className="flex flex-col sm:flex-row sm:max-h-240">
          {/* Left */}
          <div className="relative self-start order-3 w-full p-10 mr-16 bg-white sm:order-1 sm:w-1/2 hover-bg-animation">
            <div className="text-5xl font-cursive">{title}</div>
            <div className="h-8"></div>
            <div className="text-xl">{description}</div>
          </div>
          {/* Right */}
          <div className="flex justify-center order-2 w-full h-full mb-6 sm:mb-0 sm:w-1/2 sm:h-1/2">
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
    </a>
  </Link>
);

export const Projects = () => (
  <section
    id="projects"
    className="pt-10 sm:pt-8 pb-18 sm:pb-24 bg-alabaster scroll-margin-top-15"
  >
    <SectionHeader>Projects</SectionHeader>
    <div className="h-3"></div>
    <DownArrow />

    <div className="h-10 sm:h-16"></div>
    {/* Projects */}
    <Project
      title="Go Flatmates"
      description="AI-powered millennial housing and lifestyle platform that allows users to connect users to connect with the right people at the right location, to solve their housing and living requirements."
      imageUrl="/images/desktop/project1.png"
      projectUrl="https://www.behance.net/gallery/102567267/Graduation-project-Goflatmatescom"
    />
    <div className="h-10 sm:h-24"></div>
    <Project
      title="Codes"
      description="A passionate software engineer portfolio, showing a diverse range of projects and Tech blogs. Check out the live website here."
      imageUrl="/images/desktop/project2.png"
      projectUrl="https://ankucodes.netlify.app/"
    />
    <div className="h-10 sm:h-24"></div>
    <Project
      title="Quotic"
      description="A new place to find all your favourite series & movie quotes, or simply find your favorite characters' best dialogues here. Check the live project."
      imageUrl="/images/desktop/project3.png"
      projectUrl="https://quotic.vercel.app/"
    />
    <div className="h-16"></div>
    <div className="flex justify-center ">
      <a
        href="https://www.behance.net/ekanshikiran"
        target="_blank"
        rel="noreferrer noopener"
      >
        <button className="relative px-8 py-6 text-base tracking-widest uppercase bg-white border hover-bg-animation border-powder-blue focus:outline-none hover:text-white">
          View All
        </button>
      </a>
    </div>
  </section>
);
