// components/Originals.tsx
import React, { useState } from "react";
import { Play, Star } from "lucide-react";
import { motion } from "framer-motion";

const originals = [
  {
    id: 1,
    title: "Squid Game",
    rating: 4.9,
    image:
      "https://i.pinimg.com/736x/23/cc/bf/23ccbf28137082dc795cf308f74f5ec0.jpg",
    trailer: "https://www.youtube.com/embed/oqxAJKy0ii4",
  },
  {
    id: 2,
    title: "The Crown",
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/10/fb/be/10fbbe0bf276b7b74f1c9a1cc84ee92e.jpg",
    trailer: "https://www.youtube.com/embed/JWtnJjn6ng0",
  },
  {
    id: 3,
    title: "Dark",
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/94/00/10/940010831c9010d9bea0f40aff4c5fdb.jpg",
    trailer: "https://www.youtube.com/embed/cq2iTHoLrt0",
  },
  {
    id: 4,
    title: "Money Heist",
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/6e/42/0b/6e420b7bd2a65359258ee4c5ee1501dd.jpg",
    trailer: "https://www.youtube.com/embed/p_PJbmrX4uk",
  },
  {
    id: 1,
    title: "Squid Game",
    rating: 4.9,
    image:
      "https://i.pinimg.com/736x/23/cc/bf/23ccbf28137082dc795cf308f74f5ec0.jpg",
    trailer: "https://www.youtube.com/embed/oqxAJKy0ii4",
  },
  {
    id: 2,
    title: "The Crown",
    rating: 4.7,
    image:
      "https://i.pinimg.com/736x/10/fb/be/10fbbe0bf276b7b74f1c9a1cc84ee92e.jpg",
    trailer: "https://www.youtube.com/embed/JWtnJjn6ng0",
  },
  {
    id: 3,
    title: "Dark",
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/94/00/10/940010831c9010d9bea0f40aff4c5fdb.jpg",
    trailer: "https://www.youtube.com/embed/cq2iTHoLrt0",
  },
  {
    id: 4,
    title: "Money Heist",
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/6e/42/0b/6e420b7bd2a65359258ee4c5ee1501dd.jpg",
    trailer: "https://www.youtube.com/embed/p_PJbmrX4uk",
  },
];

const Originals = () => {
  const [activeTrailer, setActiveTrailer] = useState<string | null>(null);

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          📽️ Originals
        </h2>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {originals.map((movie) => (
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
              <div className="w-full aspect-video">
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

export default Originals;
