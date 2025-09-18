import React from "react";
import dessert from "../images/Desserts.avif";
import Drinks from "../images/drinks.avif";
import Smoothies from "../images/smoothies.avif";

function MenuList() {
  const listData = [
    {
      title: "Coffees",
      subTitle: "Rich Aromatic Brews",
      imgSrc:
        "https://s2.ppllstatics.com/diariovasco/www/multimedia/202209/29/media/cortadas/cafeamericano-R5dmEim54n9frwQ9FZ7uP5J-1248x770@Diario%20Vasco.jpg",
    },
    {
      title: "Desserts",
      subTitle: "Sweet Indulgent Treats",
      imgSrc: dessert,
    },
    {
      title: "Smoothies",
      subTitle: "Nutrient-Packed Blends",
      imgSrc: Smoothies,
    },
    {
      title: "Drinks",
      subTitle: "Refreshing Liquid Delights",
      imgSrc: Drinks,
    },
  ];

  return (
    <>
      <div className="bg-[#cc9f78] grid md:grid-cols-1 p-8">
        {listData.map((data, i) => {
          return (
            <div
              className=" md:flex items-center justify-between hover:bg-[#d7b68c] transition-all duration-300 ease-in-out transform hover:py-8 p-6  px-10 m-2 my-4 rounded-2xl cursor-pointer  border-1 border-[#46271b]"
              key={i}
            >
              <img
                src={data.imgSrc}
                alt=""
                className=" w-56 h-56 object-cover rounded-br-full rounded-t-4xl   "
              />
              <div className="flex flex-col items-center justify-between">
                <h2 className="text-5xl text-[#46271b] font-serif">
                  {data.title}
                </h2>
                <p className="font-sans text-[#46271b]">Rich Aromatic Brews</p>
              </div>
              <button className="text-[#46271b] text-xl border-[#46271b] rounded-lg  px-6 py-2  transition-all duration-300 ease-in-out hover:bg-[#46271b] hover:text-[#f7decb] hover:scale-105 float-end 
              mt-5 -mx-5 md:m-0 ">
                Menu
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MenuList;
