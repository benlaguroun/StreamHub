import { motion } from "framer-motion";
import { Play } from "lucide-react";

const MovieCarousel = ({ movies }: { movies: Array<any> }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-4 transition-all duration-500"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
      >
        {movies.map((movie) => (
          <motion.div
            key={movie.id}
            className="relative w-72 h-[200px] bg-gray-800 rounded-md"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="object-cover w-full h-full rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-10 h-10 text-white" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MovieCarousel;
