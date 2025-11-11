import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import {
  Microscope,
  Stethoscope,
  Heart,
  Apple,
  Syringe,
  Activity,
} from "lucide-react";
import AppointmentModal from "@/components/AppointmentModal";
import SEO from "@/components/SEO";

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const services = [
    {
      icon: Stethoscope,
      title: "Jaundice",
      description: "Expert diagnosis and treatment for all types of jaundice.",
      details:
        "Comprehensive evaluation and management of jaundice, including neonatal, hepatic, and obstructive jaundice. We provide accurate diagnosis and effective treatment plans.",
    },
    {
      icon: Activity,
      title: "Viral Hepatitis (B, C, A, E)",
      description: "Specialized care for all types of viral hepatitis infections.",
      details:
        "Advanced antiviral therapies and monitoring for Hepatitis B, C, A, and E. Our treatment protocols follow international guidelines with personalized care plans for optimal outcomes.",
    },
    {
      icon: Microscope,
      title: "Metabolic/Genetic Liver Disorders",
      description: "Expert management of inherited liver conditions.",
      details:
        "Specialized care for Wilson's disease, hemochromatosis, alpha-1 antitrypsin deficiency, and other genetic liver disorders with comprehensive genetic counseling.",
    },
    {
      icon: Syringe,
      title: "Autoimmune Hepatitis",
      description: "Advanced treatment for autoimmune liver diseases.",
      details:
        "Comprehensive management of autoimmune hepatitis, primary biliary cholangitis, and primary sclerosing cholangitis with immunosuppressive therapy and regular monitoring.",
    },
    {
      icon: Apple,
      title: "Fatty Liver Disease",
      description: "Complete care for alcoholic and non-alcoholic fatty liver disease.",
      details:
        "Personalized treatment plans including lifestyle modifications, nutritional counseling, and medical management for both alcoholic and non-alcoholic fatty liver disease.",
    },
    {
      icon: Activity,
      title: "Cirrhosis of Liver",
      description: "Comprehensive management of liver cirrhosis and complications.",
      details:
        "Expert care for cirrhosis including management of ascites, hepatic encephalopathy, variceal bleeding, and other complications with focus on improving quality of life.",
    },
    {
      icon: Heart,
      title: "Liver Cancer",
      description: "Advanced diagnosis and treatment options for liver cancer.",
      details:
        "Multidisciplinary approach to hepatocellular carcinoma including early detection, staging, and treatment options such as ablation, chemoembolization, and transplant evaluation.",
    },
    {
      icon: Stethoscope,
      title: "Pediatric Liver Disorder",
      description: "Specialized care for children with liver conditions.",
      details:
        "Expert management of pediatric liver diseases including biliary atresia, metabolic disorders, and viral hepatitis in children with family-centered care approach.",
    },
    {
      icon: Activity,
      title: "Ascites",
      description: "Treatment and management of fluid accumulation.",
      details:
        "Comprehensive management of ascites including diagnostic paracentesis, diuretic therapy, and treatment of underlying causes with regular monitoring.",
    },
    {
      icon: Microscope,
      title: "Wilson's Disease",
      description: "Specialized treatment for copper metabolism disorder.",
      details:
        "Expert diagnosis and long-term management of Wilson's disease with chelation therapy, zinc supplementation, and regular monitoring of copper levels.",
    },
    {
      icon: Stethoscope,
      title: "Gall Bladder and Biliary Disorder",
      description: "Complete care for gallbladder and bile duct conditions.",
      details:
        "Diagnosis and management of gallstones, cholecystitis, cholangitis, and biliary strictures with medical and interventional treatment options.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Liver Treatment Services in Trichy | Hepatitis, Cirrhosis, Fatty Liver | Liver Cure"
        description="Comprehensive liver treatment services in Trichy: Hepatitis B & C, Cirrhosis, Fatty Liver, Jaundice, Liver Cancer, Autoimmune Hepatitis. Expert care by Dr. Kumaragurubaran. Call: 95858 97676"
        keywords="liver treatment trichy, hepatitis treatment trichy, cirrhosis treatment trichy, fatty liver treatment trichy, jaundice treatment trichy, liver cancer treatment trichy, autoimmune hepatitis trichy, wilson disease treatment, liver services trichy, hepatology services trichy"
        canonical="https://livercureclinic.com/services"
      />
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&h=800&fit=crop"
            alt="Medical consultation and healthcare services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Our Services</h1>
            <p className="text-lg text-primary-foreground/90">
              Comprehensive liver care services designed to meet every patient's unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-soft hover-lift hover:shadow-medium transition-all cursor-pointer"
                onClick={() => setSelectedService(index)}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Learn more →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl">
          {selectedService !== null && (
            <>
              <DialogHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-4">
                  {(() => {
                    const ServiceIcon = services[selectedService].icon;
                    return <ServiceIcon className="h-8 w-8 text-primary" />;
                  })()}
                </div>
                <DialogTitle className="text-2xl font-poppins">
                  {services[selectedService].title}
                </DialogTitle>
                <DialogDescription className="text-base pt-4">
                  {services[selectedService].details}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
                <Button 
                  onClick={() => {
                    setSelectedService(null);
                    setShowAppointmentModal(true);
                  }}
                  className="bg-gradient-hero hover:opacity-90 w-full"
                >
                  Book Consultation
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our specialists are here to help you understand your condition and recommend the best treatment plan.
          </p>
          <Button 
            onClick={() => setShowAppointmentModal(true)}
            size="lg" 
            className="bg-gradient-hero hover:opacity-90"
          >
            Schedule a Consultation
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

export default Services;
