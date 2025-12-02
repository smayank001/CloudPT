import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Clock,
  Award,
  Users,
  ChevronRight,
  Minus,
  Plus,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-therapy.jpg";
import therapySession from "@/assets/therapy-session.jpg";
import manualTherapy from "@/assets/manual-therapy.jpg";
import balanceImage from "@/assets/balance.jpg";
import homee from "@/assets/home.jpg";
import heroVideo from "@/assets/video.mp4";
import PartnerMarquee from "@/components/PartnerMarquee";
import { useState, useEffect } from "react";

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: "1-on-1 Personalized Care",
      description:
        "Individual attention focused entirely on your recovery goals",
    },
    {
      icon: Award,
      title: "Expert Treatment",
      description: "Evidence-based techniques from licensed specialists",
    },
    {
      icon: Clock,
      title: "Weekend Availability",
      description: "Flexible scheduling including Saturday appointments",
    },
    {
      icon: Users,
      title: "Patient-First Approach",
      description: "Your comfort and progress are our top priorities",
    },
  ];

  const services = [
    {
      title: "Sports Medicine",
      description:
        "Get back in the game with specialized sports injury rehabilitation",
      image: therapySession,
      link: "/services/sports-medicine",
    },
    {
      title: "Manual Therapy",
      description: "Hands-on treatment for pain relief and improved mobility",
      image: manualTherapy,
      link: "/services/acute-chronic",
    },
    {
      title: "Balance Therapy",
      description:
        "Vestibular rehabilitation for dizziness and balance disorders",
      image: balanceImage,
      link: "/services/balance-vestibular",
    },
  ];

  // Updated testimonials for slider
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      text: "The personalized care I received was exceptional. My chronic back pain is finally manageable!",
      rating: 5,
    },
    {
      id: 2,
      name: "John D.",
      text: "Professional, caring, and effective. They helped me recover from my knee surgery faster than expected.",
      rating: 5,
    },
    {
      id: 3,
      name: "Lisa K.",
      text: "Weekend appointments were a lifesaver for my busy schedule. Highly recommend Cloud 9!",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael T.",
      text: "The therapists truly listen and adapt treatments to your specific needs. Best PT experience I've had!",
      rating: 5,
    },
    {
      id: 5,
      name: "Jennifer R.",
      text: "After struggling with neck pain for months, I'm finally pain-free thanks to their expertise.",
      rating: 5,
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "Do you accept Medicare?",
      answer: "Yes, we accept Medicare.",
    },
    {
      question: "Do you accept private insurance?",
      answer:
        "Cloud 9 Physical Therapy accepts most major insurance plans. We'll happily contact your insurance company and verify/explain your benefits to you.",
    },
    {
      question: "What are your fees?",
      answer:
        "If you have a deductible to fill before your insurance company covers care, you can expect to pay for services at the time of your session.\n\n60 minute 1:1 evaluation with your physical therapist: $160\n\n55 minute 1:1 treatment session with your physical therapist: $120\n\nFees do not apply to Medicare beneficiaries.",
    },
    {
      question: "Do you offer packages?",
      answer:
        "Yes, we do! Packages can be purchased for the following rates:\n\n6 pack session: $660\n\n12 pack session: $1,220\n\n18 pack session: $1,680",
    },
    {
      question: "Is there a cancellation fee?",
      answer:
        "No cancellation fees, but we would appreciate a 24 hour notice if you can't make it or need to reschedule.",
    },
    {
      question: "Do I need a referral for physical therapy?",
      answer:
        'Not in Indiana. Indiana is a "Direct Access" state, meaning you can go to a physical therapist without a referral or prescription.',
    },
    {
      question: "How long until I see an improvement?",
      answer:
        "The vast majority of our clients see improvement in their symptoms within two weeks of initiating care. Time to resolution of symptoms depends on severity, how long the issue has been present, and many other contributing factors (such as occupational demands, etc.) that can impact the healing process.",
    },
    {
      question: "What do I wear to physical therapy?",
      answer:
        "Comfortable clothing that allows the physical therapist to see and examine the area and surrounding areas of concern. For example, if you are coming in for...\n\nKnee pain – Don't wear tight leggings! We need to be able to roll pants up to your mid-thigh. Shorts or loose leggings are perfect.\n\nShoulder pain – T-shirt.\n\nHip pain – Same as knee pain, shorts, or loose pants/pajamas.\n\nBack pain – Comfortable pants and shirt that can be rolled up or adjusted so that the therapist can examine the area of concern.",
    },
  ];

  // State for testimonial slider
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center">
        <div className="absolute inset-0 hero-gradient opacity-120" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Your Journey to Recovery Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Expert physical therapy with personalized care plans designed to
              get you back to doing what you love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg shadow-ocean hover:scale-105 transition-smooth pulse"
              >
                <Link to="/booking">Book Appointment</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="text-lg bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30 hover:border-white/50 hover:scale-105 transition-all duration-300"
              >
                <Link to="/services">See Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-slide-up">
            Why Choose Cloud 9 Physical Therapy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-lift hover:shadow-ocean transition-smooth hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hero-Style Image + Intro Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <img
                src={heroImage}
                alt="Physical Therapy Session"
                className="rounded-2xl shadow-ocean w-full object-cover h-full"
              />
            </div>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Restoring Strength. Reviving Motion. Enhancing Life.
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Cloud 9 Physical Therapy, we provide expert, compassionate
                care designed to restore movement, reduce pain, and improve your
                overall quality of life. Our experienced clinicians deliver
                personalized treatment plans tailored to your unique needs — so
                you can return to doing the things you love with confidence and
                comfort.
              </p>
              <p className="text-lg text-muted-foreground">
                We combine advanced therapeutic techniques with evidence-based
                practices to ensure safe, effective, and long-lasting results.
                From injury recovery to chronic pain management, we are
                dedicated to supporting your journey toward better health and
                mobility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Comprehensive physical therapy solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lift hover:shadow-ocean transition-smooth group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:opacity-100 transition-opacity duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/90 group-hover:opacity-100 transition-opacity duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-primary font-medium hover:text-secondary transition-smooth"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="shadow-ocean hover:scale-105 transition-smooth bg-primary text-primary-foreground"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-slide-up">
            What Our Patients Say
          </h2>

          {/* Testimonial Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonialIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <Card className="border-none shadow-lift mx-4 animate-slide-up">
                      <CardContent className="p-8">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-secondary text-2xl">
                              ★
                            </span>
                          ))}
                        </div>
                        <p className="text-foreground mb-6 text-lg italic">
                          "{testimonial.text}"
                        </p>
                        <p className="font-semibold text-primary text-right">
                          — {testimonial.name}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentTestimonialIndex
                      ? "bg-primary"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnerMarquee />

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-slide-up">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-none shadow-lift cursor-pointer transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => toggleFaq(index)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                    {expandedFaqIndex === index ? (
                      <Minus className="h-5 w-5 text-primary" />
                    ) : (
                      <Plus className="h-5 w-5 text-primary" />
                    )}
                  </div>

                  {expandedFaqIndex === index && (
                    <div className="mt-4 text-muted-foreground whitespace-pre-line">
                      {faq.answer}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-slide-up">
            Your Path to Recovery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="text-center animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-3xl font-bold mb-4">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-3">Evaluation</h3>
              <p className="text-muted-foreground">
                Comprehensive assessment of your condition and movement patterns
              </p>
            </div>
            <div
              className="text-center animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary text-secondary-foreground text-3xl font-bold mb-4">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Personalized Therapy
              </h3>
              <p className="text-muted-foreground">
                Custom treatment plan tailored to your specific goals
              </p>
            </div>
            <div
              className="text-center animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-ocean-bright text-white text-3xl font-bold mb-4">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-3">Full Recovery</h3>
              <p className="text-muted-foreground">
                Return to your activities stronger and more confident
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Ready to Start Your Recovery?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-slide-up">
            Schedule your appointment today and take the first step toward a
            pain-free life.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg shadow-ocean hover:scale-105 transition-smooth pulse animate-slide-up"
          >
            <Link to="/booking">Book Appointment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
