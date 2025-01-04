import Accordion from "./Accordion";

export default function MainBlock() {
  const accordions = [
    { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore.", content: "This is the content for the first accordion." },
    { title: "Lorem ipsum was purposefully designed to have no meaning,", content: "This is the content for the second accordion." },
    { title: "Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur.", content: "This is the content for the third accordion." },
    { title: "Some claim lorem ipsum threatens to promote design over content while.", content: "This is the content for the fourth accordion." },
  ];

  return (
    <div className="w-[100%] h-auto flex flex-col lg:flex-row bg-[#F5E7D6] p-6 rounded-lg shadow-md ">
      {/* Левая сторона */}
      <div className="lg:w-1/2 w-full p-4 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asking
Questions</h1>
        <p className="text-gray-600 text-lg">
        Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisitiendum.
        </p>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Working Hours
        </h1>
        <h1 className="text-1xl  text-gray-800 mb-4">
        Monday - Friday (08:00am to 08.00pm)
        </h1>
        <h1 className="text-1x1  text-gray-800 mb-4">
        Saturday & Sunday (08:00am to 05.00pm)
        </h1>
        <a href="#" className="w-[25%] min-[1024px]:w-[30%] min-[1024px]:text-[1.7vh] h-[15%] bg-[#0E343D] text-[#FFFFFF] flex flex-row justify-around items-center">
        More Questions <img src="ArrowWhite.svg" alt="" className="text-[#FFFFFF] bg-[#D9D9D9] w-[18%] min-[1024px]:w-[20%] rounded-full h-[70%] min-[1024px]:h-[50%]" />
        </a>
      </div>
      {/* Правая сторона */}
      <div className="lg:w-1/2 w-full p-4 flex flex-col gap-4">
        {accordions.map((accordion, index) => (
          <Accordion key={index} title={accordion.title} content={accordion.content}  />
        ))}
      </div>
    </div>
  );
}
