import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Star, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
      "https://i.pinimg.com/736x/dc/77/a2/dc77a2ce208d4333898c1650f6d2fba7.jpg",
    trailer: "https://www.youtube.com/embed/giXco2jaZ_4",
  },
  {
    id: 3,
    title: "Everything Everywhere All At Once",
    genre: "Sci-Fi",
    rating: 4.4,
    image:
      "https://i.pinimg.com/736x/16/fe/b8/16feb865728135f98abb2dd785b88ced.jpg",
    trailer: "https://www.youtube.com/embed/wxN1T1uxQ2g",
  },
  {
    id: 4,
    title: "The Batman",
    genre: "Action",
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/ae/0c/65/ae0c6506aa74d3940a025715d9a8ee8b.jpg",
    trailer: "https://www.youtube.com/embed/mqqft2x_Aa4",
  },
  {
    id: 5,
    title: "The Whale",
    genre: "Drama",
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/b2/e1/11/b2e111bcb0dde3da529cb91e29daf978.jpg",
    trailer: "https://www.youtube.com/embed/nWiQodhMvz4",
  },
  {
    id: 6,
    title: "Avatar: The Way of Water",
    genre: "Sci-Fi",
    rating: 4.1,
    image:
      "https://i.pinimg.com/736x/b2/f8/43/b2f843111df8347133dca44dc2c5f57b.jpg",
    trailer: "https://www.youtube.com/embed/d9MyW72ELq0",
  },
  {
    id: 7,
    title: "TÁR",
    genre: "Drama",
    rating: 4.0,
    image:
      "https://i.pinimg.com/736x/b2/8a/bc/b28abcc670237c77adb94e491c97e48b.jpg",
    trailer: "https://www.youtube.com/embed/Na6gA1RehsU",
  },
  {
    id: 8,
    title: "Nope",
    genre: "Horror",
    rating: 4.2,
    image:
      "https://i.pinimg.com/736x/58/fc/14/58fc14f8607ff9a1773771b74d8952ad.jpg",
    trailer: "https://www.youtube.com/embed/In8fuzj3gck",
  },
  {
    id: 9,
    title: "Glass Onion: A Knives Out Mystery",
    genre: "Mystery",
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/6a/09/1c/6a091c28d25c537dcd4577a61048987d.jpg",
    trailer: "https://www.youtube.com/embed/gj5ibYSz8C0",
  },
  {
    id: 10,
    title: "Black Panther: Wakanda Forever",
    genre: "Action",
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/ea/5a/00/ea5a000f6ecfe9e15722d24be248e570.jpg",
    trailer: "https://www.youtube.com/embed/_Z3QKkl1WyM",
  },
];

const MoviesShows = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [activeTrailer, setActiveTrailer] = useState<string | null>(null);
  const navigate = useNavigate();

  const genres = Array.from(new Set(movies.map((m) => m.genre)));

  const filteredMovies = movies.filter((m) => {
    return (
      (!selectedGenre || m.genre === selectedGenre) &&
      (!selectedRating || m.rating >= selectedRating)
    );
  });

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-[75vh] flex items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${movies[0].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Movies & Shows</h1>
          <p className="text-lg mb-6">
            Dive into a world of storytelling across genres and generations.
          </p>
          <Link
            to="/browse"
            className="btn btn-primary inline-flex items-center"
          >
            <Play className="mr-2" /> Browse All
          </Link>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6">
        <div className="container flex flex-wrap gap-4 items-center">
          <select
            onChange={(e) => setSelectedGenre(e.target.value || null)}
            className="bg-muted px-4 py-2 rounded"
          >
            <option value="">All Genres</option>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => setSelectedRating(Number(e.target.value) || null)}
            className="bg-muted px-4 py-2 rounded"
          >
            <option value="">All Ratings</option>
            {[5, 4, 3, 2].map((r) => (
              <option key={r} value={r}>
                {r} stars & up
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-10">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Collection</h2>
            <Link to="/browse" className="flex items-center text-primary">
              View All <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            navigation
            autoplay={{ delay: 3000 }}
            modules={[Autoplay, Navigation]}
          >
            {filteredMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <div
                    className="relative aspect-[2/3] rounded-md overflow-hidden mb-2"
                    onClick={() => setActiveTrailer(movie.trailer)}
                  >
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3
                    className="font-medium hover:text-primary transition-colors"
                    onClick={() => navigate(`/movie/${movie.id}`)}
                  >
                    {movie.title}
                  </h3>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {movie.rating.toFixed(1)} / 5
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Trailer Modal */}
      {activeTrailer && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black rounded-lg max-w-2xl w-full relative">
            <button
              onClick={() => setActiveTrailer(null)}
              className="absolute top-2 right-2 text-white text-lg"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={activeTrailer}
                title="Trailer"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MoviesShows;
