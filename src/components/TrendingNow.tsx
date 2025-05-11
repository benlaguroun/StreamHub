import React from "react";
import MovieCarousel from "./MovieCarousel";
import { Flame } from "lucide-react";

const TrendingNow = () => {
  const movies = [
    {
      id: 1,
      title: "The Fabelmans",
      genre: "Drama",
      rating: 4.5,
      image: "https://pics.filmaffinity.com/The_Fabelmans-691115932-large.jpg",
      trailer: "https://www.youtube.com/embed/D1G2iLSzOe8",
    },
    {
      id: 2,
      title: "Top Gun: Maverick",
      genre: "Action",
      rating: 4.7,
      image:
        "https://pics.filmaffinity.com/Top_Gun_Maverick-123456789-large.jpg",
      trailer: "https://www.youtube.com/embed/giXco2jaZ_4",
    },
    {
      id: 3,
      title: "Everything Everywhere",
      genre: "Sci-Fi",
      rating: 4.4,
      image:
        "https://pics.filmaffinity.com/Everything_Everywhere-112233445-large.jpg",
      trailer: "https://www.youtube.com/embed/wxN1T1uxQ2g",
    },
  ];

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center space-x-3 mb-4">
          <Flame className="w-6 h-6 text-red-500" />
          <h2 className="text-2xl font-bold">Trending Now</h2>
        </div>
        <MovieCarousel movies={movies} />
      </div>
    </section>
  );
};

export default TrendingNow;
