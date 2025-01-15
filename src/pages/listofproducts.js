import Link from "next/link";
import React, { useRef, useState } from "react";
import Header from "@/components/header";
import ProductItems from "@/components/mainlist";
import Text from "@/components/text";
import AboutUs from "@/components/aboutUs";
import Shipping from "@/components/shipping";
import Shop from "@/components/Shop";
import HoverBlock from "@/components/blogs";
import MainBlock from "@/components/MainBlock";
import MainComponent from "@/components/MainComponent";
import InstagramCarousel from "@/components/InfiniteCarousel";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import Aboutheader from "@/components/aboutheader";
import TopCenter from "@/Aboutcomp/topcenter";
import About from "@/Aboutcomp/block";
import TextAbout from "@/Aboutcomp/text";
import EnquireSection from "@/Aboutcomp/video";
import ProductsInfo from "@/Aboutcomp/Products";
import ShippingAbout from "@/Aboutcomp/infoshop";
import Contact from "@/Aboutcomp/contact";

export default function Listproduct(){

    const products = [
        { id: 'one', name: 'Romantic Florals',sell: '-15% Off',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/Black.webp' },
        { id: 'two', name: 'Romantic Florals',sell: 'Out Of Stock',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/black2.webp' },
        { id: 'three', name: 'Romantic Florals',sell: 'New',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/black3.webp' },
        { id: 'four', name: 'Romantic Florals',sell: 'New',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/blue.jpg' },
      ];
      const [activeProduct, setActiveProduct] = useState(null);
  
    const handleToggleIcons = (productId) => {
      setActiveProduct((prev) => (prev === productId ? null : productId));
    };
    return(
        <div className="w-full h-full ">



<div className="w-full bg-[#F5E7D6] flex flex-col items-center py-4">
      {/* Контейнер с товарами */}
      <div className="w-[90%] mxx:h-[700px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="mxx:w-full mxx:h-full p-4 flex flex-col items-center relative"
          >
            {/* Блок управления (иконки) */}
            <div className="w-full relative">
              {activeProduct === product.id ? (
                <div className="absolute top-2 right-2 flex flex-col">
                  <img
                    src="/ProductsEssence/Loop.svg"
                    className="w-6 mb-1 mxx:h-[2vw] mxx:w-[2vw]"
                    alt="Loop"
                  />
                  <img
                    src="/ProductsEssence/Recheng.svg"
                    className="w-6 mb-1 mxx:h-[2vw] mxx:w-[2vw]"
                    alt="Recheng"
                  />
                  <img
                    src="/ProductsEssence/Favourite.svg"
                    className="w-6 mb-1 mxx:h-[2vw] mxx:w-[2vw]"
                    alt="Favourite"
                  />
                </div>
              ) : (
                <a
                  href="#"
                  onClick={() => handleToggleIcons(product.id)}
                  className="absolute mxx:h-[2vw] mxx:w-[7vw] mxx:flex mxx:justify-center mxx:items-center mxx:text-center mxx:text-[.9vw] top-4 right-4 text-xs lg:text-sm lg:top-2 lg:right-2 mxx:top-1 mxx:right-1 text-[#ffffff] bg-[#0E343D] px-2 py-1 shadow"
                >
                    {product.sell}
                </a>
              )}
            </div>

            {/* Изображение */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[100%] object-cover mb-4 mxx:h-[100%]"
            />

            {/* Название, описание и цена */}
            <h2 className="text-lg font-bold text-[#CE8B39] mb-2 mxx:text-xl mxx:text-[1.5vw]">
              {product.name}
            </h2>
            <h3 className="text-sm text-gray-600 mb-2 mxx:text-base mxx:text-[1vw]">
              {product.description}
            </h3>
            <p className="text-sm text-gray-500 mb-4 mxx:text-base mxx:text-[1vw]">
              From ${product.price}
            </p>

            {/* Кнопка добавления в корзину */}
            <Link href={`/product/${product.id}`} className="w-full flex justify-center">
              <button className="bg-[#0E343D] text-white py-2 px-4 w-[80%] relative top-[-400%] mxx:py-3 mxx:text-lg">
                ADD CART
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Линия управления под товарами */}
      <div className="w-full h-16 flex justify-center items-center bg-[#F5E7D6] mt-4">
        <div className="w-[60%] h-3 bg-white rounded-full flex justify-between items-center px-2">
          <div className="h-full xl:w-[33.3%] w-[30%] md:w-[33.3%] lg:w-[20%] mxx:w-[33.3%] bg-[#0E343D] rounded-l-full cursor-pointer"></div>
          <div className="h-full xl:w-[33.3%] w-[30%] md:w-[33.3%] lg:w-[20%] mxx:w-[33.3%] hover:bg-[#0E343D] transition-all duration-300 cursor-pointer"></div>
          <div className="h-full xl:w-[33.3%] w-[30%] md:w-[33.3%] lg:w-[20%] mxx:w-[33.3%] hover:bg-[#0E343D] rounded-r-full transition-all duration-300 cursor-pointer"></div>
        </div>
      </div>
    </div>



        </div>
    )
}