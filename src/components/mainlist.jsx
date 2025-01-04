export default function ProductItems() {
  return (
    <div className="w-full xs:mt-[5%] lg:h-[500px] h-[500px] md:h-[300px] flex xs:flex-col  justify-between items-center">
      {/* Левая половина */}
      <div className="w-[49%] xs:w-full xs:h-[50%] h-full bg-[#F5E7D6] flex">
        {/* Блок с текстом */}
        <div className="w-[10%] h-full flex justify-center items-center bg-[#F5E7D6]">
          <h1 className="relative rotate-[-90deg] text-[#3C2407] lg:text-[3rem] xs:text-[2rem] text-[3rem] md:text-[2rem]">
            UNPARALLELED
          </h1>
        </div>
        
        {/* Блок с синими элементами */}
        <div className="w-[20%] mr-[5%] ml-[1%] h-full flex bg-[#F5E7D6] flex-col justify-around items-center">
          <div className="w-full h-[20%] bg-[blue]"> 
          <img src="/Shorts/Black2.webp" alt="" className="w-full h-full"/>
          </div>
          <div className="w-full h-[20%] bg-[blue]">
          <img src="/Shorts/Black3.webp" alt="" className="w-full h-full"/>
          </div>
          <div className="w-full h-[20%] bg-[blue]">
          <img src="/Shorts/Black.webp" alt="" className="w-full h-full"/>
          </div>
          <div className="w-full h-[20%] bg-[blue]">
          <img src="/Shorts/Black2.webp" alt="" className="w-full h-full"/>
          </div>
        </div>
        
        {/* Черный блок */}
        <div className="w-[65%] h-full  flex flex-col justify-around items-center">
          <div className="w-[80%] h-[60%]  mr-[auto] ml-[auto] ">
            <img src="/Shorts/Black.webp" alt="" className="rounded-tl-[150px] lg:rounded-tl-[150px] xs:rounded-tl-[45%] md:rounded-tl-[50%]" />
          </div>
          <div className="w-[80%] xs:w-[100%] h-[10%] mr-[auto] ml-[auto] flex justify-center items-center">
            <a href="#" className="w-[10%] h-[50%] hover:bg-[#0E343D] hover:text-[#D8D8D8] bg-[#D8D8D8] rounded-full flex justify-center items-center text-[#0C0C0C]">1</a>
            <a href="#" className="w-[10%] h-[50%] hover:bg-[#0E343D] hover:text-[#D8D8D8] bg-[#D8D8D8] rounded-full flex justify-center items-center text-[#0C0C0C]">2</a>
            <img src="Arrow-right.svg" className="w-[15%] h-[60%]  rounded-full flex justify-center items-center"/>
            <a href="#" className="w-[10%] h-[50%] hover:bg-[#0E343D] hover:text-[#D8D8D8] bg-[#D8D8D8] rounded-full flex justify-center items-center text-[#0C0C0C]">3</a>
          </div>
        </div>
      </div>

      {/* Правая половина */}
      <div className="w-[49%] xs:w-full xs:h-[50%] h-[80%] md:h-[100%] bg-white flex justify-around flex-col items-center ">


        <small className="text-[#CE8B39] h-[5%] xs:text-[2.5vh] xs:w-full xs:text-center text-[1.5rem] w-full ">
        Glamorous Life
        </small>
        <h2 className="text-[#0E343D] xs:text-[1.7rem] xs:w-full xs:text-center lg:text-[2.4rem] h-[30%] lg:text-[2.8rem] text-[2.8rem] w-full ">
        Redefining Elegance with
Unique Charms
        </h2>
        <p className="text-[#000000] xs:w-full xs:text-center xs:text-[2.5vh] h-[15%] lg:text-[1rem] text-[0.7rem] w-full z-[100]">
        Vestibulum augue nibh, elementum eget ante nec, consectetur viverra leo. Curabitur sit amet dignissim erat. Aenean fringilla pretium elit, et eleifend orci cursus.
        </p>
        <div className="w-[100%] h-[15%]  xs:justify-center flex justify-start items-center">
          <a href="#" id="next" className="w-[30%] text-[#ffffff] text-[3vh] lg:text-[2.5vh] font-['Arial'] h-full bg-[#0E343D] flex justify-center items-center">
          know more<img src="/KnowMore.svg" alt=""  className="w-[13%] h-[40%] ml-[5%] rounded-[100%]  bg-[#D8D8D8]"/>
          </a>
          
        </div>

        <img src="/Shorts/blue.jpg" alt=""  className="absolute xs:w-[30%] xs:h-[35%] right-[-10%] mt-[38%] w-[15%] h-[30%] mt-[18%] rounded-t-[15%] mr-[12%]"/>
      </div>
    </div>
  );
}
