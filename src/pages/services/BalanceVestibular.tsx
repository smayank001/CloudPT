import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import vestibularImage from "@/assets/Vestibular Therapy.jpg";

const BalanceVestibular = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Balance / Vestibular Physical Therapy
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Specialized treatment for dizziness, vertigo, and balance disorders
            to restore stability and confidence.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                What Is Vestibular Therapy?
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Vestibular rehabilitation is a specialized form of physical
                therapy designed to treat problems with the inner ear and
                balance system. The vestibular system controls your sense of
                balance and spatial orientation.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                When this system is disrupted—due to injury, illness, or age—it
                can cause dizziness, vertigo (spinning sensation), imbalance,
                and difficulty with coordination.
              </p>
            </div>
            <div>
              <img
                src={vestibularImage}
                alt="Balance Therapy"
                className="rounded-2xl shadow-ocean w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-accent p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">How It Helps</h3>
              <ul className="space-y-3">
                {[
                  "Reduces dizziness and vertigo symptoms",
                  "Improves balance and coordination",
                  "Decreases fall risk",
                  "Restores confidence in movement",
                  "Enhances quality of life",
                  "Reduces reliance on assistive devices",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lift">
              <h3 className="text-2xl font-bold mb-6">Conditions Treated</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• BPPV (Benign Paroxysmal Positional Vertigo)</li>
                <li>• Vestibular neuritis</li>
                <li>• Labyrinthitis</li>
                <li>• Meniere's disease</li>
                <li>• Post-concussion dizziness</li>
                <li>• Age-related balance decline</li>
                <li>• Vestibular migraine</li>
                <li>• Motion sensitivity</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-primary/5 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold mb-4">
              Key Treatment Techniques
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <li>• Canalith repositioning maneuvers (Epley)</li>
              <li>• Gaze stabilization exercises</li>
              <li>• Balance retraining</li>
              <li>• Habituation exercises</li>
              <li>• Gait and coordination training</li>
              <li>• Fall prevention strategies</li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Who Benefits Most?</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Vestibular therapy is ideal for anyone experiencing dizziness,
              vertigo, or balance problems—whether from inner ear disorders,
              head injuries, aging, or neurological conditions.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">What to Expect</h3>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Initial Assessment:</strong> Comprehensive evaluation of
              your balance, eye movements, and vestibular function.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Treatment:</strong> Customized exercises and maneuvers
              performed in-clinic and at home. Sessions typically last 45-60
              minutes.
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Recovery:</strong> Many patients with BPPV see improvement
              in 1-3 sessions. Other conditions may require 6-8 weeks of
              therapy. Progress is monitored with objective balance assessments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Regain Your Balance and Confidence
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Don't let dizziness control your life. Our vestibular specialists
            can help.
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

export default BalanceVestibular;
