import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Heart, Target, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PartnerMarquee from "@/components/PartnerMarquee";
import therapySession from "@/assets/therapy-session.jpg";
import helping from "@/assets/Helping.png";
import aboutt from "@/assets/about.jpg";
import homee from "@/assets/Homee.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Every treatment plan is customized to your unique needs and goals.",
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description:
        "Evidence-based practices delivered by licensed professionals.",
    },
    {
      icon: Target,
      title: "Goal-Oriented Results",
      description: "We measure success by your progress and satisfaction.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Proud to serve and support our local community.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 hero-gradient">
        <img
          src={homee}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              About Cloud 9 Physical Therapy
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Dedicated to helping you achieve optimal health and wellness
              through personalized, compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Cloud 9 Physical Therapy, we believe that everyone deserves
                to live life without pain and limitation. Our mission is to
                provide exceptional, evidence-based physical therapy services
                that empower our patients to achieve their highest level of
                function and quality of life.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Founded on principles of compassion, expertise, and innovation,
                we've built a practice that puts you first. Every member of our
                team is committed to delivering personalized care that addresses
                not just your symptoms, but the root cause of your condition.
              </p>
              <p className="text-lg text-muted-foreground">
                With years of combined experience and ongoing education in the
                latest therapeutic techniques, we're equipped to handle a wide
                range of conditions—from acute injuries to chronic pain, from
                post-surgical rehabilitation to performance optimization.
              </p>
            </div>
            <div className="relative">
              <img
                src={aboutt}
                alt="Therapy Session"
                className="rounded-2xl shadow-ocean w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Meet Our Experts</h2>
            <p className="text-lg text-muted-foreground">
              Our team of licensed physical therapists brings decades of
              combined experience and specialized training to provide you with
              the highest quality care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-lift">
              <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-2">
                Dr. Sarah Johnson, PT, DPT
              </h3>
              <p className="text-center text-primary mb-4">
                Lead Physical Therapist
              </p>
              <p className="text-muted-foreground text-center">
                Board-certified with 15+ years of experience specializing in
                orthopedic and sports rehabilitation. Advanced certifications in
                manual therapy and dry needling.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-lift">
              <div className="w-32 h-32 rounded-full bg-secondary/10 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-16 w-16 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-2">
                Dr. Michael Chen, PT, DPT
              </h3>
              <p className="text-center text-secondary mb-4">
                Senior Physical Therapist
              </p>
              <p className="text-muted-foreground text-center">
                Specialized in vestibular rehabilitation and geriatric physical
                therapy. 12+ years helping patients regain balance, strength,
                and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Marquee */}
      <PartnerMarquee />

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Experience the Cloud 9 Difference
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join hundreds of satisfied patients who've achieved their recovery
            goals with us.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg shadow-ocean hover:scale-105 transition-smooth"
          >
            <Link to="/booking">Book Appointment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
