import { call, mainIcon } from "../assets";

export default function Navbar() {
    return (
        <div className=" w-full ">
            <nav className=" relative z-[1] w-[80%] mx-auto flex justify-between py-4">
                <div className="flex items-end gap-4">
                    <img src={mainIcon} alt="" />
                    <span className="text-white font-bold italic text-[25px]">Finanza</span>
                </div>
                <div className="flex items-center gap-3">
                    <img src={call} alt="" />
                    <p><span className="hidden text-[15px] text-white font-bold"> call us now</span> <span className="text-[15px] text-white font-bold">+44 00 000 123</span></p>

                </div>


            </nav>
        </div>
    )
}
