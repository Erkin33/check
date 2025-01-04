import Link from "next/link";
import React, { useRef } from "react";
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
const products = [
  { id: 'one', name: 'Romantic Florals',sell: '-15% Off',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/Black.webp' },
  { id: 'two', name: 'Romantic Florals',sell: 'Out Of Stock',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/Black2.webp' },
  { id: 'three', name: 'Romantic Florals',sell: 'New',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/Black3.webp' },
  { id: 'four', name: 'Romantic Florals',sell: 'New',description: 'Wrap Maxi Dress Blush', price: 39, image: '/Shorts/blue.jpg' },
];





export default function Home() {
  function ColorChanger() {
    const [color, setColor] = useState("bg-red-500"); // Начальный цвет
  
    const handleLinkClick = (newColor) => {
      setColor(newColor); // Устанавливаем новый цвет
    };
  
    return (
      <div className="w-full flex justify-center items-center h-[200px]">
        <div className="w-[80%] h-[50%] bg-gray-100 flex justify-around items-center">
          <a
            href="#"
            onClick={() => handleLinkClick("bg-red-500")}
            className={`w-[30%] h-full ${color} transition-all duration-300`}
          ></a>
          <a
            href="#"
            onClick={() => handleLinkClick("bg-green-500")}
            className={`w-[30%] h-full ${color} transition-all duration-300`}
          ></a>
          <a
            href="#"
            onClick={() => handleLinkClick("bg-blue-500")}
            className={`w-[30%] h-full ${color} transition-all duration-300`}
          ></a>
        </div>
      </div>
    );
  }
  const info = useRef(null);
  const block = useRef(null);
  function Rechange(){
    if (info.current.style.display = 'flex'){
      info.current.style.display = 'none';
      block.current.style.display = 'flex';
    }
    else{
      info.current.style.display = 'flex';
      block.current.style.display = 'none';
    }
  }
  return (
    <div className="w-full h-full ml-auto mr-auto container mx-auto">
      {/* ТОП */}
    <Header/>
    {/* Главный обьект */}
    <ProductItems/>
    {/* Текст со звездами */}
    <Text/>
    {/* Товары */}

    <div className="w-full bg-[#F5E7D6] flex flex-col items-center py-4">
  {/* Контейнер с товарами */}
  <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 gap-4">
    {products.map((product) => (
      <div 
        key={product.id} 
        className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
      >
        {/* Блок управления (иконки) */}
        <div className="w-full relative">
          <div 
            ref={block} 
            onClick={Rechange} 
            className="absolute top-2 right-2 hidden"
          >
            <img src="/ProductsEssence/Loop.svg" className="w-6 mb-1" alt="Loop" />
            <img src="/ProductsEssence/Recheng.svg" className="w-6 mb-1" alt="Recheng" />
            <img src="/ProductsEssence/Favourite.svg" className="w-6 mb-1" alt="Favourite" />
          </div>
          <a 
            href="#" 
            ref={info} 
            onClick={Rechange} 
            className="absolute top-4 right-4 text-xs text-[#CE8B39]"
            id={product.id}
          >
            {product.sell}
          </a>
        </div>

        {/* Изображение */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-40 object-cover rounded-lg mb-4"
        />

        {/* Название, описание и цена */}
        <h2 className="text-lg font-bold text-[#CE8B39] mb-2">{product.name}</h2>
        <h3 className="text-sm text-gray-600 mb-2">{product.description}</h3>
        <p className="text-sm text-gray-500 mb-4">From ${product.price}</p>

        {/* Кнопка добавления в корзину */}
        <Link 
          href={`/product/${product.id}`} 
          className="w-full flex justify-center"
        >
          <button 
            className="bg-[#0E343D] text-white py-2 px-4 rounded w-full"
          >
            ADD CART
          </button>
        </Link>
      </div>
    ))}
  </div>

  {/* Линия управления под товарами */}
  <div className="w-full h-16 flex justify-center items-center bg-[#F5E7D6] mt-4">
    <div className="w-[60%] h-3 bg-white rounded-full flex justify-between items-center px-2">
      <div className="h-full w-[30%] bg-[#0E343D] rounded-l-full cursor-pointer"></div>
      <div className="h-full w-[30%] hover:bg-[#0E343D] transition-all duration-300 cursor-pointer"></div>
      <div className="h-full w-[30%] hover:bg-[#0E343D] rounded-r-full transition-all duration-300 cursor-pointer"></div>
    </div>
  </div>
</div>


      {/* BAnner bg-[url('/img/hero-pattern.svg')] */}
      <div className=" w-full bg-[#415A77] h-[400px] xs:h-[250px] flex justify-between items-center bg-[url('/Shorts/mem.jpg')] bg-cover bg-no-repeat">
        <div className="w-[50%] lg:w-[50%] h-[80%] flex justify-between items-center flex-col ">

        <small className="mt-[10%] w-[70%] text-[#ffff] lg:text-[2vh] xs:text-[2vh]"> 
        Glamorous Life
        </small>
        <h1 className="text-[#ffff] text-[4vh] w-[71%] xs:text-[3.1vh]">
        Redefining Elegance with
Unique Charms
        </h1>
        <p className="text-[#ffff] lg:text-[1.7vh] xs:text-[2.2vh]  w-[71%]">
        Vestibulum augue nibh, elementum eget ante nec, consectetur viverra leo. Curabitur sit amet dignissim erat. Aenean fringilla pretium elit, et eleifend orci cursus.
        </p>
        <div className="w-[100%] ml-[30%] xl:h- h-[15%] lg:mt-[1%]  mb-[10%]  flex justify-start items-center">
          <a href="#" id="next" className="w-[30%] text-[#00000] text-[3vh] xs:text-[1.9vh] lg:text-[2vh] font-['Arial'] h-full bg-[white] flex justify-center items-center">
          know more<img src="/ArrowWhite.svg" alt=""  className="w-[19%] text-[white] lg:w-[15%] lg:h-[55%] h-[50%] ml-[5%] rounded-[100%]  bg-[#0E343D]"/>
          </a>
          
        </div>
        </div>

        <div className="w-[50%] h-full flex justify-around items-center flex-col ">

        </div>
      </div>
        <AboutUs/>
        <Shipping/>
        <Shop/>
        <div className="w-full h-[650px] min-[1024px]:h-[550px] bg-[#fff9f4] flex  flex-col justify-center items-center">
      <div className="w-full h-full flex justify-between items-center">
        {products.map((product) => (
        <div key={product.id} className="w-[24%] h-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col absolute justify-end items-end  h-[20%]  relative top-[6%] pr-[1%]">

            <div ref={block} onClick={Rechange} className="h-[40%] flex flex-col w-full justify-between cursor items-end absolute pr-[1%] hidden">
              <img src="/ProductsEssence/Loop.svg" className="w-[10%] mb-[0.5%]"/>
              <img src="/ProductsEssence/Recheng.svg" className="w-[10%] mb-[0.5%]"/>
              <img src="/ProductsEssence/Favourite.svg" className="w-[10%] mb-[0.5%]"/>
            </div>

          <a href='#' ref={info} onClick={Rechange} className=" text-right flex justify-center items-center w-[25%] h-[40%] relative top-[4%]" id={product.id}>-8% Off</a>
          
            </div>
          <img src={product.image} alt={product.name} className="w-full h-[100%] object-cover" />
          <h2 className="text-lg w-full font-bold mt-2 text-[#000000] font-thin text-[2vh]">Leaf Drops Earrings</h2>
          <div className=" w-full  flex justify-between flex-row items-center">
            <p>
            <img src="/stars.svg"/>
            </p>
            <div className="w-[40%] h-full flex flex-row justify-between items-center">
              <p className="line-through text-[grey] min-[1024px]:text-[1.5vh]"> 
                $49.00
              </p>
              <p className="min-[1024px]:text-[1.5vh]">
                $39.00
              </p>
              </div>
          </div>
          <Link className="w-full flex justify-center items-center" href={`/product/${product.id}`}>
            <button className="mt-2 bg-[#0E343D] text-white px-4 py-2 rounded relative top-[-240%] w-[90%]">
              ADD CART
            </button>
          </Link>
        </div>
      ))}
      </div> 
      <div className="w-[100%] h-[10%] flex justify-center items-center">
      <a onMouseMove={console.log('Moved')} href="#" id="next" className="w-[20%] text-[#ffffff] text-[2vh] font-['Arial'] h-full bg-[#CE8B39] flex justify-center items-center">
      View All Products<img src="/ArrowWhite.svg" alt=""  className="w-[10%] text-[black] h-[50%] ml-[5%] rounded-[100%]  bg-[#ffffff]"/>
          </a>
      </div>
    </div>

    <div className="w-full h-[500px] bg-[#EFE7D4] flex flex-col justify-around items-center">
      <div className="w-[80%] h-[10%] flex justify-between items-center ">

      <div className="w-[40%] h-full flex flex-col justify-between">
        <p className="text-[2vh]">
        Glamorous Life
        </p>
        <h1 className="text-[#0E343D] text-[4vh]">
        Latest News & Blog
        </h1>
      </div>

      <a href="#" className="w-[15%] h-full flex justify-center items-center bg-[#000000] text-[white]">
      More Blogs <img src="/ArrowWhite.svg" className="w-[13%] h-[35%] ml-[5%] rounded-full bg-[#ffffff] text-[#00000]"/>
      </a>

      </div>
      <div className="w-[83%] h-[80%] flex flex-row justify-between items-center">
      <MainComponent/>
      </div>
    </div>
    <div className="w-full h-[100px flex justify-between items-center]">
      <img src="/Logos.svg" className="w-full h-full "/>
    </div>

    <MainBlock/>
    <InstagramCarousel/>
    <Footer/>
    </div>
  );
}
