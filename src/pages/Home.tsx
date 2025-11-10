import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, ChevronRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import AppointmentModal from "@/components/AppointmentModal";

const Home = () => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const benefits = [
    {
      icon: Shield,
      title: "Expert Specialists",
      description: "Board-certified hepatologists with decades of combined experience in liver care.",
    },
    {
      icon: Award,
      title: "Advanced Facilities",
      description: "State-of-the-art diagnostic and surgical equipment for precise treatment.",
    },
    {
      icon: Clock,
      title: "24×7 Care",
      description: "Round-the-clock emergency services and dedicated patient support.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      condition: "Liver Transplant Patient",
      quote: "The team at Liver Cure gave me a second chance at life. Their expertise and compassion made all the difference.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      condition: "Hepatitis C Treatment",
      quote: "From diagnosis to recovery, the care was exceptional. I'm forever grateful for their dedication.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      condition: "Liver Cirrhosis Management",
      quote: "World-class treatment with a personal touch. They truly care about their patients' well-being.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Doctor and patient smiling in modern hospital"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 leading-tight">
              Liver Cure
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-white italic">
              Heal the liver, restore life!
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Specialised Liver Clinic - Expert care by Dr. S. Kumaragurubaran, MD., DM (Hepatology), Consultant Hepatologist & Liver Transplant Physician
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setShowAppointmentModal(true)}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
              >
                Book Appointment
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Why Choose Liver Cure?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge medical technology with compassionate care to deliver exceptional outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-0 shadow-soft hover-lift hover:shadow-medium transition-all"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-6">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-medium overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 relative h-[300px] lg:h-auto overflow-hidden">
                  <img
                    src="/doctor-kumaragurubaran.jpg"
                    alt="Dr. S. Kumaragurubaran"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20"></div>
                </div>
                <CardContent className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <h2 className="text-3xl font-poppins font-bold text-foreground mb-2">
                      Dr. S. Kumaragurubaran
                    </h2>
                    <p className="text-lg text-primary font-semibold mb-1">
                      MBBS, MD, DM (Hepatology), FPIC
                    </p>
                    <p className="text-muted-foreground">
                      Consultant Hepatologist & Liver Transplant Physician
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A dedicated specialist committed to providing compassionate, patient-centric care 
                    with expertise in diagnosing and treating all liver-related conditions. With comprehensive 
                    training and a focus on the latest medical advancements, Dr. Kumaragurubaran ensures 
                    personalized treatment for every patient.
                  </p>
                  <Button asChild className="bg-gradient-hero hover:opacity-90 w-fit">
                    <Link to="/about">Learn More About Our Expert</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Patient Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from real patients who found hope and healing at Liver Cure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift transition-all">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-poppins font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-foreground mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Our expert team is here to provide you with the care and support you deserve.
          </p>
          <Button
            onClick={() => setShowAppointmentModal(true)}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
          >
            Schedule a Consultation <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={showAppointmentModal} 
        onClose={() => setShowAppointmentModal(false)} 
      />
    </div>
  );
};

export default Home;
