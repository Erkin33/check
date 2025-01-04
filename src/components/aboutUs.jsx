export default function AboutUs(){
    return(
        <div className=' w-full bg-[#fff9f4] h-[700px] min-[1024px]:h-[500px] flex justify-between items-center '>
        <div className="w-[50%] h-[80%] min-[1024px]:h-[90%] flex justify-between items-center flex-col ">

        <small className="mt-[10%] w-[70%] text-[#CE8B39] text-[2vh]"> 
        Glamorous Life
        </small>
        <h1 className="text-[#0E343D] xl:text-[4vh]  text-[4vh] min-[1024px]:text-[3.5vh] w-[71%] font-bold">
        Embrace the Unseen Magic
of Uniqueness
        </h1>
        <p className="text-[#000000]  min-[1024px]:text-[1.7vh]  w-[71%] mt-[5%] mb-[5%]">
        Vestibulum augue nibh, elementum eget ante nec, consectetur viverra leo. Curabitur sit amet dignissim erat. Aenean fringilla pretium elit, et eleifend orci cursus a. Aenean bibendum faucibus semper. Vestibulum pretium dictum lacus eget sodales. Aliquam fermentum.
        </p>
        <div className="w-[70%] h-[25%] min-[1024px]:h-[20%]  flex flex-row justify-between items-center">
            <div className="w-[30%] h-full flex flex-col justify-center items-center bg-[#F5E7D6]">
                <h1 className="font-bold min-[1024px]:text-[2.5vh] text-[3vh]">
                15+
                </h1>
                <p className="font-bold text-[2vh] min-[1024px]:text-[1.5vh]">
                All over world
                </p>
            </div>
            <div className="w-[30%] h-full flex flex-col justify-center items-center bg-[#f5e7d6]">
                <h1 className="font-bold text-[3vh] min-[1024px]:text-[2.5vh]">
                250+
                </h1>
                <p className="font-bold text-[2vh] min-[1024px]:text-[1.5vh]">
                Product Available
                </p>
            </div>
            <div className="w-[30%] h-full flex flex-col justify-center items-center bg-[#F5E7D6] opacity-100">
                <h1 className="font-bold text-[3vh] min-[1024px]:text-[2.5vh]">
                2K
                </h1>
                <p className="font-bold text-[2vh] min-[1024px]:text-[1.5vh]">
                Product Reviews
                </p>
            </div>
        </div>
        <div className="w-[71%] h-[25%]  flex justify-start items-center">
          <a href="#" id="next" className="w-[30%] text-[#ffffff] min-[1024px]:text-[1.5vh] text-[2vh] font-['Arial'] h-[60%] bg-[#0E343D] flex justify-center items-center">
          know more<img src="/ArrowWhite.svg" alt=""  className="w-[18%] text-[#0E343D] h-[45%] ml-[5%] rounded-[100%]  bg-[#D9D9D9]"/>
          </a>
          
        </div>
        </div>

        <div className="w-[50%] h-full flex justify-center items-center flex-row ">
            <div className="w-[17%] min-[1024px]:h-[25%] h-[32%] absolute bg-[red] rounded-[50%] border-[10px] border-[white] mr-[25%] overflow-hidden">
                <img src="./Shorts/Black.webp"s alt="" srcset="" className="w-full h-full "/>
            </div>
            <div className="w-[60%] min-[1024px]:h-[75%] h-[90%] rounded-t-full bg-[blue] border-[5px] border-[#CE8B39] overflow-hidden">
            <img src="./Shorts/blue.jpg"s alt="" srcset="" className="w-full h-full"/>
            </div>
            
        </div>
      </div>
    )
}