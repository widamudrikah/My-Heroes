import HeroComp from "./HeroComp";
import NavbarComp from "./NavbarComp";
import GalleryComp from "./GalleryComp";
import ServiceComp from "./ServiceComp";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <HeroComp />
      <NavbarComp />
      <GalleryComp />
      <ServiceComp />
      <Footer />
    </div>
  );
};

export default Home;
