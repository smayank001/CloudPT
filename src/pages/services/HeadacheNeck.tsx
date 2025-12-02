import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import headacheImage from "@/assets/headache.jpg";

const HeadacheNeck = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Headache & Neck Pain Treatment
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Evidence-based therapy for chronic headaches, migraines, and
            cervical spine dysfunction.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={headacheImage}
                alt="Headache Treatment"
                className="rounded-2xl shadow-ocean w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Understanding Headache & Neck Pain
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Many headaches originate from the neck (cervicogenic headaches),
                caused by tight muscles, joint dysfunction, or poor posture.
                These headaches are often misdiagnosed as migraines or tension
                headaches.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Neck pain can stem from muscle strain, disc problems, arthritis,
                or nerve compression. When left untreated, it can lead to
                chronic headaches, reduced mobility, and decreased quality of
                life.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-accent p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">
                How Physical Therapy Helps
              </h3>
              <ul className="space-y-3">
                {[
                  "Identifies root cause of headaches",
                  "Reduces headache frequency and intensity",
                  "Improves neck mobility and posture",
                  "Releases muscle tension",
                  "Strengthens supporting muscles",
                  "Decreases medication dependence",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lift">
              <h3 className="text-2xl font-bold mb-6">Treatment Techniques</h3>
              <ul className="space-y-3">
                {[
                  "Manual therapy and joint mobilization",
                  "Soft tissue release",
                  "Postural retraining",
                  "Dry needling for trigger points",
                  "Therapeutic exercises",
                  "Ergonomic education",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-primary/5 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold mb-4">Conditions We Treat</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <li>• Cervicogenic headaches</li>
              <li>• Tension headaches</li>
              <li>• Migraines with neck involvement</li>
              <li>• Whiplash injuries</li>
              <li>• Cervical radiculopathy</li>
              <li>• Disc herniation</li>
              <li>• Arthritis in the neck</li>
              <li>• Text neck / tech neck</li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Who Benefits Most?</h3>
            <p className="text-lg text-muted-foreground mb-4">
              This treatment is ideal for individuals who experience frequent
              headaches, neck stiffness, pain that radiates to the shoulders or
              arms, or headaches triggered by neck movement or sustained
              postures (like desk work).
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">What to Expect</h3>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Evaluation:</strong> Thorough assessment of your cervical
              spine, posture, muscle tightness, and headache patterns.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Treatment:</strong> Hands-on therapy combined with
              exercises, typically 2-3 times per week initially.
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Recovery:</strong> Most patients notice reduced headache
              frequency within 4-6 weeks. Chronic cases may require 8-12 weeks.
              We'll provide strategies to prevent recurrence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Find Relief from Chronic Headaches
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Stop suffering. Let our experts help you break the cycle of pain.
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

export default HeadacheNeck;
