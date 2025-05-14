"use client";

import { motion } from "framer-motion";
import { Play, Tv2, Radio } from "lucide-react";
import Footer from "../components/Footer";

const isAuthenticated = false;

const channelData = [
  {
    id: 1,
    title: "Wildlife Explorer",
    description: "Live: Discover majestic nature across continents",
    thumbnail:
      "https://i.pinimg.com/736x/ee/8f/06/ee8f06b4dbba5bff4de2a34c98fd82ba.jpg",
    isRadio: false,
  },
  {
    id: 2,
    title: "Global News",
    description: "Live: 24/7 world coverage and breaking news",
    thumbnail:
      "https://i.pinimg.com/736x/9b/14/79/9b14796d4fed4ff142f0b51ad0f81aa5.jpg",
    isRadio: true,
  },
  {
    id: 3,
    title: "Cartoon Club",
    description: "Live: Fun and safe entertainment for kids",
    thumbnail:
      "https://i.pinimg.com/736x/62/8b/94/628b9406d1c4b1bc5db5c6e7f5948e73.jpg",
    isRadio: false,
  },
  {
    id: 4,
    title: "Top Hits Radio",
    description: "Live: Stream the hottest global music hits",
    thumbnail:
      "https://i.pinimg.com/736x/66/e7/91/66e791484ba20fc8db4e037d9cd0701c.jpg",
    isRadio: true,
  },
];

const LiveTV = () => {
  return (
    <div className="min-h-screen pt-16 bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-card py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Stream Live Entertainment
          </h1>
          <p className="text-muted-foreground mb-6 text-base">
            Dive into nature, news, cartoons, and radio — all live and always
            free. Start watching now!
          </p>

          {!isAuthenticated && (
            <button
              onClick={() => (window.location.href = "/auth")}
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition w-full sm:w-auto"
            >
              Create a Free Account
            </button>
          )}
        </motion.div>
      </section>

      {/* Channels Grid */}
      <section className="py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {channelData.map((channel) => (
            <ChannelCard key={channel.id} channel={channel} />
          ))}
        </div>
      </section>
      {/* Footer goes here */}
      <Footer />
    </div>
  );
};

const ChannelCard = ({ channel }: { channel: (typeof channelData)[0] }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="group card cursor-pointer border border-muted/20 hover:border-primary/50 p-3 rounded-xl shadow-sm bg-card transition-all"
  >
    <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
      <img
        src={channel.thumbnail}
        alt={channel.title}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
        LIVE
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition">
        {isAuthenticated ? (
          <Play className="w-10 h-10 text-primary" />
        ) : (
          "Login to Watch"
        )}
      </div>
    </div>

    <div className="flex justify-between items-start mb-1">
      <div>
        <h3 className="font-semibold group-hover:text-primary text-base transition">
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
  </motion.div>
);

export default LiveTV;
