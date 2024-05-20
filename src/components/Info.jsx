import { bg2, bg3 } from "../assets";
import { info } from "../utils";

export default function Info() {
    return (
        <div className="w-full h-full relative">
            <div className="absolute w-full h-full">
                <img src={bg3} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="w-[80%] mx-auto relative z-[1] flex flex-col items-center py-[80px] sm:flex-row sm:justify-between">
                {info.map(el => (
                    <div className="flex flex-col items-center mb-10">
                        <h3 className="text-[60px] font-bold text-[#11686d] mb-[25px]">{el.number}</h3>
                        <div className="w-[50px] h-[5px] bg-main-0 mb-[40px]"></div>
                        <p className="font-medium text-white text-xl uppercase">{el.title}</p>


                    </div>
                ))}

            </div>
        </div>
    )
}
