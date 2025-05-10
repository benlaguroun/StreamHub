import React from "react";
import { CheckCircle, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    title: "Basic",
    price: "$7.99",
    description: "Great for casual viewers and light entertainment.",
    features: [
      "HD Streaming",
      "Access to Movies & Shows",
      "1 Device at a time",
    ],
    cta: "Get Basic",
  },
  {
    title: "Standard",
    price: "$12.99",
    description: "Enjoy popular content with family-friendly features.",
    features: [
      "Full HD Streaming",
      "Live TV Channels",
      "Up to 2 Devices",
      "Ad-Free Experience",
    ],
    cta: "Choose Standard",
    popular: true,
  },
  {
    title: "Premium",
    price: "$17.99",
    description: "Full access to everything with no limits.",
    features: [
      "4K Ultra HD",
      "Sports & Premium Channels",
      "Unlimited Devices",
      "Offline Viewing",
      "Priority Support",
    ],
    cta: "Go Premium",
  },
];

const PlansPage = () => {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1608139496172-e9c6dbb91a8d?auto=format&fit=crop&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container max-w-2xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Choose the Plan That’s Right for You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-muted-foreground"
          >
            Start streaming your favorite shows and channels instantly. No
            contracts, cancel anytime.
          </motion.p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.title}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className={`border rounded-xl p-6 shadow-sm ${
                  plan.popular
                    ? "border-primary bg-muted/10"
                    : "border-muted/20"
                }`}
              >
                {plan.popular && (
                  <span className="text-sm text-primary font-semibold mb-2 inline-block">
                    Most Popular
                  </span>
                )}
                <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
                <p className="text-3xl font-semibold text-primary mb-4">
                  {plan.price}{" "}
                  <span className="text-base font-normal">/mo</span>
                </p>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/signup"
                  className={`btn w-full ${
                    plan.popular
                      ? "btn-primary"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {plan.popular ? (
                    <PlayCircle className="w-5 h-5 mr-2" />
                  ) : null}
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlansPage;
