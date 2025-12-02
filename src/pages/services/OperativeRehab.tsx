import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import operativeRehabImage from "@/assets/Athletic Performance.jpg";

const OperativeRehab = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Pre- and Post-Operative Rehabilitation
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Optimize your surgical outcomes with expert preparation and recovery
            programs.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Pre- and Post-Op Therapy Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Whether you're preparing for surgery or recovering from one,
                physical therapy plays a crucial role in your success.{" "}
                <strong>Prehabilitation</strong> (pre-op PT) strengthens your
                body before surgery, while{" "}
                <strong>post-operative rehabilitation</strong> ensures proper
                healing and return to function.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Research shows that patients who participate in pre- and
                post-operative physical therapy experience faster recovery, less
                pain, and better long-term outcomes.
              </p>
            </div>
            <div>
              <img
                src={operativeRehabImage}
                alt="Operative Rehabilitation"
                className="rounded-2xl shadow-ocean w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-accent p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">
                Pre-Operative Benefits
              </h3>
              <ul className="space-y-3">
                {[
                  "Strengthens muscles around surgical site",
                  "Improves flexibility and range of motion",
                  "Reduces post-op complications",
                  "Faster recovery time",
                  "Better surgical outcomes",
                  "Mentally prepares you for recovery",
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
                Post-Operative Benefits
              </h3>
              <ul className="space-y-3">
                {[
                  "Safe, guided recovery process",
                  "Pain management without excess medication",
                  "Restoration of strength and mobility",
                  "Prevention of scar tissue buildup",
                  "Return to daily activities sooner",
                  "Reduced risk of re-injury",
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
            <h3 className="text-2xl font-bold mb-4">Surgeries We Support</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <li>• Joint replacement (hip, knee, shoulder)</li>
              <li>• ACL/MCL reconstruction</li>
              <li>• Rotator cuff repair</li>
              <li>• Spinal surgery</li>
              <li>• Meniscus repair</li>
              <li>• Fracture repair</li>
              <li>• Arthroscopic procedures</li>
              <li>• Ligament reconstruction</li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Pre-Operative Phase:</strong> We work with you weeks
              before surgery to optimize strength, flexibility, and
              cardiovascular fitness. You'll learn post-op exercises and what to
              expect during recovery.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Post-Operative Phase:</strong> We coordinate with your
              surgeon to follow protocol-based rehabilitation. Treatment
              progresses through phases: protection, early motion,
              strengthening, and return to activity.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Timeline:</strong> Pre-op therapy typically lasts 2-6
              weeks before surgery. Post-op rehabilitation varies by
              procedure—6-12 weeks for minor surgeries, up to 6-12 months for
              major joint replacements or reconstructions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Prepare for Success, Recover with Confidence
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let us guide you through every step of your surgical journey.
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

export default OperativeRehab;
