import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const services = [
  { id: "acute-chronic", name: "Acute / Chronic Musculoskeletal Injuries" },
  { id: "dry-needling", name: "Functional Dry Needling" },
  { id: "balance-vestibular", name: "Balance / Vestibular Physical Therapy" },
  { id: "headache-neck", name: "Headache & Neck Pain Treatment" },
  { id: "operative-rehab", name: "Pre- and Post-Operative Rehabilitation" },
  { id: "geriatric", name: "Geriatric Physical Therapy" },
  { id: "sports-medicine", name: "Sports Medicine & Injury Rehab" },
  { id: "tmj-therapy", name: "TMJ Therapy" },
  { id: "concussion-care", name: "Concussion Care" },
  { id: "back-pain", name: "Back Pain Treatment" },
];

const timeSlots = [
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

const Booking = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: undefined as Date | undefined,
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const steps = [
    { number: 1, title: "Select Service" },
    { number: 2, title: "Choose Date & Time" },
    { number: 3, title: "Your Information" },
    { number: 4, title: "Review & Confirm" },
  ];

  const handleNext = () => {
    if (currentStep === 1 && !formData.service) {
      toast({
        title: "Service Required",
        description: "Please select a service to continue.",
        variant: "destructive",
      });
      return;
    }
    if (currentStep === 2 && (!formData.date || !formData.time)) {
      toast({
        title: "Date & Time Required",
        description: "Please select both a date and time slot.",
        variant: "destructive",
      });
      return;
    }
    if (
      currentStep === 3 &&
      (!formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone)
    ) {
      toast({
        title: "Information Required",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    toast({
      title: "Appointment Confirmed!",
      description:
        "We've received your booking request. You'll receive a confirmation email at " +
        formData.email +
        " shortly.",
    });
    // Reset form
    setFormData({
      service: "",
      date: undefined,
      time: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: "",
    });
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-36 pb-12 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Start your journey to recovery in just a few simple steps
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-smooth border-2",
                      currentStep > step.number
                        ? "bg-primary text-primary-foreground border-primary"
                        : currentStep === step.number
                        ? "bg-secondary text-secondary-foreground border-secondary"
                        : "bg-muted text-muted-foreground border-muted"
                    )}
                  >
                    {currentStep > step.number ? (
                      <Check className="h-6 w-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <p
                    className={cn(
                      "text-sm font-medium mt-2 hidden sm:block",
                      currentStep >= step.number
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "h-0.5 flex-1 mx-4 transition-smooth",
                      currentStep > step.number ? "bg-primary" : "bg-muted"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-8 rounded-2xl shadow-ocean">
            {/* Step 1: Select Service */}
            {currentStep === 1 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    Select Your Service
                  </h2>
                  <p className="text-muted-foreground">
                    Choose the service that best matches your needs
                  </p>
                </div>
                <RadioGroup
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                  className="space-y-3"
                >
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className={cn(
                        "flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-smooth hover:border-primary hover:bg-accent",
                        formData.service === service.id
                          ? "border-primary bg-accent"
                          : "border-border"
                      )}
                      onClick={() =>
                        setFormData({ ...formData, service: service.id })
                      }
                    >
                      <RadioGroupItem value={service.id} id={service.id} />
                      <Label
                        htmlFor={service.id}
                        className="flex-1 cursor-pointer font-medium"
                      >
                        {service.name}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Step 2: Choose Date & Time */}
            {currentStep === 2 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    Choose Date & Time
                  </h2>
                  <p className="text-muted-foreground">
                    Select your preferred appointment date and time slot
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      Select Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal h-12",
                            !formData.date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-5 w-5" />
                          {formData.date ? (
                            format(formData.date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.date}
                          onSelect={(date) =>
                            setFormData({ ...formData, date })
                          }
                          disabled={(date) =>
                            date < new Date() || date.getDay() === 0
                          }
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {formData.date && (
                    <div>
                      <Label className="text-base font-semibold mb-3 block">
                        Select Time Slot
                      </Label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {timeSlots.map((slot) => (
                          <Button
                            key={slot}
                            variant={
                              formData.time === slot ? "default" : "outline"
                            }
                            className={cn(
                              "h-12 transition-smooth",
                              formData.time === slot && "shadow-ocean"
                            )}
                            onClick={() =>
                              setFormData({ ...formData, time: slot })
                            }
                          >
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Your Information */}
            {currentStep === 3 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Your Information</h2>
                  <p className="text-muted-foreground">
                    Please provide your contact details
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      placeholder="John"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      placeholder="Doe"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(555) 123-4567"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Tell us about your condition or any special requirements..."
                    className="mt-2 min-h-[100px]"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Review & Confirm */}
            {currentStep === 4 && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    Review Your Appointment
                  </h2>
                  <p className="text-muted-foreground">
                    Please review your booking details before confirming
                  </p>
                </div>

                <div className="space-y-4 bg-accent p-6 rounded-lg">
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="font-semibold">Service:</span>
                    <span className="text-right">
                      {services.find((s) => s.id === formData.service)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="font-semibold">Date:</span>
                    <span>
                      {formData.date && format(formData.date, "PPPP")}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="font-semibold">Time:</span>
                    <span>{formData.time}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="font-semibold">Patient Name:</span>
                    <span>
                      {formData.firstName} {formData.lastName}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="font-semibold">Email:</span>
                    <span>{formData.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-3">
                    <span className="font-semibold">Phone:</span>
                    <span>{formData.phone}</span>
                  </div>
                  {formData.notes && (
                    <div className="pt-2">
                      <span className="font-semibold block mb-2">Notes:</span>
                      <p className="text-muted-foreground">{formData.notes}</p>
                    </div>
                  )}
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Important:</strong> You will receive a confirmation
                    email shortly after booking. Please arrive 10 minutes early
                    for your first appointment to complete necessary paperwork.
                    If you don't receive the confirmation, please check your
                    spam folder or contact us at{" "}
                    <a
                      href="mailto:contact@cloud9pt.com"
                      className="text-primary hover:underline"
                    >
                      contact@cloud9pt.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
              )}
              {currentStep < 4 ? (
                <Button
                  onClick={handleNext}
                  className="ml-auto gap-2 shadow-ocean"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="ml-auto gap-2 shadow-ocean"
                >
                  Confirm Appointment
                  <Check className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Need Help Section */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Need help or have questions?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+13177343430"
                className="text-primary hover:text-secondary transition-smooth font-medium"
              >
                Call: (317) 734-3430
              </a>
              <span className="text-muted-foreground hidden sm:block">|</span>
              <a
                href="tel:+13177343376"
                className="text-primary hover:text-secondary transition-smooth font-medium"
              >
                Fax: (317) 734-3376
              </a>
              <span className="text-muted-foreground hidden sm:block">|</span>
              <a
                href="mailto:contact@cloud9pt.com"
                className="text-primary hover:text-secondary transition-smooth font-medium"
              >
                Email Us: contact@cloud9pt.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
