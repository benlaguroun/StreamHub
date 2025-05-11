"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Tv2, Radio } from "lucide-react";

// Fake auth flag — replace with your real auth logic
const isAuthenticated = false;

const channelData = [
  {
    id: 1,
    title: "Nature Live",
    description: "Now Playing: Wild Planet",
    thumbnail: "https://img.youtube.com/vi/TMubSggUOVE/hqdefault.jpg",
    trailerUrl:
      "https://www.youtube.com/watch?v=z2vA8ozwM2Y&ab_channel=WildPlanet",
    isRadio: false,
  },
  {
    id: 2,
    title: "News Today",
    description: "Now Playing: World Headlines",
    thumbnail: "https://img.youtube.com/vi/5MgBikgcWnY/hqdefault.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=5MgBikgcWnY",
    isRadio: true,
  },
  {
    id: 3,
    title: "Kids Zone",
    description: "Now Playing: Cartoon Hour",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=tgbNymZ7vqY",
    isRadio: false,
  },
  {
    id: 4,
    title: "Music Mix",
    description: "Now Playing: Pop Hits Live",
    thumbnail: "https://img.youtube.com/vi/kXYiU_JCYtU/hqdefault.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
    isRadio: true,
  },
];

const LiveTV = () => {
  return (
    <div className="min-h-screen pt-16 bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-card py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-4">Live TV Channels</h1>
            <p className="text-muted-foreground mb-6">
              Watch your favorite channels live in HD quality. Never miss a
              moment of live entertainment.
            </p>

            {!isAuthenticated && (
              <button
                onClick={() => (window.location.href = "/signup")}
                className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition"
              >
                Create an Account to Start Watching
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Channels Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {channelData.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ChannelCard = ({ channel }: { channel: (typeof channelData)[0] }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="card group cursor-pointer border border-muted/20 hover:border-primary/50 p-3 rounded-lg shadow-sm bg-card"
  >
    <div className="relative aspect-video rounded-md overflow-hidden mb-3">
      <img
        src={channel.thumbnail}
        alt={channel.title}
        className="object-cover w-full h-full"
      />
      {isAuthenticated ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
          <Play className="w-12 h-12 text-primary" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-sm font-semibold">
          Sign up to watch live
        </div>
      )}
      <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
        LIVE
      </div>
    </div>

    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="font-semibold group-hover:text-primary transition">
          {channel.title}
        </h3>
        <p className="text-sm text-muted-foreground">{channel.description}</p>
      </div>
      {channel.isRadio ? (
        <Radio className="w-5 h-5 text-muted-foreground" />
      ) : (
        <Tv2 className="w-5 h-5 text-muted-foreground" />
      )}
    </div>

    {!isAuthenticated && (
      <button
        onClick={() => window.open(channel.trailerUrl, "_blank")}
        className="w-full mt-2 text-sm px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
      >
        Watch Trailer
      </button>
    )}
  </motion.div>
);

export default LiveTV;
