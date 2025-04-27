import Categories from "./Categories";
import Banner from "./Banner";
import Herosection from "./Herosection";
import TrendingProducts from "../shop/TrendingProducts";
import DealsSection from "./DealsSection";
import PromoBanner from "./PromoBanner";
import Blogs from "../blogs/Blogs";
const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Herosection />
      <TrendingProducts />
      <DealsSection/>
      <PromoBanner/>
      <Blogs/>
    </>
  );
};

export default Home;
