// components/NewReleases.tsx
import React, { useState } from "react";
import { Play, Star } from "lucide-react";
import { motion } from "framer-motion";

const newReleases = [
  {
    id: 1,
    title: "Damsel",
    rating: 4.5,
    image:
      "https://m.media-amazon.com/images/M/MV5BMjY3NzJkNDYtYTRmYy00ZWI4LWIwNDMtMTI2MDViYzVkYmI2XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_.jpg",
    trailer: "https://www.youtube.com/embed/x7Krla_UxRg",
  },
  {
    id: 2,
    title: "Atlas",
    rating: 4.4,
    image:
      "https://m.media-amazon.com/images/M/MV5BMGE0MWVmODUtNDE4Ni00ZGE5LWI2M2YtM2Q3MTgyOTk3ODJjXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/GEgRrVYrCzA",
  },
  {
    id: 3,
    title: "Rebel Moon",
    rating: 4.2,
    image:
      "https://m.media-amazon.com/images/M/MV5BZjZkYjc0ZGItOTdhNi00ZDE0LTgxMmItYWM2MTYzZGVjNjA0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/_rHLOXbFZtI",
  },
  {
    id: 4,
    title: "Lift",
    rating: 4.3,
    image:
      "https://m.media-amazon.com/images/M/MV5BNTg5MDk0OTItN2U0ZS00ZTQ1LWFjYzYtYjgxZDViN2ZjODAxXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
    trailer: "https://www.youtube.com/embed/lPrfzL-kkCw",
  },
];

const NewReleases = () => {
  const [activeTrailer, setActiveTrailer] = useState<string | null>(null);

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          🎞️ New Releases
        </h2>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {newReleases.map((movie) => (
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

export default NewReleases;
