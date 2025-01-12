export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen w-full flex items-center justify-center px-4 xs:px-2 md:px-8">
      <div className="max-w-7xl w-full">
        <div className="flex w-full justify-around flex-col md:flex-row items-center gap-12 xs:gap-8">
          {/* Левая секция */}
          <div className="relative bg-[url('/Shorts/Black.webp')] bg-cover bg-no-repeat text-white h-[450px] xs:h-[180px] w-[50%] xs:w-[80%] md:w-[30%] rounded-tl-full rounded-tr-full flex flex-col justify-end items-center overflow-hidden">
            {/* SVG с текстом */}
            <svg
              className="absolute top-[1px] w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 25 300 300"
            >
              <path
                id="curve"
                d="M 50 150 A 100 100 0 0 1 250 150"
                fill="transparent"
              />
              <text>
                <textPath
                  href="#curve"
                  startOffset="50%"
                  textAnchor="middle"
                  fill="white"
                  className="font-semibold text-xs xs:text-[8px] md:text-base"
                >
                  Where Elegance Finds Its Extraordinary Artistry
                </textPath>
              </text>
              {/* Линии */}
              <line
                x1="50"
                y1="160"
                x2="50"
                y2="350"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="250"
                y1="160"
                x2="250"
                y2="350"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="60"
                y1="350"
                x2="140"
                y2="350"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="160"
                y1="350"
                x2="240"
                y2="350"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            {/* Кнопка */}
            <div className="absolute bottom-8 bg-gray-200 text-blue-700 w-[80px] xs:w-[60px] h-[80px] xs:h-[60px] flex items-center justify-center font-semibold text-[10px] xs:text-[8px] md:text-sm rounded-full cursor-pointer hover:bg-gray-300 shadow-lg transition transform hover:scale-105">
              KNOW MORE
            </div>
          </div>

          {/* Правая секция */}
          <div className="flex flex-col justify-between space-y-8 w-[50%] xs:w-[90%] md:w-[50%] relative">
            {/* Заголовок, фиолетовый блок и описание */}
            <div className="relative ">
              {/* Фиолетовый блок */}
              <div className="w-[12vw] xs:w-[50px] h-[15vw] xs:h-[50px] bg-[url('/Shorts/black2.webp')] bg-cover rounded-t-full bg-purple-700 absolute xs:left-[25%] left-[-15%] top-[-15%] md:top-[-20%] md:left-[70%]"></div>

              <h2 className="text-lg xs:text-[2.6vw] font-semibold text-blue-700 uppercase mb-2">
                About Us
              </h2>
              <h1 className="text-2xl xs:text-[2.6vw] md:text-4xl w-[80%] xs:w-full font-bold text-gray-900 leading-snug">
                Rishi Couple Rings & Diamonds Are The New Collections
              </h1>
              <p className="text-gray-600 mt-4 leading-relaxed text-sm xs:text-[2.6vw]">
                Nunc ac eros at nunc scelerisque dignissim. Aliquam enim nunc,
                volutpat eget ipsum id, varius sodales mi. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
            </div>

            {/* Статистика */}
            <div className="flex flex-row justify-between items-center  justify-between gap-8 xs:gap-4 md:gap-12">
              <div className="flex flex-col justify-around items-center items-center bg-[#F5E7D6] w-[20%] xs:w-[22%]">
                <h4 className=" xs:text-[2.6vw] font-bold text-gray-800">
                  15+
                </h4>
                <p className=" xs:text-[2.6vw] text-center text-gray-600 mt-2 text-[0.8vw]">
                  All Over The World
                </p>
              </div>
              <div className="flex flex-col justify-around items-center items-center bg-[#F5E7D6] w-[20%] xs:w-[22%]">
                <h4 className=" xs:text-[2.6vw] font-bold text-gray-800">
                  250+
                </h4>
                <p className=" xs:text-[2.6vw] text-center text-gray-600 mt-2 text-[0.8vw]">
                  Product Available
                </p>
              </div>
              <div className="flex flex-col justify-around items-center items-center bg-[#F5E7D6] w-[20%] xs:w-[22%]">
                <h4 className=" xs:text-[2.6vw] font-bold text-gray-800">
                  2K
                </h4>
                <p className=" xs:text-[2.6vw] text-center text-gray-600 mt-2 text-[0.8vw]">
                  Product Reviews
                </p>
              </div>
              <div className="flex flex-col justify-around items-center items-center bg-[#F5E7D6] w-[20%] xs:w-[22%]">
                <h4 className=" xs:text-[2.6vw] font-bold text-gray-800">
                  100K
                </h4>
                <p className=" xs:text-[2.6vw] text-center text-gray-600 mt-2 text-[0.8vw]">
                  Happy Customers
                </p>
              </div>
            </div>

            {/* Кнопка */}
            <div className="flex justify-center md:justify-start">
              <button className=" text-[1vw] h-[13vw] xs:w-[25vw] xs:text-[10px] flex flex-row justify-around items-center  bg-[#472000] text-white font-semibold rounded-lg hover:bg-blue-800 shadow-md transition transform hover:scale-105">
                Shop Now
                <img
                  src="/ArrowWhite.svg"
                  alt=""
                  className="w-[10%] xs:ml-[1%] xs:w-[12px] h-[8px] xs:h-[10px] text-[#472000]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
