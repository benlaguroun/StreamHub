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
      image:
        "https://i.pinimg.com/736x/ae/4b/6a/ae4b6afb99c94afa9b556e3a57816080.jpg",
      trailer: "https://www.youtube.com/embed/D1G2iLSzOe8",
    },
    {
      id: 2,
      title: "Top Gun: Maverick",
      genre: "Action",
      rating: 4.7,
      image:
        "https://i.pinimg.com/736x/e5/83/b4/e583b43e320271408499d7af729a81b4.jpg",
      trailer: "https://www.youtube.com/embed/giXco2jaZ_4",
    },
    {
      id: 3,
      title: "Everything Everywhere",
      genre: "Sci-Fi",
      rating: 4.4,
      image:
        "https://i.pinimg.com/736x/4a/fb/48/4afb48d60d3b6b93f2ee15dca72724fd.jpg",
      trailer: "https://www.youtube.com/embed/wxN1T1uxQ2g",
    },
    {
      id: 1,
      title: "The Fabelmans",
      genre: "Drama",
      rating: 4.5,
      image:
        "https://i.pinimg.com/736x/ae/4b/6a/ae4b6afb99c94afa9b556e3a57816080.jpg",
      trailer: "https://www.youtube.com/embed/D1G2iLSzOe8",
    },
    {
      id: 2,
      title: "Top Gun: Maverick",
      genre: "Action",
      rating: 4.7,
      image:
        "https://i.pinimg.com/736x/e5/83/b4/e583b43e320271408499d7af729a81b4.jpg",
      trailer: "https://www.youtube.com/embed/giXco2jaZ_4",
    },
    {
      id: 3,
      title: "Everything Everywhere",
      genre: "Sci-Fi",
      rating: 4.4,
      image:
        "https://i.pinimg.com/736x/4a/fb/48/4afb48d60d3b6b93f2ee15dca72724fd.jpg",
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
