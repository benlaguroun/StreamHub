// components/PopularOnNitflex.tsx
import React, { useState } from "react";
import { Play, Star } from "lucide-react";
import { motion } from "framer-motion";

const popularMovies = [
  {
    id: 1,
    title: "Stranger Things",
    rating: 4.9,
    image: "https://pics.filmaffinity.com/Stranger_Things-832229601-large.jpg",
    trailer: "https://www.youtube.com/embed/b9EkMc79ZSU",
  },
  {
    id: 2,
    title: "Wednesday",
    rating: 4.8,
    image: "https://pics.filmaffinity.com/Wednesday-635911861-large.jpg",
    trailer: "https://www.youtube.com/embed/Q73UhUTs6y0",
  },
  {
    id: 3,
    title: "The Witcher",
    rating: 4.6,
    image: "https://pics.filmaffinity.com/The_Witcher-503111445-large.jpg",
    trailer: "https://www.youtube.com/embed/ndl1W4ltcmg",
  },
  {
    id: 4,
    title: "You",
    rating: 4.5,
    image: "https://pics.filmaffinity.com/You-424238196-large.jpg",
    trailer: "https://www.youtube.com/embed/xAN1ThhTWsE",
  },
];

const PopularOnNitflex = () => {
  const [activeTrailer, setActiveTrailer] = useState<string | null>(null);

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          🍿 Popular on Nitflex
        </h2>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {popularMovies.map((movie) => (
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
                className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
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

export default PopularOnNitflex;
