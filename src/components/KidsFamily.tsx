// components/KidsFamily.tsx
import React, { useState } from "react";
import { Play, Star } from "lucide-react";
import { motion } from "framer-motion";

const kidsFamilyMovies = [
  {
    id: 1,
    title: "Frozen II",
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/8d/b2/0a/8db20a2a357704adb50c6baba3cef42a.jpg",
    trailer: "https://www.youtube.com/embed/Zi4LMpSDccc",
  },
  {
    id: 2,
    title: "Encanto",
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/a8/ea/5b/a8ea5bc912d770ab0a4fd9bd912d2261.jpg",
    trailer: "https://www.youtube.com/embed/CaimKeDcudo",
  },
  {
    id: 3,
    title: "The Lion King",
    rating: 4.9,
    image:
      "https://i.pinimg.com/736x/fd/0c/44/fd0c44fd41b80385b1a21999a42195f9.jpg",
    trailer: "https://www.youtube.com/embed/7TavVZMewpY",
  },
  {
    id: 4,
    title: "Toy Story 4",
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/9e/c4/79/9ec479a0167b6341925308c6d51871e4.jpg",
    trailer: "https://www.youtube.com/embed/wmiIUN-7qhE",
  },
  {
    id: 1,
    title: "Frozen II",
    rating: 4.6,
    image:
      "https://i.pinimg.com/736x/8d/b2/0a/8db20a2a357704adb50c6baba3cef42a.jpg",
    trailer: "https://www.youtube.com/embed/Zi4LMpSDccc",
  },
  {
    id: 2,
    title: "Encanto",
    rating: 4.8,
    image:
      "https://i.pinimg.com/736x/a8/ea/5b/a8ea5bc912d770ab0a4fd9bd912d2261.jpg",
    trailer: "https://www.youtube.com/embed/CaimKeDcudo",
  },
  {
    id: 3,
    title: "The Lion King",
    rating: 4.9,
    image:
      "https://i.pinimg.com/736x/fd/0c/44/fd0c44fd41b80385b1a21999a42195f9.jpg",
    trailer: "https://www.youtube.com/embed/7TavVZMewpY",
  },
  {
    id: 4,
    title: "Toy Story 4",
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/9e/c4/79/9ec479a0167b6341925308c6d51871e4.jpg",
    trailer: "https://www.youtube.com/embed/wmiIUN-7qhE",
  },
];

const KidsFamily = () => {
  const [activeTrailer, setActiveTrailer] = useState<string | null>(null);

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          🧒 Kids & Family
        </h2>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {kidsFamilyMovies.map((movie) => (
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

export default KidsFamily;
