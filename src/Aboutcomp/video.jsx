export default function EnquireSection() {
  return (
    <div className="bg-[#F5E7D6] h-[400px] xs:h-auto min-h-screen flex items-center justify-center px-6 xs:px-4 py-8 xs:py-6">
      <div className="max-w-7xl w-full h-[80%] xs:h-auto flex flex-col md:flex-row items-center gap-8">
        {/* Видео секция */}
        <div className="flex-shrink-0 w-full md:w-[50%] h-full xs:h-[200px] flex justify-center items-center">
          <div className="aspect-w-16 aspect-h-9 bg-blue-700 w-full rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Текстовая секция */}
        <div className="w-full md:w-[50%] h-full xs:h-auto flex flex-col justify-center space-y-6">
          <h3 className="text-sm xs:text-xs tracking-wide text-gray-700 uppercase">
            Enquire Custom Piece
          </h3>
          <h2 className="text-2xl md:text-4xl xs:text-xl font-bold text-gray-900 leading-snug">
            Jewels Are Often Crafted Into Journey Into A Realm Various Point Rings, Necklaces,
            Earrings.
          </h2>
          <p className="text-gray-600 leading-relaxed xs:text-sm">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters.
          </p>
          <button className="w-[20%] xs:w-[40%] py-3 bg-[#AC805D] text-white rounded-lg hover:bg-brown-800 shadow-lg transition transform hover:scale-105 flex flex-row justify-around items-center">
            Know More <img src="/ArrowWhite.svg" alt="" className=" !text-[#AC805D] w-[15%] h-[60%] rounded-full bg-[white]" />
          </button>
        </div>
      </div>
    </div>
  );
}
