import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import backPainImage from "@/assets/Back Pain.jpg";

const BackPain = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Back Pain Treatment
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Effective solutions for lower back pain, sciatica, and spinal
            conditions using proven techniques.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Understanding Back Pain
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Back pain is one of the most common reasons people seek physical
                therapy—and for good reason. Whether it's a dull ache or sharp,
                debilitating pain, back problems can significantly impact your
                daily life, work, and activities.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Back pain can result from muscle strains, disc herniations,
                arthritis, poor posture, or structural issues. The good news?
                Most back pain responds well to conservative treatment with
                physical therapy, avoiding the need for surgery or long-term
                medication use.
              </p>
            </div>
            <div>
              <img
                src={backPainImage}
                alt="Back Pain Treatment"
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
                  "Identifies root cause of pain",
                  "Reduces pain and inflammation",
                  "Improves spinal mobility",
                  "Strengthens core and back muscles",
                  "Corrects posture and movement patterns",
                  "Prevents future episodes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lift">
              <h3 className="text-2xl font-bold mb-6">Conditions We Treat</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Lower back pain (acute and chronic)</li>
                <li>• Sciatica and nerve pain</li>
                <li>• Disc herniation / bulging disc</li>
                <li>• Degenerative disc disease</li>
                <li>• Spinal stenosis</li>
                <li>• Facet joint dysfunction</li>
                <li>• Muscle strains and spasms</li>
                <li>• Post-surgical back pain</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-primary/5 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold mb-4">Treatment Techniques</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Our comprehensive approach combines multiple evidence-based
              methods:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <li>• Manual therapy and spinal mobilization</li>
              <li>• Core strengthening exercises</li>
              <li>• McKenzie Method (MDT)</li>
              <li>• Dry needling for muscle tension</li>
              <li>• Traction therapy</li>
              <li>• Postural and ergonomic training</li>
              <li>• Functional movement retraining</li>
              <li>• Home exercise program</li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Who Benefits Most?</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Our back pain program is ideal for anyone experiencing acute or
              chronic lower back pain, sciatica, limited mobility, or difficulty
              with daily activities due to back problems. We treat everyone from
              office workers with postural pain to athletes with sports-related
              back injuries.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">What to Expect</h3>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Evaluation:</strong> Thorough assessment of your spine,
              movement patterns, strength, flexibility, and functional
              limitations. We'll identify the specific structures causing your
              pain.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Treatment:</strong> Personalized program combining
              hands-on therapy and exercises. Sessions 2-3x per week initially,
              progressing to home exercises.
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Recovery:</strong> Acute back pain often improves within
              2-6 weeks. Chronic pain may require 8-12 weeks or more. We focus
              on long-term solutions, not just temporary relief, teaching you
              strategies to manage and prevent future episodes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Find Lasting Relief from Back Pain
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Don't let back pain control your life. We have the expertise to help
            you recover.
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

export default BackPain;
