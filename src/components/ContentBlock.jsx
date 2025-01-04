export default function ContentBlock({ info,image, title, description }) {
    return (
      <div className="w-[33%] h-full  overflow-hidden flex flex-col items-center group relative">
        {/* Изображение с эффектом */}
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Текст "READ MORE", появляется при наведении */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg font-semibold bg-[#0E343D] w-[40%] h-[30%] flex justify-center items-center">Read More</span>
          </div>
        </div>
        <small className="w-full text-[#CE8B39] mt-2">{info}</small>
        {/* Заголовок */}
        <h2 className=" w-full text-xl font-bold text-gray-800 mt-4">{title}</h2>
        {/* Описание */}
        <p className=" w-full text-gray-600 mt-2 text-[#686257] text-[1.5vh]">{description}</p>
      </div>
    );
  }
  