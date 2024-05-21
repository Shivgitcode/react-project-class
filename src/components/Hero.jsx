import { bg1 } from "../assets";
import Navbar from "./Navbar";
import Form from "./Form";

export default function Hero() {
    return (
        <div className=" myBackground w-full relative h-full">
            <img src={bg1} alt="" className="absolute w-full h-[1000px] object-cover " />
            <Navbar></Navbar>
            <Form></Form>
        </div>
    )
}
