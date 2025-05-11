// components/TopRated.tsx
import React, { useState } from "react";
import { Play, Star } from "lucide-react";
import { motion } from "framer-motion";

const topRatedMovies = [
  {
    id: 1,
    title: "Top Gun: Maverick",
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/dc/77/a2/dc77a2ce208d4333898c1650f6d2fba7.jpg",
    trailer: "https://www.youtube.com/embed/giXco2jaZ_4",
  },
  {
    id: 2,
    title: "The Fabelmans",
    rating: 4.5,
    image: "https://pics.filmaffinity.com/The_Fabelmans-691115932-large.jpg",
    trailer: "https://www.youtube.com/embed/D1G2iLSzOe8",
  },
  {
    id: 3,
    title: "Everything Everywhere",
    rating: 4.4,
    image:
      "https://pics.filmaffinity.com/Everything_Everywhere-112233445-large.jpg",
    trailer: "https://www.youtube.com/embed/wxN1T1uxQ2g",
  },
  {
    id: 4,
    title: "Inception",
    rating: 4.8,
    image: "https://pics.filmaffinity.com/Inception-123456-large.jpg",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
];

const TopRated = () => {
  const [activeTrailer, setActiveTrailer] = useState<string | null>(null);

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          🎬 Top Rated
        </h2>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {topRatedMovies.map((movie) => (
            <motion.div
              key={movie.id}
              whileHover={{ scale: 1.05 }}
              className="relative min-w-[200px] rounded-md overflow-hidden cursor-pointer"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-[300px] object-cover"
              />
              <div
                onClick={() => setActiveTrailer(movie.trailer)}
                className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <Play className="text-white w-10 h-10" />
              </div>
              <div className="mt-2">
                <h3 className="font-semibold text-lg">{movie.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  {movie.rating}/5
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {activeTrailer && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-black max-w-2xl w-full p-4 relative">
              <button
                onClick={() => setActiveTrailer(null)}
                className="absolute top-2 right-2 text-white text-xl"
              >
                ✕
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  width="100%"
                  height="400"
                  src={activeTrailer}
                  title="Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopRated;
