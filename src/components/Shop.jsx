import { InfoSolid } from "./chellange";

export default function Shop(){
    return(
        <div className="w-full h-[100px] bg-[#fff9f4] flex flex-col justify-between items-center  ">
            <div className="w-[50%] mx-auto h-[100%] flex justify-between items-center flex-col ">
                <div className="w-full h-full flex justify-between items-center flex-col">
                        <h1 className="text-[3vh] text-[#0E343D]">
                        Shop The New Arrivals
                        </h1>
                        <div className="w-full h-[50%] flex flex-row justify-between items-center border-b-[1px] border-[grey]">
                            <p className="border-[#0E343D] border-b-[4px]  cursor-pointer h h-full  flex justify-center items-center">
                            All Product
                            </p>
                            <p className="hover:border-[#0E343D] cursor-pointer hover:border-b-[4px] transition-opacity h-full flex justify-center items-center">
                            New arrivals
                            </p>
                            <p className=" h-full flex justify-center hover:border-[#0E343D] transition-opacity cursor-pointer hover:border-b-[4px] items-center">
                            Bundled Products
                            </p>
                            <p className=" h-full flex justify-center hover:border-[#0E343D] transition-opacity cursor-pointer hover:border-b-[4px] items-center">
                            Daily Use
                            </p>
                        </div>
                    </div> 
                                       
            </div>
        </div>
    )
}