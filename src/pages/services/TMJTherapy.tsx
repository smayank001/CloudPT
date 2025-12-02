import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import tmjImage from "@/assets/TMJ Dysfunction..jpg";

const TMJTherapy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            TMJ Therapy
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Relief from jaw pain, clicking, and temporomandibular joint
            dysfunction through specialized care.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Understanding TMJ Dysfunction
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                The temporomandibular joint (TMJ) connects your jawbone to your
                skull. TMJ disorders (TMD) cause pain in your jaw joint and the
                muscles controlling jaw movement. Symptoms include pain,
                clicking or popping sounds, limited jaw opening, and headaches.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                TMJ dysfunction can result from stress, teeth grinding, jaw
                injury, arthritis, or poor posture. Left untreated, it can
                significantly impact your ability to eat, speak, and sleep
                comfortably.
              </p>
            </div>
            <div>
              <img
                src={tmjImage}
                alt="TMJ Treatment"
                className="rounded-2xl shadow-ocean w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-accent p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">
                How Physical Therapy Helps
              </h3>
              <ul className="space-y-3">
                {[
                  "Reduces jaw pain and tension",
                  "Improves jaw mobility and function",
                  "Releases tight muscles",
                  "Corrects postural contributors",
                  "Decreases headaches",
                  "Restores normal jaw mechanics",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lift">
              <h3 className="text-2xl font-bold mb-6">Symptoms We Treat</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Jaw pain or tenderness</li>
                <li>• Clicking or popping sounds</li>
                <li>• Limited jaw opening (lock jaw)</li>
                <li>• Difficulty chewing</li>
                <li>• Ear pain or ringing</li>
                <li>• Tension headaches</li>
                <li>• Facial pain</li>
                <li>• Neck and shoulder tension</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-primary/5 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold mb-4">Treatment Techniques</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <li>• Manual therapy to jaw and neck</li>
              <li>• Intraoral mobilization</li>
              <li>• Myofascial release</li>
              <li>• Jaw strengthening exercises</li>
              <li>• Postural correction</li>
              <li>• Stress management techniques</li>
              <li>• Dry needling for trigger points</li>
              <li>• Home exercise program</li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Who Benefits Most?</h3>
            <p className="text-lg text-muted-foreground mb-4">
              TMJ therapy is ideal for individuals experiencing jaw pain,
              clicking, limited jaw opening, chronic headaches related to jaw
              dysfunction, or those diagnosed with TMD by their dentist or
              physician.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">What to Expect</h3>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Evaluation:</strong> Thorough assessment of jaw movement,
              muscle tension, posture, and contributing factors.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Treatment:</strong> Gentle, specialized techniques both
              inside and outside the mouth. Sessions typically 45 minutes, 1-2x
              per week.
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Recovery:</strong> Many patients notice improvement within
              4-6 weeks. Chronic or severe cases may require 8-12 weeks. We
              often coordinate care with your dentist for optimal results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Relief from TMJ Pain Is Possible
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Stop living with jaw pain. Our TMJ specialists can help you find
            relief.
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

export default TMJTherapy;
