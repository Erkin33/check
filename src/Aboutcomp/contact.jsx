export default function Contact() {
    return (
        <div className="w-full bg-[#fff9f4] flex flex-row xs:flex-col justify-between items-center">
            {/* Левая секция с изображением */}
            <div className="w-[50%] h-[700px] bg-[url('/About/shop.webp')] bg-cover bg-center xs:w-full xs:h-[300px]"></div>

            {/* Правая секция с контактной формой */}
            <div className="h-full w-[50%] flex flex-col justify-center items-center xs:w-full xs:py-6">
                <div className="w-[80%] h-[80%] flex flex-col justify-between items-start xs:w-[90%] xs:gap-4">
                    {/* Заголовок */}
                    <h1 className="w-full text-[2.5vw] xs:text-[5vw] font-bold text-gray-900">
                        Get In Touch Today!
                    </h1>
                    
                    {/* Описание */}
                    <p className="w-full text-gray-700 xs:text-[3.5vw]">
                        Cras convallis a augue non ullamcorper. Maecenas nec tempor nulla, nec semper
                        mauris. In vitae urna justo. Quisque at nulla pellentesque.
                    </p>
                    
                    {/* Поля ввода */}
                    <input
                        type="text"
                        placeholder="Name"
                        className="bg-[#F5E7D6] text-[#6F6F6F] w-full h-[9%] pl-[1%] text-[1vw] xs:h-[40px] xs:text-[3.5vw]"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="bg-[#F5E7D6] text-[#6F6F6F] w-full h-[9%] pl-[1%] text-[1vw] xs:h-[40px] xs:text-[3.5vw]"
                    />
                    <input
                        type="text"
                        placeholder="Enter Date"
                        className="bg-[#F5E7D6] text-[#6F6F6F] w-full h-[9%] pl-[1%] text-[1vw] xs:h-[40px] xs:text-[3.5vw]"
                    />
                    <textarea
                        name=""
                        id=""
                        className="bg-[#F5E7D6] text-[#6F6F6F] w-full h-[25%] pl-[1%] text-[1vw] xs:h-[100px] xs:text-[3.5vw]"
                        placeholder="Message"
                    ></textarea>
                    
                    {/* Кнопка отправки */}
                    <a
                        href="#"
                        className="bg-[black] text-[white] w-[30%] h-[8%] flex flex-row justify-center items-center text-[1.2vw] xs:w-full xs:h-[50px] xs:text-[4vw]"
                    >
                        Send Message
                        <img
                            src="/ArrowWhite.svg"
                            alt=""
                            className="w-[15%] h-[50%] bg-[#ffffff] ml-[1%] rounded-full text-[#000000] xs:w-[10%] xs:h-[50%]"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
