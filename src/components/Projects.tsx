import Image from "next/image";
import Link from "next/link";
import { DownArrow } from "./DownArrow";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Parking CMS PORTAL",
    imageUrl: "/images/projects/parking-cms.png",
    projectUrl: "https://www.behance.net/gallery/136900501/Parking-CMS",
    color: "#181818",
  },
  {
    title: "Go Flatmate Case Study",
    imageUrl: "/images/projects/go-flatmates.png",
    projectUrl:
      "https://www.behance.net/gallery/102567267/Graduation-project-Goflatmatescom",
    color: "#4D5BA7",
  },
  {
    title: "Pay App Interface",
    imageUrl: "/images/projects/pay-application.png",
    projectUrl: "https://www.behance.net/gallery/98125971/Pay-Application",
    color: "#2C6DEF",
  },
  {
    title: "E-Learning Platform",
    imageUrl: "/images/projects/e-learning.png",
    projectUrl: "https://www.behance.net/gallery/100565297/E-Learning-Website",
    color: "#77928E",
  },
  {
    title: "Internship Application",
    imageUrl: "/images/projects/internship-app.png",
    projectUrl: "https://www.behance.net/gallery/105775643/Internship-App",
    color: "#14A2E9",
  },
  {
    title: "CronJ Technology",
    imageUrl: "/images/projects/cronj.png",
    projectUrl: "https://www.behance.net/gallery/99165633/About-CronJ-Web-Page",
    color: "#F25868",
  },
  {
    title: "Micro Transaction",
    imageUrl: "/images/projects/jwellery-website.png",
    projectUrl: "https://www.behance.net/gallery/98117813/Jewellery-website",
    color: "#858585",
  },
  {
    title: "Digital Art",
    imageUrl: "/images/projects/defy-tradition.png",
    projectUrl: "https://www.behance.net/gallery/67682373/defy-traditions",
    color: "#7D789B",
  },
  {
    title: "Illustration",
    imageUrl: "/images/projects/painting.png",
    projectUrl: "https://www.behance.net/gallery/63798651/painting",
    color: "#705E50",
  },
];

const Project = ({
  project: { title, imageUrl, projectUrl, color },
}: {
  project: {
    title: string;
    imageUrl: string;
    projectUrl: string;
    color: string;
  };
}) => {
  return (
    <Link href={projectUrl}>
      <a target="_blank" rel="noopener noreferrer">
        <div
          className="relative h-0 group aspect-auto projectContainer"
          style={{ paddingBottom: "80%" }} // Maintain aspect ratio
        >
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className=""
            loading="eager"
          />
          <div className={`absolute inset-0 projectDetails`}>
            <div className="absolute text-4xl font-bold tracking-wide uppercase break-words bottom-10 left-10 font-josephin">
              {title}
            </div>
          </div>
          <style jsx>{`
            .projectContainer {
              overflow: hidden;
            }

            .projectDetails {
              /* prettier-ignore */
              background-color: rgba(255,255,255,0.8);
              transform: scaleX(0); /* Initial scale to 0, hidden */
              transform-origin: left;
              transition: transform 0.3s ease-in-out;
              color: ${color};
              border: 6px solid ${color};
            }

            .projectContainer:hover .projectDetails {
              /* prettier-ignore */
              transform: scaleX(1);
            }
          `}</style>
        </div>
      </a>
    </Link>
  );
};

export const Projects = () => (
  <section
    id="projects"
    className="pt-14 mt-14 sm:pt-8 pb-18 sm:pb-24 bg-alabaster scroll-margin-top-15"
  >
    <SectionHeading>Projects</SectionHeading>
    <div className="h-3"></div>
    <DownArrow />

    <div className="h-10 sm:h-16"></div>
    {/* Projects */}
    <div className="grid grid-cols-1 gap-4 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project) => (
        <Project key={project.projectUrl} project={project} />
      ))}
    </div>
    <div className="h-16"></div>
    <div className="flex justify-center ">
      <a
        href="https://www.behance.net/ekanshikiran"
        target="_blank"
        rel="noreferrer noopener"
      >
        <button className="relative px-8 py-6 font-sans text-base tracking-widest uppercase bg-white border hover-bg-animation-dark border-powder-blue-dark focus:outline-none hover:text-white">
          View All
        </button>
      </a>
    </div>
  </section>
);
