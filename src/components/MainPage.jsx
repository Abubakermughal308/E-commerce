import NewArrival from "./NewArrival";
import Crousal from "./Crousal"
import Loader from "./ShimmerCard";
import { LoaderPinwheel } from "lucide-react";
import TopSelling from "./TopSelling";
import CommentSection from "./CommentSection";
import Footer from "./Footer";

const MainPage =()=>{
    return(
        <div>
            <Crousal/>
            <NewArrival/>
            <TopSelling/>
            <CommentSection/>
           
           
        </div>
    )
}
export default MainPage;