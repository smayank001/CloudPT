import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import concussionImage from "@/assets/Concussions.jpg";

const ConcussionCare = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Concussion Care & Rehabilitation
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Comprehensive assessment and rehabilitation for post-concussion
            symptoms and safe recovery.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={concussionImage}
                alt="Concussion Care"
                className="rounded-2xl shadow-ocean w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Understanding Concussions
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                A concussion is a mild traumatic brain injury caused by a blow
                to the head or body that causes the brain to move rapidly inside
                the skull. This can disrupt normal brain function, leading to a
                range of symptoms that affect physical, cognitive, and emotional
                well-being.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                While most concussions resolve within days to weeks, some
                individuals experience persistent symptoms (post-concussion
                syndrome) that require specialized rehabilitation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-accent p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">How We Help</h3>
              <ul className="space-y-3">
                {[
                  "Comprehensive concussion assessment",
                  "Vestibular rehabilitation for dizziness",
                  "Vision therapy for visual symptoms",
                  "Cervical spine treatment",
                  "Gradual return to activity protocols",
                  "Cognitive rest and pacing strategies",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lift">
              <h3 className="text-2xl font-bold mb-6">Symptoms We Address</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Headaches</li>
                <li>• Dizziness and balance problems</li>
                <li>• Vision issues (blurry, double vision)</li>
                <li>• Light and noise sensitivity</li>
                <li>• Difficulty concentrating</li>
                <li>• Memory problems</li>
                <li>• Fatigue</li>
                <li>• Mood changes (anxiety, irritability)</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-primary/5 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold mb-4">
              Our Evidence-Based Approach
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Concussion recovery isn't one-size-fits-all. We identify which
              systems are affected and create a targeted treatment plan:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <li>• Vestibular assessment and therapy</li>
              <li>• Oculomotor (eye movement) training</li>
              <li>• Cervical spine manual therapy</li>
              <li>• Exertion testing and graded exercise</li>
              <li>• Balance and coordination training</li>
              <li>• Return-to-learn and return-to-sport protocols</li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Who Benefits Most?</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Our concussion program serves athletes, students, and anyone
              recovering from a concussion—whether from sports, falls, motor
              vehicle accidents, or other causes. We also treat post-concussion
              syndrome when symptoms persist beyond expected recovery time.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">What to Expect</h3>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Initial Evaluation:</strong> Detailed assessment including
              symptom inventory, balance testing, vestibular screening, cervical
              spine exam, and cognitive assessment.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Treatment:</strong> Individualized program typically 2-3x
              per week. We progress gradually based on symptom response.
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Recovery:</strong> Most concussions resolve within 7-14
              days, but recovery varies. Post-concussion syndrome may require
              6-12 weeks or more. We track progress objectively and coordinate
              with your physician.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Get Expert Concussion Care
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Don't navigate concussion recovery alone. Our specialists are here
            to guide you.
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

export default ConcussionCare;
