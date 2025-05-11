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
    image:
      "https://i.pinimg.com/736x/ae/4b/6a/ae4b6afb99c94afa9b556e3a57816080.jpg",
    trailer: "https://www.youtube.com/embed/D1G2iLSzOe8",
  },
  {
    id: 3,
    title: "Everything Everywhere",
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/4c/77/b7/4c77b7c9764f787eb0fba1106491552f.jpg",
    trailer: "https://www.youtube.com/embed/wxN1T1uxQ2g",
  },
  {
    id: 4,
    title: "Inception",
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/b0/ae/a4/b0aea49646879a043ad9f6ec3002e99f.jpg",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
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
    image:
      "https://i.pinimg.com/736x/ae/4b/6a/ae4b6afb99c94afa9b556e3a57816080.jpg",
    trailer: "https://www.youtube.com/embed/D1G2iLSzOe8",
  },
];

const TopRated = () => {
  const [activeTrailer, setActiveTrailer] = useState<string | null>(null);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          🎬 Top Rated
        </h2>
        <div className="flex overflow-x-auto gap-4 scrollbar-hide pb-4">
          {topRatedMovies.map((movie) => (
            <motion.div
              key={movie.trailer}
              whileHover={{ scale: 1.05 }}
              className="relative min-w-[160px] sm:min-w-[200px] md:min-w-[220px] rounded-md overflow-hidden cursor-pointer"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-[240px] sm:h-[300px] object-cover"
              />
              <div
                onClick={() => setActiveTrailer(movie.trailer)}
                className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <Play className="text-white w-10 h-10" />
              </div>
              <div className="mt-2 text-white">
                <h3 className="font-semibold text-base sm:text-lg">
                  {movie.title}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  {movie.rating}/5
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {activeTrailer && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
            <div className="bg-black w-full max-w-2xl p-4 relative rounded-lg">
              <button
                onClick={() => setActiveTrailer(null)}
                className="absolute top-2 right-2 text-white text-2xl"
              >
                ✕
              </button>
              <div className="w-full aspect-video">
                <iframe
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
