import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MapPin, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/cloud9-logo.png";
import cloud from "@/assets/reallogo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      {/* Contact Strip */}
      <div className="bg-primary text-primary-foreground py-2 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a
                  href="tel:+13177343430"
                  className="hover:text-secondary transition-smooth"
                >
                  (317) 734-3430
                </a>
              </div>
              <div className="flex items-center">
                <Printer className="h-4 w-4 mr-2" />
                <a
                  href="fax:+13177343376"
                  className="hover:text-secondary transition-smooth"
                >
                  (317) 734-3376
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=5370+E.+Thompson+Rd,+Ste.+G,+Indianapolis,+IN+46237"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-smooth"
              >
                5370 E. Thompson Rd, Ste. G, Indianapolis, IN 46237
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`border-b bg-background/95 backdrop-blur-sm border-border transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={cloud}
                alt="Cloud 9 Physical Therapy"
                className="h-16 w-auto transition-all duration-300 opacity-100"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`hover:text-primary transition-smooth font-medium text-foreground`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`hover:text-primary transition-smooth font-medium text-foreground`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`hover:text-primary transition-smooth font-medium text-foreground`}
              >
                Services
              </Link>
              <Link
                to="/booking"
                className={`hover:text-primary transition-smooth font-medium text-foreground`}
              >
                Booking
              </Link>
              <Link
                to="/gallery"
                className={`hover:text-primary transition-smooth font-medium text-foreground`}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={`hover:text-primary transition-smooth font-medium text-foreground`}
              >
                Contact
              </Link>
              <Button
                asChild
                className={`shadow-ocean hover:scale-105 transition-smooth`}
              >
                <Link to="/booking">Book Appointment</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg hover:bg-accent transition-smooth text-foreground`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
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
    </header>
  );
};

export default Navigation;
