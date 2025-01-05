export default function ContentBlock({ info, image, title, description }) {
  return (
    <div className="w-full sm:w-[48%] lg:w-[33%] h-full flex flex-col items-center group relative mb-6">
      {/* Блок изображения */}
      <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden rounded-md shadow-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Текст "READ MORE" */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-sm font-medium bg-[#0E343D] px-4 py-2 rounded-md">
            Read More
          </span>
        </div>
      </div>

      {/* Информация */}
      <small className="text-[#CE8B39] mt-3 text-sm sm:text-base">
        {info}
      </small>

      {/* Заголовок */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-3 text-center">
        {title}
      </h2>

      {/* Описание */}
      <p className="text-sm sm:text-base text-[#686257] mt-2 text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
}
