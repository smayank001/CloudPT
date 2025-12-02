import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about.jpg";
import heroTherapy from "@/assets/hero-therapy.jpg";
import homeImage from "@/assets/home.jpg";
import manualTherapy from "@/assets/manual-therapy.jpg";
import sportsTherapy from "@/assets/sports-therapy.jpg";
import therapySession from "@/assets/therapy-session.jpg";
import backPain from "@/assets/Back Pain.jpg";
import concussions from "@/assets/Concussions.jpg";
import dryneedling from "@/assets/dryneedling.jpg";
import headache from "@/assets/headache.jpg";
import musculoskeletal from "@/assets/Musculoskeletal.jpg";
import olderAdults from "@/assets/Older Adults.jpg";
import tmj from "@/assets/TMJ Dysfunction..jpg";
import vestibular from "@/assets/Vestibular Therapy.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: aboutImage,
      alt: "Modern therapy room with natural lighting",
      title: "State-of-the-Art Facilities",
      description: "Our welcoming environment promotes healing and comfort",
    },
    {
      id: 2,
      src: heroTherapy,
      alt: "Physical therapist assisting patient",
      title: "Personalized Care",
      description: "One-on-one attention for optimal recovery",
    },
    {
      id: 3,
      src: homeImage,
      alt: "Clinic interior with comfortable seating",
      title: "Comfortable Atmosphere",
      description: "Designed for your relaxation and well-being",
    },
    {
      id: 4,
      src: manualTherapy,
      alt: "Hands-on therapy session",
      title: "Expert Manual Therapy",
      description: "Specialized techniques for pain relief",
    },
    {
      id: 5,
      src: sportsTherapy,
      alt: "Athlete rehabilitation session",
      title: "Sports Rehabilitation",
      description: "Getting athletes back to peak performance",
    },
    {
      id: 6,
      src: therapySession,
      alt: "Group therapy session",
      title: "Comprehensive Treatment",
      description: "Multiple approaches for lasting results",
    },
    {
      id: 7,
      src: backPain,
      alt: "Back pain treatment",
      title: "Back Pain Relief",
      description: "Specialized care for back and spinal conditions",
    },
    {
      id: 8,
      src: concussions,
      alt: "Concussion care",
      title: "Concussion Rehabilitation",
      description: "Expert care for post-concussion recovery",
    },
    {
      id: 9,
      src: dryneedling,
      alt: "Dry needling therapy",
      title: "Advanced Dry Needling",
      description: "Targeted muscle release for pain relief",
    },
    {
      id: 10,
      src: headache,
      alt: "Headache treatment",
      title: "Headache & Migraine Care",
      description: "Effective treatment for chronic headaches",
    },
    {
      id: 11,
      src: musculoskeletal,
      alt: "Musculoskeletal treatment",
      title: "Musculoskeletal Care",
      description: "Comprehensive treatment for muscle and joint injuries",
    },
    {
      id: 12,
      src: olderAdults,
      alt: "Geriatric therapy",
      title: "Senior Wellness",
      description: "Age-friendly programs for active living",
    },
    {
      id: 13,
      src: tmj,
      alt: "TMJ therapy",
      title: "TMJ Treatment",
      description: "Relief from jaw pain and dysfunction",
    },
    {
      id: 14,
      src: vestibular,
      alt: "Vestibular therapy",
      title: "Balance Therapy",
      description: "Treatment for dizziness and balance disorders",
    },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    }
  };

  // Add event listener for keyboard navigation
  useState(() => {
    window.addEventListener("keydown", handleKeyDown as any);
    return () => {
      window.removeEventListener("keydown", handleKeyDown as any);
    };
  });

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroTherapy})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Explore our facility and see the environment where your healing
              journey begins
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Cloud 9
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a visual tour of our modern facilities and meet our dedicated
              team
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lift hover:shadow-ocean transition-all duration-500 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {image.title}
                  </h3>
                  <p className="text-white/90">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white z-10 p-2 rounded-full hover:bg-white/20 transition-colors"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-10 p-3 rounded-full hover:bg-white/20 transition-colors"
              onClick={goToPrevious}
            >
              <ArrowLeft className="h-8 w-8" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-10 p-3 rounded-full hover:bg-white/20 transition-colors"
              onClick={goToNext}
            >
              <ArrowRight className="h-8 w-8" />
            </button>

            <div className="flex flex-col items-center">
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="max-h-[70vh] object-contain"
              />
              <div className="mt-6 text-center max-w-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {galleryImages[currentIndex].title}
                </h3>
                <p className="text-white/90 text-lg">
                  {galleryImages[currentIndex].description}
                </p>
                <p className="text-white/70 mt-4">
                  {currentIndex + 1} of {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Experience Our Facility?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Schedule a tour or book your appointment today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg shadow-ocean hover:scale-105 transition-smooth"
              onClick={() => (window.location.href = "/booking")}
            >
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
