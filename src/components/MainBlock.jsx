import Accordion from "./Accordion";

export default function MainBlock() {
  const accordions = [
    { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore.", content: "This is the content for the first accordion." },
    { title: "Lorem ipsum was purposefully designed to have no meaning,", content: "This is the content for the second accordion." },
    { title: "Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur.", content: "This is the content for the third accordion." },
    { title: "Some claim lorem ipsum threatens to promote design over content while.", content: "This is the content for the fourth accordion." },
  ];

  return (
    <div className="w-full h-auto flex flex-col lg:flex-row bg-[#F5E7D6] p-6 rounded-lg shadow-md gap-6">
      {/* Левая сторона */}
      <div className="lg:w-1/2 w-full flex flex-col justify-start gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Frequently Asked Questions</h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Row itself, let it be sorrow; let him love it; let him pursue it, wishing for its acquisition.
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Working Hours</h2>
        <p className="text-sm sm:text-base text-gray-800">Monday - Friday (08:00am to 08.00pm)</p>
        <p className="text-sm sm:text-base text-gray-800">Saturday & Sunday (08:00am to 05.00pm)</p>
        <a
          href="#"
          className="w-40 h-10 bg-[#0E343D] text-white flex justify-center items-center rounded-md text-sm sm:text-base"
        >
          More Questions
          <img
            src="ArrowWhite.svg"
            alt="Arrow"
            className="w-5 h-5 ml-2 bg-gray-200 rounded-full"
          />
        </a>
      </div>
      {/* Правая сторона */}
      <div className="lg:w-1/2 w-full flex flex-col gap-4">
        {accordions.map((accordion, index) => (
          <Accordion key={index} title={accordion.title} content={accordion.content} />
        ))}
      </div>
    </div>
  );
}
