import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import geriatricImage from "@/assets/Older Adults.jpg";

const Geriatric = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Geriatric Physical Therapy
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Age-friendly programs focused on maintaining independence, strength,
            and quality of life.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Specialized Care for Older Adults
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Geriatric physical therapy addresses the unique health
                challenges that come with aging—from arthritis and osteoporosis
                to balance problems and decreased mobility. Our goal is to help
                you stay active, independent, and engaged in life.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We understand that aging doesn't mean giving up the activities
                you love. With the right interventions, you can maintain
                strength, reduce pain, prevent falls, and continue doing what
                matters most to you.
              </p>
            </div>
            <div>
              <img
                src={geriatricImage}
                alt="Geriatric Therapy"
                className="rounded-2xl shadow-ocean w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-accent p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">How We Help</h3>
              <ul className="space-y-3">
                {[
                  "Improve balance and prevent falls",
                  "Manage arthritis and chronic pain",
                  "Increase strength and endurance",
                  "Enhance mobility and independence",
                  "Address age-related conditions",
                  "Improve quality of life",
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
                <li>• Arthritis (osteo and rheumatoid)</li>
                <li>• Osteoporosis</li>
                <li>• Balance and gait disorders</li>
                <li>• Post-fall syndrome</li>
                <li>• Joint replacement recovery</li>
                <li>• Parkinson's disease</li>
                <li>• Stroke recovery</li>
                <li>• General deconditioning</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-primary/5 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            <p className="text-lg text-muted-foreground mb-4">
              We create safe, individualized programs that respect your current
              fitness level and health conditions. Treatment includes:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <li>• Gentle strengthening exercises</li>
              <li>• Balance and coordination training</li>
              <li>• Fall prevention education</li>
              <li>• Flexibility and mobility work</li>
              <li>• Functional training for daily tasks</li>
              <li>• Home safety assessments</li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Who Benefits Most?</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Geriatric physical therapy is ideal for older adults who want to
              maintain or improve their independence, those recovering from
              illness or injury, individuals at risk for falls, or anyone
              experiencing age-related decline in strength and mobility.
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8">What to Expect</h3>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Assessment:</strong> Comprehensive evaluation of your
              strength, balance, gait, and functional abilities.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Treatment:</strong> Sessions are paced to your comfort
              level, typically 45-60 minutes, 1-3 times per week.
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Results:</strong> Many patients notice improved confidence
              and mobility within 4-8 weeks. Ongoing maintenance programs help
              sustain gains long-term.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Stay Active, Stay Independent
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Age is just a number. Let us help you live your best life at any
            age.
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

export default Geriatric;
