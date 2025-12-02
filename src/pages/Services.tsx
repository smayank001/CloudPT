import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Zap, 
  Target, 
  Brain, 
  Heart, 
  Users, 
  Trophy, 
  Smile,
  AlertCircle,
  ArrowRight
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: "Acute / Chronic Musculoskeletal Injuries",
      description: "Comprehensive treatment for muscle, joint, and bone injuries—from recent sprains to long-term pain management.",
      link: "/services/acute-chronic",
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "Functional Dry Needling",
      description: "Advanced technique using thin needles to release muscle tension, reduce pain, and restore movement.",
      link: "/services/dry-needling",
      color: "text-secondary",
    },
    {
      icon: Target,
      title: "Balance / Vestibular Physical Therapy",
      description: "Specialized treatment for dizziness, vertigo, and balance disorders to improve stability and confidence.",
      link: "/services/balance-vestibular",
      color: "text-ocean-bright",
    },
    {
      icon: Brain,
      title: "Headache & Neck Pain Treatment",
      description: "Evidence-based therapy for chronic headaches, migraines, and cervical spine dysfunction.",
      link: "/services/headache-neck",
      color: "text-primary",
    },
    {
      icon: Heart,
      title: "Pre- and Post-Operative Rehabilitation",
      description: "Optimize surgical outcomes with preparation and recovery programs tailored to your procedure.",
      link: "/services/operative-rehab",
      color: "text-secondary",
    },
    {
      icon: Users,
      title: "Geriatric Physical Therapy",
      description: "Age-friendly programs focused on maintaining independence, strength, and quality of life.",
      link: "/services/geriatric",
      color: "text-ocean-deep",
    },
    {
      icon: Trophy,
      title: "Sports Medicine & Injury Rehab",
      description: "Get back in the game with sport-specific training and injury recovery for athletes of all levels.",
      link: "/services/sports-medicine",
      color: "text-primary",
    },
    {
      icon: Smile,
      title: "TMJ Therapy (Temporomandibular Joint)",
      description: "Relief from jaw pain, clicking, and dysfunction through manual therapy and exercises.",
      link: "/services/tmj-therapy",
      color: "text-secondary",
    },
    {
      icon: AlertCircle,
      title: "Concussion Care",
      description: "Comprehensive assessment and rehabilitation for post-concussion symptoms and recovery.",
      link: "/services/concussion-care",
      color: "text-ocean-bright",
    },
    {
      icon: Activity,
      title: "Back Pain Treatment",
      description: "Effective solutions for lower back pain, sciatica, and spinal conditions using proven techniques.",
      link: "/services/back-pain",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive physical therapy solutions designed to address your specific needs and help you achieve optimal health.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lift hover:shadow-ocean transition-smooth hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-smooth ${service.color}`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-primary font-medium hover:text-secondary transition-smooth group"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-6">Why Cloud 9 for Your Therapy Needs?</h2>
            <p className="text-lg text-muted-foreground">
              Our approach combines clinical expertise, personalized attention, and evidence-based techniques to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-lg font-semibold mb-2">Years Experience</p>
              <p className="text-muted-foreground">Combined clinical expertise</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-secondary mb-2">1000+</div>
              <p className="text-lg font-semibold mb-2">Happy Patients</p>
              <p className="text-muted-foreground">Successfully treated</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-ocean-bright mb-2">95%</div>
              <p className="text-lg font-semibold mb-2">Success Rate</p>
              <p className="text-muted-foreground">Patient satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Begin Your Recovery?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Schedule a consultation to discuss your specific needs and create a personalized treatment plan.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg shadow-ocean hover:scale-105 transition-smooth">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
