import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Printer } from "lucide-react";
// import logo from "@/assets/cloud9-logo.png";
// import cloud from "@/assets/reallogo.png";
import logooo from "@/assets/logoooo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          {/* <div className="space-y-4">
            <img
              src={logooo}
              alt="Cloud 9 Physical Therapy"
              className="h-16 w-auto rounded-lg"
            />
            <p className="text-sm text-primary-foreground/80">
              Expert physical therapy services focused on your recovery and
              wellness. Personalized care, professional results.
            </p>
          </div> */}
          <div className="space-y-5">
            <img
              src={logooo}
              alt="Cloud 9 Physical Therapy"
              className="h-24 w-auto rounded-lg" // increased from h-16 to h-24
            />
            <p className="text-base text-primary-foreground/80 leading-relaxed">
              Expert physical therapy services focused on your recovery and
              wellness. Personalized care, professional results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-secondary transition-smooth"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-secondary transition-smooth"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-secondary transition-smooth"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm hover:text-secondary transition-smooth"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-sm hover:text-secondary transition-smooth"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-secondary transition-smooth"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+13177343430"
                  className="hover:text-secondary transition-smooth"
                >
                  (317) 734-3430
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Printer className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="fax:+13177343376"
                  className="hover:text-secondary transition-smooth"
                >
                  (317) 734-3376
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@cloud9pt.com"
                  className="hover:text-secondary transition-smooth"
                >
                  contact@cloud9pt.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=5370+E.+Thompson+Rd,+Ste.+G,+Indianapolis,+IN+46237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-smooth"
                >
                  5370 E. Thompson Rd, Ste. G<br />
                  Indianapolis, IN 46237
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Office Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon - Fri: 7am - 7pm</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Saturday: 8am - 2pm</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
          <p>
            &copy; {new Date().getFullYear()} Cloud 9 Physical Therapy. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
