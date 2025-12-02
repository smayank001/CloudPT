import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import sportsMedicineImage from "@/assets/Athletic Performance.jpg";

const SportsMedicine = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Sports Medicine & Injury Rehab
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Get back in the game with sport-specific training and injury
            recovery for athletes of all levels.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={sportsMedicineImage}
                alt="Sports Therapy"
                className="rounded-2xl shadow-ocean w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Athletic Performance & Recovery
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Whether you're a weekend warrior, competitive athlete, or
                professional, sports injuries can sideline your passion and
                goals. Our sports medicine program is designed to get you back
                to peak performance safely and efficiently.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We combine injury rehabilitation with performance
                enhancement—addressing not just your current injury but also
                preventing future ones through movement analysis, strength
                training, and sport-specific conditioning.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-accent p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">How We Help Athletes</h3>
              <ul className="space-y-3">
                {[
                  "Accelerate recovery from sports injuries",
                  "Restore strength, speed, and agility",
                  "Improve athletic performance",
                  "Prevent future injuries",
                  "Sport-specific training programs",
                  "Safe return-to-play protocols",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lift">
              <h3 className="text-2xl font-bold mb-6">
                Common Sports Injuries
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• ACL/MCL tears and sprains</li>
                <li>• Rotator cuff injuries</li>
                <li>• Tennis/golfer's elbow</li>
                <li>• Ankle sprains</li>
                <li>• Runner's knee</li>
                <li>• Hamstring strains</li>
                <li>• Stress fractures</li>
                <li>• Shoulder impingement</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-primary/5 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold mb-4">
              Our Sports-Specific Approach
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              We tailor rehabilitation to your sport's unique demands:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <li>• Movement analysis and biomechanics</li>
              <li>• Functional strength training</li>
              <li>• Plyometric and agility drills</li>
              <li>• Sport-specific conditioning</li>
              <li>• Return-to-sport testing</li>
              <li>• Injury prevention strategies</li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Who We Serve</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Our sports medicine program serves athletes across all levels—from
              youth sports to collegiate, professional, and recreational
              athletes. We treat runners, cyclists, swimmers, team sport
              athletes, CrossFit enthusiasts, and more.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">What to Expect</h3>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Assessment:</strong> Comprehensive evaluation including
              movement screening, strength testing, and sport-specific
              functional assessment.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Treatment:</strong> Phased rehabilitation starting with
              healing, progressing through strength, power, and sport-specific
              training. Sessions 2-3x per week.
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Return to Play:</strong> Timeline varies by injury—minor
              strains may resolve in 2-6 weeks, major injuries like ACL
              reconstruction require 6-9 months. We ensure you're fully ready
              before clearance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Get Back to Your Game Stronger
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Don't let an injury end your season. We'll help you return better
            than before.
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

export default SportsMedicine;
