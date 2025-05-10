import React from "react";
import { motion } from "framer-motion";
import { Play, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const MoviesShows = () => {
  const featuredItems = [1, 2, 3, 4, 5, 6];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.moviesanywhere.com/8434dba01cfe89c3eec9357175bb7d63/8eef3c11-51fd-4043-b97d-a849f312242d.jpg?h=375&resize=fit&w=250)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Discover the Best in Movies & Shows
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Dive into a world of storytelling with thousands of titles across
              every genre.
            </p>
            <Link to="/browse" className="btn btn-primary">
              <Play className="w-5 h-5 mr-2" />
              Start Watching
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Genre Tags */}
      <section className="py-10">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {[
              "Action",
              "Drama",
              "Comedy",
              "Horror",
              "Sci-Fi",
              "Romance",
              "Documentary",
            ].map((genre) => (
              <span
                key={genre}
                className="bg-muted px-4 py-1 rounded-full text-sm text-foreground hover:bg-muted/70 cursor-pointer transition"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Movies & Shows */}
      <section className="py-10">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Collection</h2>
            <Link
              to="/browse"
              className="text-primary flex items-center hover:text-primary/80"
            >
              <span>View All</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredItems.map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[2/3] rounded-md overflow-hidden mb-3">
                  <img
                    src={`https://pics.filmaffinity.com/The_Fabelmans-691115932-large.jpg`}
                    alt={`Movie ${i}`}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <h3 className="font-medium group-hover:text-primary transition-colors">
                  Movie Title {i}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-primary mr-1" />
                  <span>4.{i}/5</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MoviesShows;
