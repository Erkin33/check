import React from "react"
import { Hero } from "./info"

export default function Shipping() {
  return (
    <div className="w-[86%] min-[1024px]:w-[95%] bg-[#fff9f4] h-[300px] flex flex-row justify-between mx-auto">
      <div className="w-[95%] h-[80%]  m-auto flex justify-center items-center">
        <div className="w-[95%] h-[70%] flex flex-row justify-between items-center bg-[#CE8B39] mx-auto my-auto">
          {Hero.map((item, index) => (
            <div key={index} className="flex flex-row justify-between items-center w-[30%] h-full border-l-[1px]">
              <img src={item.src} alt={item.MainInfo} className="w-[50%] h-[40%]" />
              <div className="w-[100%] h-[80%] flex flex-col justify-center items-center">
                <h1 className="text-[2.5vh] w-full text-[#ffffff]">{item.MainInfo}</h1>
                <p className="text-[1.3vh] text-[#ffffff] w-[100%]" dangerouslySetInnerHTML={{ __html: item.Info }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
