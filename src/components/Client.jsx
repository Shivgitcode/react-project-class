import { bg2, client, comma } from "../assets";


export default function Client() {
    return (
        <div className="w-full h-full relative">
            <img src={bg2} alt="" className="w-full h-full object-cover absolute" />
            <div className=" w-[80%] pb-14 flex flex-col items-center relative z-[1] mx-auto">
                <div className=" text-[200px] h-[100px] text-main-0 font-sanchez mb-[30px]">
                    “
                </div>

                <p className=" font-medium mb-[30px] text-center w-[60%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas odio illum ratione iste laboriosam ipsa ut dolores, sequi beatae.</p>
                <div className="flex items-center gap-3">
                    <img src={client} alt="" className=" rounded-full object-center" />
                    <div className="flex flex-col items-center">
                        <h3 className="text-[20px]">Paul Smith</h3>
                        <p className="text-[12px]">Businessman</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
