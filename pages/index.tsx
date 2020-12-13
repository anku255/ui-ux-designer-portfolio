import { DownArrow } from "src/componets/DownArrow";
import { Footer } from "src/componets/Footer";
import { GetInTouch } from "src/componets/GetInTouch";
import { Header } from "src/componets/header";
import { Introduction } from "src/componets/Introduction";
import { JumboTron } from "src/componets/Jumbotron";
import { Projects } from "src/componets/Projects";
import { SectionHeader } from "src/componets/SectionHeader";

export default function IndexPage() {
  return (
    <div className="relative">
      <Header />
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
