import Header from "../components/index/Header"
import Categories from "../components/index/Categories"
import Footer from "../components/index/Footer"
import Info from "../components/index/Info"
import NewArrivals from "../components/index/NewArrivals"
import Wrapper from "../components/index/Wrapper"

const Index = () => {
    return(
        <div>
            <Header />
            <Wrapper />
            <Categories />
            <NewArrivals />
            <Info />
            <Footer />
            
        </div>
    )
}
export default Index