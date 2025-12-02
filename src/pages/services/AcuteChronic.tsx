import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import musculoskeletalImage from "@/assets/Musculoskeletal.jpg";

const AcuteChronic = () => {
  const benefits = [
    "Pain reduction and management",
    "Improved range of motion",
    "Faster healing and recovery",
    "Prevention of chronic conditions",
    "Return to daily activities",
    "Reduced reliance on pain medications",
  ];

  const techniques = [
    "Manual therapy and joint mobilization",
    "Therapeutic exercises",
    "Soft tissue mobilization",
    "Modalities (heat, ice, electrical stimulation)",
    "Movement pattern training",
    "Home exercise programs",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Acute / Chronic Musculoskeletal Injuries
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Expert treatment for muscle, joint, and bone injuries—from recent
            trauma to long-standing pain.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                What Are Musculoskeletal Injuries?
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Musculoskeletal injuries affect the muscles, bones, ligaments,
                tendons, and nerves. These can range from acute injuries like
                sprains and strains to chronic conditions such as tendinitis and
                arthritis.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Acute injuries</strong> occur suddenly—from sports,
                falls, or accidents. <strong>Chronic injuries</strong> develop
                over time from repetitive stress, poor posture, or untreated
                acute conditions.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether your pain is new or has persisted for months or years,
                physical therapy can help address the root cause and restore
                your function.
              </p>
            </div>
            <div>
              <img
                src={musculoskeletalImage}
                alt="Musculoskeletal Injury Treatment"
                className="rounded-2xl shadow-ocean w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-accent p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">
                How Physical Therapy Helps
              </h3>
              <p className="text-muted-foreground mb-4">
                Our comprehensive approach includes a thorough evaluation to
                identify the underlying cause of your pain, followed by a
                personalized treatment plan designed to:
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lift">
              <h3 className="text-2xl font-bold mb-6">Treatment Techniques</h3>
              <p className="text-muted-foreground mb-4">
                We utilize evidence-based methods tailored to your specific
                condition:
              </p>
              <ul className="space-y-3">
                {techniques.map((technique, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{technique}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-primary/5 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold mb-4">Who Benefits Most?</h3>
            <p className="text-lg text-muted-foreground mb-4">
              This treatment is ideal for individuals experiencing:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <li>• Sports injuries</li>
              <li>• Work-related injuries</li>
              <li>• Auto accident injuries</li>
              <li>• Overuse injuries</li>
              <li>• Post-surgical complications</li>
              <li>• Arthritis pain</li>
              <li>• Tendinitis</li>
              <li>• Chronic pain conditions</li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Initial Evaluation:</strong> We'll assess your injury,
              movement patterns, strength, and functional limitations to create
              a targeted treatment plan.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Treatment Sessions:</strong> Typically 45-60 minutes,
              combining hands-on therapy, therapeutic exercises, and education.
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Recovery Timeline:</strong> Varies based on injury
              severity. Acute injuries may improve in 4-8 weeks; chronic
              conditions may require 8-12 weeks or more. We'll track your
              progress and adjust treatment as needed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Start Your Recovery Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Don't let pain hold you back. Our expert therapists are ready to
            help you heal.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg shadow-ocean hover:scale-105 transition-smooth"
          >
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcuteChronic;
