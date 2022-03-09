import Categories from "../components/index/Categories";
import Info from "../components/index/Info";
import NewArrivals from "../components/index/NewArrivals";
import Wrapper from "../components/index/Wrapper";

const Index = () => {
  return (
    <div>
      <Wrapper />
      <Categories />
      <NewArrivals />
      <Info />
    </div>
  );
};
export default Index;
