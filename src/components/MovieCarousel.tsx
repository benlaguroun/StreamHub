import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const MovieCarousel = ({ movies }: { movies: Array<any> }) => {
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);

  return (
    <div className="relative w-full overflow-x-auto">
      <div className="flex gap-4 w-full px-2 sm:px-0">
        {movies.map((movie) => (
          <motion.div
            key={movie.id + movie.title}
            className="relative min-w-[60%] sm:min-w-[220px] h-[180px] sm:h-[240px] rounded-lg overflow-hidden bg-gray-800 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedMovie(movie)}
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <Play className="w-10 h-10 text-white" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trailer Modal */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="relative w-[90%] sm:w-[600px] h-[340px] bg-black rounded-lg overflow-hidden">
            <iframe
              src={selectedMovie.trailer}
              title={selectedMovie.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-2 right-2 text-white text-xl"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCarousel;
