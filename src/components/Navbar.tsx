import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tv2, Film, Trophy, Search, User, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-background via-background/90 to-transparent">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Tv2 className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">StreamHub</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/live"
              icon={<Tv2 className="w-4 h-4" />}
              text="Live TV"
            />
            <NavLink
              to="/movies-shows"
              icon={<Film className="w-4 h-4" />}
              text="Movies & Shows"
            />
            <NavLink
              to="/plans"
              icon={<Trophy className="w-4 h-4" />}
              text="Plans"
            />
          </div>

          <div className="flex items-center space-x-4">
            <motion.div
              initial={false}
              animate={{ width: isSearchOpen ? "auto" : "40px" }}
              className="relative"
            >
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-muted rounded-full"
              >
                {isSearchOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
              </button>
              {isSearchOpen && (
                <motion.input
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "200px" }}
                  exit={{ opacity: 0, width: 0 }}
                  type="text"
                  placeholder="Search..."
                  className="absolute right-0 top-0 h-full bg-muted rounded-full px-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              )}
            </motion.div>

            <Link
              to="/auth"
              className="hidden md:flex items-center space-x-2 btn btn-primary"
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </Link>

            <button
              className="md:hidden p-2 hover:bg-muted rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute left-0 right-0 top-full bg-card/95 backdrop-blur-sm border-t border-muted p-4"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink
                to="/live"
                text="Live TV"
                onClick={handleMobileNavClick}
              />
              <MobileNavLink
                to="/movies-shows"
                text="Movies & Shows"
                onClick={handleMobileNavClick}
              />
              <MobileNavLink
                to="/plans"
                text="Plans"
                onClick={handleMobileNavClick}
              />
              <Link
                to="/auth"
                className="btn btn-primary w-full justify-center"
                onClick={handleMobileNavClick}
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({
  to,
  icon,
  text,
}: {
  to: string;
  icon: React.ReactNode;
  text: string;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center space-x-2 transition-colors",
        isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

const MobileNavLink = ({
  to,
  text,
  onClick,
}: {
  to: string;
  text: string;
  onClick: () => void;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "block px-4 py-2 rounded-md transition-colors",
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-muted"
      )}
    >
      {text}
    </Link>
  );
};

export default Navbar;
