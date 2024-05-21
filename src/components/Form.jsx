import { woman } from "../assets";

export default function Form() {
    return (
        <div className="relative z-[1] w-[80%] mx-auto py-10 sm:py-0 sm:mt-10 flex flex-col ">
            <h1 className=" text-[40px] text-white font-semibold mb-[40px] sm:w-[50%] sm:ml-auto sm:h-[50px]">Leave <span className=" text-main-0">Money Problem </span>to us
                and <span className="text-main-0">just focus on your Business</span></h1>


            <div className="flex items-center justify-center ">
                <div className="hidden sm:block relative z-[-1] left-8 ">
                    <img src={woman} alt="" />
                </div>

                <div className=" bg-[#00008b] p-[25px] w-full flex flex-col justify-start items-start sm:w-[500px]  rounded-tr-[30px] relative sm:top-20">
                    <h2 className="text-[25px] text-white font-medium mb-[20px] sm:text-[40px]">Leave your number and we
                        will call you back</h2>
                    <p className=" text-[15px] text-white mb-[25px] sm:text-[20px]">Get up to $5000* within 10 minutes**</p>


                    <form action="" className="flex flex-col items-start gap-[15px] w-full sm:gap-[20px] ">

                        <input type="text" name="" id="" placeholder="Full Name" className="bg-white py-[5px] sm:py-[10px]  px-[10px] w-full" />
                        <div className="flex justify-start w-full gap-[10px]">
                            <input type="text" name="" id="" placeholder="Email " className="bg-white sm:py-[10px] py-[5px] px-[10px] w-full" />
                            <input type="text" name="" id="" placeholder="phone" className="bg-white sm:py-[10px] py-[5px] px-[10px] w-full" />
                        </div>
                        <textarea name="" id="" cols="30" rows="4" placeholder="Message" className="bg-white sm:py-[10px] py-[5px] px-[10px] sm:w-full"></textarea>
                        <button className=" font-medium bg-main-0 py-[7px] px-[18px] mb-[10px] rounded-sm">Submit</button>

                    </form>

                    <p className=" text-[10px] text-white sm:text-[15px]">*We don't share your personal info with anyone.</p>

                </div>

            </div>



        </div>
    )
}
