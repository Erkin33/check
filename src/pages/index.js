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
            className="absolute xs:w-[40%] text-center top-4 right-4 text-xs text-[#CE8B39]"
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
        
        <div className="w-[70%] lg:w-[50%] h-[90%] flex justify-between items-center flex-col ">

        <small className="mt-[10%] w-[70%] text-[#ffff] lg:text-[2vh] xs:text-[2.9vw]"> 
        Glamorous Life
        </small>
        <h1 className="text-[#ffff] text-[4vh] w-[71%] xs:text-[3.5vw]">
        Redefining Elegance with
Unique Charms
        </h1>
        <p className="text-[#ffff] lg:text-[1.7vh] xs:text-[2.5vw]  w-[71%]">
        Vestibulum augue nibh, elementum eget ante nec, consectetur viverra leo. Curabitur sit amet dignissim erat. Aenean fringilla pretium elit, et eleifend orci cursus.
        </p>
        <div className="w-[100%] ml-[30%] xl:h- h-[15%] lg:mt-[1%]  mb-[10%]  flex justify-start items-center">
          <a href="#" id="next" className="w-[30%] text-[#00000] text-[3vh] xs:text-[2.5vw] lg:text-[2vh] font-['Arial'] h-full bg-[white] flex justify-center items-center">
          know more<img src="/ArrowWhite.svg" alt=""  className="w-[19%] text-[white] lg:w-[15%] lg:h-[55%] h-[50%] ml-[5%] rounded-[100%]  bg-[#0E343D]"/>
          </a>
          
        </div>
        </div>

        <div className="w-[30%] h-full flex justify-around items-center flex-col ">

        </div>

      </div>
        <AboutUs/>
        <Shipping/>
        <Shop/>
        <div className="w-full bg-[#fff9f4] py-8 flex flex-col items-center">
  {/* Секция продуктов */}
  <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center relative"
      >
        {/* Надпись в верхнем правом углу */}
        <div className="absolute z-[100] top-2 right-2 bg-[#CE8B39] text-white text-xs px-2 py-1 rounded-md">
          -8% Off
        </div>

        {/* Картинка продукта */}
        <div className="w-full h-48 relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {/* Интерактивный блок появляется при наведении */}
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <img src="/ProductsEssence/Loop.svg" alt="Zoom" className="w-8 mb-2" />
            <img src="/ProductsEssence/Recheng.svg" alt="Rechange" className="w-8 mb-2" />
            <img src="/ProductsEssence/Favourite.svg" alt="Favourite" className="w-8" />
          </div>
        </div>

        {/* Название продукта */}
        <h2 className="text-center text-lg font-semibold mt-4 px-2 text-[#0E343D]">
          {product.name}
        </h2>

        {/* Рейтинг и цены */}
        <div className="w-full px-4 mt-2 flex justify-between items-center">
          <img src="/stars.svg" alt="Rating" className="w-20" />
          <div className="text-right">
            <p className="text-sm text-gray-400 line-through">$49.00</p>
            <p className="text-base text-[#CE8B39]">$39.00</p>
          </div>
        </div>

        {/* Кнопка "Добавить в корзину" */}
        <Link href={`/product/${product.id}`} className="w-full px-4 mt-4 mb-4">
          <button className="w-full bg-[#0E343D] text-white text-sm py-2 rounded-md transition-transform hover:scale-105">
            Add to Cart
          </button>
        </Link>
      </div>
    ))}
  </div>

  {/* Секция "View All Products" */}
  <div className="mt-8">
  <a
    href="#"
    className="bg-[#CE8B39] text-white text-base py-2 px-6 rounded-md shadow-md flex items-center gap-2 transition-transform hover:scale-105"
  >
    View All Products
    <div className="w-5 h-5 flex justify-center items-center rounded-full bg-white">
      <img
        src="/ArrowWhite.svg" /* Изображение стрелочки черного цвета */
        alt="Arrow"
        className="w-3 h-3"
      />
    </div>
  </a>
</div>

</div>


    <div className="w-full h-[1290px] bg-[#EFE7D4] flex flex-col justify-around items-center">
      <div className="w-[80%] xs:w-full h-[10%] flex justify-between items-center ">

      <div className="w-[40%] xs:w-full h-full xs:h-[5%] flex flex-col justify-between">
        <p className="text-[3vw]">
        Glamorous Life
        </p>
        <h1 className="text-[#0E343D] text-[4.5vw]">
        Latest News & Blog
        </h1>
      </div>

      <a href="#" className="w-[27%] xs:w-[25%] text-[2.3vw] h-full xs:h-[25%] flex justify-around items-center bg-[#000000] text-[white]">
      More Blogs <img src="/ArrowWhite.svg" className="w-[20%] h-[35%] ml-[5%] rounded-full bg-[#ffffff] text-[#00000]"/>
      </a>

      </div>
      <div className="w-[83%] xs:w-full xs:h-[90%] h-[80%] flex flex-col justify-between items-center">
      <MainComponent/>
      </div>
    </div>


    <div className="w-full h-[10vw] bg-[url('/Logos.svg')] bg-cover bg-no-repeat flex justify-between items-center]">
      {/* <img src="/Logos.svg" className="w-full h-full "/> */}
    </div>

    <MainBlock/>
    <InstagramCarousel/>
    <Footer/>
    </div>
  );
}
