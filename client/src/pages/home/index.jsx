import Sidebar from "../../components/Sidebar";
import { SwipeCarousel } from "../../components/SwipeCarousel";

export default function HomePage(){
    return(
        <>
        <Sidebar />
        <section className="pl-14">

        <SwipeCarousel />
        </section>
        </>
    )
}