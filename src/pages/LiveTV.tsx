import React from "react";
import { motion } from "framer-motion";
import { Play, Tv2, Radio } from "lucide-react";

const LiveTV = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-card py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-4">Live TV Channels</h1>
            <p className="text-muted-foreground">
              Watch your favorite channels live in HD quality. Never miss a
              moment of live entertainment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Channels Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <ChannelCard key={i} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ChannelCard = ({ index }: { index: number }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="card group cursor-pointer border border-muted/20 hover:border-primary/50"
  >
    <div className="relative aspect-video rounded-md overflow-hidden mb-4">
      <img
        src={`https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${index}000-5c71f6e4?auto=format&fit=crop&q=80`}
        alt="Channel preview"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <Play className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
        LIVE
      </div>
    </div>
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-medium group-hover:text-primary">
          Channel {index + 1}
        </h3>
        <p className="text-sm text-muted-foreground">Now Playing: Show Title</p>
      </div>
      {index % 2 === 0 ? (
        <Tv2 className="w-5 h-5 text-muted-foreground" />
      ) : (
        <Radio className="w-5 h-5 text-muted-foreground" />
      )}
    </div>
  </motion.div>
);

export default LiveTV;
