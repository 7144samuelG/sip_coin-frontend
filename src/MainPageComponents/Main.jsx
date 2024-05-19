import { About } from "../components/about";
import { Features } from "../components/features";
import { Footer } from "../components/footer";
import { Hearder } from "../components/header";
import { Usher } from "../components/mainex";
import { RoadMap } from "../components/roadmap";

export default function MainPage() {
  return (
    <div className="container">
      <Hearder />
      <Usher />
      <Features />
      <RoadMap />
      <About />
      <Footer />
    </div>
  );
}
