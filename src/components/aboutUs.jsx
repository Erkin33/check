export default function AboutUs() {
    return (
      <div className="w-full bg-[#fff9f4] h-auto flex flex-col md:flex-row justify-between items-center py-8 px-4 md:px-8">
        {/* Левая секция */}
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <small className="text-[#CE8B39] text-sm md:text-base mb-2">Glamorous Life</small>
          <h1 className="text-[#0E343D] text-2xl md:text-3xl font-bold mb-4">
            Embrace the Unseen Magic of Uniqueness
          </h1>
          <p className="text-gray-700 text-sm md:text-base mb-6">
            Vestibulum augue nibh, elementum eget ante nec, consectetur viverra leo. Curabitur sit amet dignissim erat. Aenean fringilla pretium elit, et eleifend orci cursus a. Aenean bibendum faucibus semper. Vestibulum pretium dictum lacus eget sodales. Aliquam fermentum.
          </p>
          <div className="w-full flex justify-around items-center gap-4 mb-6">
            <div className="flex flex-col justify-center items-center bg-[#F5E7D6] p-4 rounded-lg shadow-md">
              <h1 className="text-2xl font-bold">15+</h1>
              <p className="text-sm">All over world</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#F5E7D6] p-4 rounded-lg shadow-md">
              <h1 className="text-2xl font-bold">250+</h1>
              <p className="text-sm">Product Available</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#F5E7D6] p-4 rounded-lg shadow-md">
              <h1 className="text-2xl font-bold">2K</h1>
              <p className="text-sm">Product Reviews</p>
            </div>
          </div>
          <a
            href="#"
            id="next"
            className="w-40 h-12 bg-[#0E343D] text-white flex justify-center items-center text-sm rounded-md shadow-md"
          >
            Know More
            <img
              src="/ArrowWhite.svg"
              alt="Arrow"
              className="w-6 h-6 ml-2 rounded-full bg-[#D9D9D9]"
            />
          </a>
        </div>
  
        {/* Правая секция */}
        <div className="w-full md:w-[50%] flex justify-center items-center relative mt-8 md:mt-0">
          <div className="absolute w-16 h-16 bg-red-500 rounded-full border-4 border-white overflow-hidden left-8 md:left-16">
            <img src="./Shorts/Black.webp" alt="Black Shorts" className="w-full h-full object-cover" />
          </div>
          <div className="w-[70%] h-64 bg-blue-500 rounded-t-full border-4 border-[#CE8B39] overflow-hidden">
            <img src="./Shorts/blue.jpg" alt="Blue Shorts" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    );
  }
  