import React from "react";

const ArtisansBio = () => {
  const artisans = [
    {
      id: 1,
      name: "Rina Das",
      image: "/RinaDas.webp",
      bio: "Specializes in Assamese handloom weaving, crafting exquisite Mekhla Chadors that celebrate Assam's rich heritage.",
    },
    {
      id: 2,
      name: "Arjun Singh",
      image: "/ArjunSingh.webp",
      bio: "A potter from Rajasthan, creating vibrant terracotta works inspired by local traditions and folklore.",
    },
    {
      id: 3,
      name: "Meera Tiwari",
      image: "/MeeraTiwari.webp",
      bio: "An artist renowned for her intricate Warli designs, capturing tribal stories in every stroke.",
    },
    {
      id: 4,
      name: "Tashi Wangchuk",
      image: "/TashiWangchuk.webp",
      bio: "A skilled weaver from Arunachal Pradesh, known for vibrant handwoven shawls reflecting tribal patterns and traditions.",
    },
    {
      id: 5,
      name: "Suhana Bhandari",
      image: "/SuhanaBandari.webp",
      bio: "Crafts unique Madhubani paintings that beautifully depict Indian folklore and mythology on canvas and fabric.",
    },
    {
      id: 6,
      name: "Lakshmi Kumari",
      image: "/LakshiKumari.webp",
      bio: "Masters the art of block printing from Jaipur, transforming plain textiles into intricate patterned wonders.",
    },
  ];

  return (
    <div className="font-sans bg-gray-100 min-h-screen p-6 flex flex-col">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">
        Meet Our Artisans
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
        {artisans.map((artisan) => (
          <div
            key={artisan.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={artisan.image}
              alt={artisan.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold mb-2 text-green-700">
              {artisan.name}
            </h2>
            <p className="text-gray-600">{artisan.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtisansBio;
