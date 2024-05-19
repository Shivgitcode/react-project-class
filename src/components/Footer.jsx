import { mail, phone } from "../assets";

export default function Footer() {
    return (
        <div className="w-full bg-[#0d0dc8]">
            <div className="w-[80%] mx-auto flex flex-col items-center py-10">
                {/* contact */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="flex flex-col items-center gap-3">
                        <div className=" bg-main-0 p-[10px]">
                            <img src={phone} alt="" />


                        </div>
                        <p className="text-[20px] text-white">+44 00 00 1234</p>
                    </div>
                    <div className="w-[2px] h-[70px] bg-white">
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className=" bg-main-0 p-[10px]">
                            <img src={mail} alt="" />

                        </div>
                        <p className="text-[20px] text-white">name@gmail.com</p>
                    </div>

                </div>

                {/* desc  */}
                <p className="text-center w-[70%] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum perspiciatis incidunt nam vitae possimus exercitationem quisquam fugiat totam in?</p>



            </div>
            <div className=" bg-[#00008b]">
                <p className="text-center w-full py-4 text-white font-semibold">Powered By PSDFreebees.com,Copyright 2017 All Rights Reserved</p>
            </div>
        </div>
    )
}
