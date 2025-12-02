import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import dryNeedlingImage from "@/assets/dryneedling.jpg";

const DryNeedling = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Functional Dry Needling
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Advanced technique using thin needles to release muscle tension and
            restore pain-free movement.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={dryNeedlingImage}
                alt="Dry Needling"
                className="rounded-2xl shadow-ocean w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                What Is Functional Dry Needling?
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Functional Dry Needling (FDN) is a specialized technique where
                thin, sterile needles are inserted into myofascial trigger
                points—tight bands of muscle that cause pain and restrict
                movement.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Unlike acupuncture (which is based on traditional Chinese
                medicine), dry needling is rooted in Western anatomical and
                neurophysiological principles. The goal is to release muscle
                tension, improve blood flow, and reduce pain.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-accent p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">How It Treats Pain</h3>
              <ul className="space-y-3">
                {[
                  "Releases trigger points and muscle knots",
                  "Increases blood circulation to affected areas",
                  "Reduces inflammation and muscle tightness",
                  "Improves range of motion",
                  "Accelerates healing process",
                  "Decreases pain signals to the brain",
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
                <li>• Chronic neck and back pain</li>
                <li>• Shoulder pain and rotator cuff issues</li>
                <li>• Tennis elbow and golfer's elbow</li>
                <li>• Sciatica and hip pain</li>
                <li>• Plantar fasciitis</li>
                <li>• Tension headaches and migraines</li>
                <li>• Sports injuries</li>
                <li>• TMJ dysfunction</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-primary/5 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold mb-4">Who Benefits Most?</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Dry needling is especially effective for patients who:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                • Have chronic muscle pain that hasn't responded to other
                treatments
              </li>
              <li>• Experience limited range of motion due to tight muscles</li>
              <li>• Want to accelerate recovery from sports injuries</li>
              <li>• Suffer from repetitive strain injuries</li>
              <li>• Deal with tension-type headaches</li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
            <p className="text-lg text-muted-foreground mb-4">
              During your session, your therapist will identify trigger points
              through palpation and assessment. Thin needles (similar to
              acupuncture needles) are gently inserted into these points. You
              may feel a brief twitch response—this is normal and indicates the
              muscle is releasing.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Session Length:</strong> 20-30 minutes, often combined
              with other physical therapy treatments.
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Recovery:</strong> Most patients notice immediate relief
              or improvement within 24-48 hours. Mild soreness is common and
              typically resolves quickly. Multiple sessions may be needed for
              chronic conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Experience Relief with Dry Needling
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Our certified therapists are trained in advanced dry needling
            techniques.
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

export default DryNeedling;
