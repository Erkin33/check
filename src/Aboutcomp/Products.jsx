"use client";
import { useState } from "react";

export const products = [
    {
        src: '/About/MEMBERS/Erkin.jpg',
        mainInfo: 'Imperior',
        info: 'The main character',
        soc: '/About/socials.svg',
    },
    {
        src: '/About/MEMBERS/Sardor.jpg',
        mainInfo: 'Second-imperior',
        info: 'The second-face',
        soc: '/About/socials.svg',
    },
    {
        src: '/About/MEMBERS/Odiloff.jpg',
        mainInfo: 'Second-imperior',
        info: 'The second-face',
        soc: '/About/socials.svg',
    },
    {
        src: '/About/MEMBERS/Reyden.jpg',
        mainInfo: 'Beautiful',
        info: 'The third-face',
        soc: '/About/socials.svg',
    },
];

export default function ProductsInfo() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="w-full h-auto bg-[#fff9f4] flex justify-center items-center flex-wrap xs:flex-col xs:gap-6">
            {products.map((product, index) => (
                <div
                    key={index}
                    className="w-[19%] h-full flex flex-col justify-around items-center relative xs:w-[80%]"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setTimeout(() => setHoveredIndex(null), 500)} // Задержка перед скрытием
                >
                    {/* Основное изображение */}
                    <img
                        src={product.src}
                        alt=""
                        className="w-full h-[70%] object-cover xs:w-[100%] xs:h-[40%]"
                    />
                    {/* Информация */}
                    <h1 className="w-[80%] text-center text-[1.5vw] font-[600] xs:w-full xs:text-[4vw]">
                        {product.mainInfo}
                    </h1>
                    <p className="w-[80%] text-center uppercase text-gray-600 xs:w-full xs:text-[3.5vw]">
                        {product.info}
                    </p>
                    {/* Социальный блок */}
                    <img
                        src={product.soc}
                        alt="Socials"
                        className={`w-[50%] h-[10%] text-[black] absolute top-[100%] transition-opacity duration-500 ${
                            hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                        } xs:w-[30%] xs:h-auto xs:top-[50%]`}
                    />
                </div>
            ))}
        </div>
    );
}
