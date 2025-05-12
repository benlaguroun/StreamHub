import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TrendingNow from "../components/TrendingNow";
import TopRated from "../components/TopRated";
import KidsFamily from "../components/KidsFamily";
import PopularOnNitflex from "../components/PopularOnNitflex";
import Originals from "../components/Originals";
import NewReleases from "../components/NewReleases";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1578022761797-b8636ac1773c?auto=format&fit=crop&q=80)",
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
            <h1 className="text-3xl sm:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Watch Anywhere, Anytime
            </h1>
            <p className="hidden sm:block text-xl text-muted-foreground mb-8">
              Stream live TV, movies, and sports anywhere, anytime. Start your
              journey today with our premium content library.
            </p>
            <div className="flex space-x-4">
              <Link to="/browse" className="btn btn-primary">
                Start Watching
              </Link>
              <Link
                to="/plans"
                className="hidden sm:inline-block btn bg-muted text-foreground hover:bg-muted/80"
              >
                View Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <TrendingNow />
      <TopRated />
      <KidsFamily />
      <PopularOnNitflex />
      <Originals />
      <NewReleases />
      <Footer />
    </main>
  );
};

export default HomePage;
