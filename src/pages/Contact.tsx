import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    concern: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    toast({
      title: "Appointment Request Received!",
      description:
        "We'll contact you within 24 hours to confirm your appointment.",
    });
    setFormData({ name: "", email: "", phone: "", concern: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Ready to start your recovery journey? Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl shadow-lift">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-2"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-2"
                    placeholder="contact@cloud9pt.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="mt-2"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="concern">Primary Concern</Label>
                  <Input
                    id="concern"
                    type="text"
                    value={formData.concern}
                    onChange={(e) =>
                      setFormData({ ...formData, concern: e.target.value })
                    }
                    className="mt-2"
                    placeholder="e.g., Lower back pain, knee injury"
                  />
                </div>

                <div>
                  <Label htmlFor="message">
                    Message / Appointment Preference
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-2 min-h-[120px]"
                    placeholder="Tell us about your condition and preferred appointment times..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full shadow-ocean">
                  Submit Appointment Request
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-accent p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a
                        href="tel:+13177343430"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        (317) 734-3430
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Main line - Call for immediate assistance
                      </p>
                      <a
                        href="tel:+13177343376"
                        className="text-muted-foreground hover:text-primary transition-smooth mt-1 block"
                      >
                        (317) 734-3376
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Fax</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:contact@cloud9pt.com"
                        className="text-muted-foreground hover:text-secondary transition-smooth"
                      >
                        contact@cloud9pt.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-ocean-bright/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-ocean-bright" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        5370 E. Thompson Rd, Ste. G<br />
                        Indianapolis, IN 46237
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Office Hours</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                        <p>Saturday: 8:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-card p-8 rounded-2xl shadow-lift">
                <h3 className="text-2xl font-bold mb-4">Find Us</h3>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.442515331551!2d-86.0645506846014!3d39.83449097944181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca7b7a0d0d0d1%3A0x8c8c8c8c8c8c8c8c!2s5370%20E%20Thompson%20Rd%20g%2C%20Indianapolis%2C%20IN%2046237%2C%20USA!5e0!3m2!1sen!2s!4v1678901234567!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Cloud 9 Physical Therapy Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Insurance & Payment</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We accept most major insurance plans and offer flexible payment
              options. Contact us to verify your coverage and discuss payment
              arrangements.
            </p>
            <p className="text-muted-foreground">
              Most insurance plans cover physical therapy services. We'll verify
              your benefits and provide an estimate of your out-of-pocket costs
              before your first visit.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
