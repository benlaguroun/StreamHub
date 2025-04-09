import React from "react";
import {
  Play,
  Star,
  TrendingUp,
  Tv2,
  Film,
  Trophy,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Unlimited Entertainment at Your Fingertips
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stream live TV, movies, and sports anywhere, anytime. Start your
              journey today with our premium content library.
            </p>
            <div className="flex space-x-4">
              <Link to="/browse" className="btn btn-primary">
                <Play className="w-5 h-5 mr-2" />
                Start Watching
              </Link>
              <Link
                to="/plans"
                className="btn bg-muted text-foreground hover:bg-muted/80"
              >
                View Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <CategoryCard
              icon={<Tv2 className="w-6 h-6 text-primary" />}
              title="Live TV Channels"
              description="Stream over 100+ live channels in HD quality"
              link="/live"
            />
            <CategoryCard
              icon={<Film className="w-6 h-6 text-primary" />}
              title="Movies & Shows"
              description="Unlimited access to thousands of titles"
              link="/browse"
            />
            <CategoryCard
              icon={<Trophy className="w-6 h-6 text-primary" />}
              title="Live Sports"
              description="Never miss a game with premium sports coverage"
              link="/live"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <ContentSection
        title="Trending Now"
        icon={<TrendingUp className="w-6 h-6 text-primary" />}
        items={[1, 2, 3, 4, 5, 6]}
      />

      <ContentSection
        title="Popular Shows"
        icon={<Star className="w-6 h-6 text-primary" />}
        items={[7, 8, 9, 10, 11, 12]}
      />
    </main>
  );
};

const CategoryCard = ({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => (
  <Link to={link}>
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card group cursor-pointer border border-muted/20 hover:border-primary/50 transition-colors"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="mt-4 flex items-center text-primary">
        <span className="text-sm">Learn more</span>
        <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </motion.div>
  </Link>
);

const ContentSection = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: number[];
}) => (
  <section className="py-12">
    <div className="container">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-bold">{title}</h2>
          {icon}
        </div>
        <Link
          to="/browse"
          className="text-primary hover:text-primary/80 flex items-center"
        >
          <span>View All</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[2/3] rounded-md overflow-hidden mb-3">
              <img
                src={`https://images.unsplash.com/photo-156518${i}000-5c71f6e4?auto=format&fit=crop&q=80`}
                alt="Content thumbnail"
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h3 className="font-medium group-hover:text-primary transition-colors">
              Title {i}
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
);

export default HomePage;
