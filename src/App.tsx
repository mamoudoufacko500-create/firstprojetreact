import Discutionsection from "./composants/discution-section";
import Footersection from "./composants/footer-section";
import Herosection from "./composants/hero-section";
import Presentationsection from "./composants/presentation-section";
import Servicesection from "./composants/service-section";
import Testimonialsection from "./composants/testimonial-section";
import UserButton from "./composants/User-Button";
import { menu, Services } from "./data/data";

function App() {
  return (
    <body className="">
      <Herosection />
      <Servicesection />
      <Testimonialsection />
      <Presentationsection />
      <Discutionsection />
      <Footersection />
      <UserButton className="" />
    </body>
  );
}

export default App;
