import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/cloud9-logo.png";
import cloud from "@/assets/reallogo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true when user scrolls more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={cloud}
              alt="Cloud 9 Physical Therapy"
              className={`h-16 w-auto transition-all duration-300 ${
                isScrolled ? "opacity-100" : "opacity-90"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-primary transition-smooth font-medium ${
                isScrolled ? "text-foreground" : "text-foreground/80"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-primary transition-smooth font-medium ${
                isScrolled ? "text-foreground" : "text-foreground/80"
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`hover:text-primary transition-smooth font-medium ${
                isScrolled ? "text-foreground" : "text-foreground/80"
              }`}
            >
              Services
            </Link>
            <Link
              to="/booking"
              className={`hover:text-primary transition-smooth font-medium ${
                isScrolled ? "text-foreground" : "text-foreground/80"
              }`}
            >
              Booking
            </Link>
            <Link
              to="/gallery"
              className={`hover:text-primary transition-smooth font-medium ${
                isScrolled ? "text-foreground" : "text-foreground/80"
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`hover:text-primary transition-smooth font-medium ${
                isScrolled ? "text-foreground" : "text-foreground/80"
              }`}
            >
              Contact
            </Link>
            <Button
              asChild
              className={`shadow-ocean hover:scale-105 transition-smooth ${
                isScrolled ? "" : "bg-primary/90 hover:bg-primary"
              }`}
            >
              <Link to="/booking">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg hover:bg-accent transition-smooth ${
              isScrolled ? "text-foreground" : "text-foreground/80"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-accent transition-smooth font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md hover:bg-accent transition-smooth font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md hover:bg-accent transition-smooth font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/booking"
              className="block px-3 py-2 rounded-md hover:bg-accent transition-smooth font-medium"
              onClick={() => setIsOpen(false)}
            >
              Book
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 rounded-md hover:bg-accent transition-smooth font-medium"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md hover:bg-accent transition-smooth font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link to="/booking" onClick={() => setIsOpen(false)}>
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
