import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClipboardCheck, Scissors, HeartPulse, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AppointmentModal from "@/components/AppointmentModal";
import SEO from "@/components/SEO";

const Transplant = () => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const timeline = [
    {
      icon: ClipboardCheck,
      title: "Evaluation",
      description: "Comprehensive medical assessment and transplant eligibility review.",
    },
    {
      icon: Scissors,
      title: "Surgery",
      description: "Expert surgical team performs the transplant procedure.",
    },
    {
      icon: HeartPulse,
      title: "Recovery",
      description: "Intensive post-operative care and monitoring in specialized units.",
    },
    {
      icon: Users,
      title: "Support",
      description: "Lifelong follow-up care and patient support programs.",
    },
  ];

  const successStories = [
    {
      name: "Amit Singh",
      age: 45,
      story:
        "After years of liver disease, I received a new liver at Liver Cure. The care was exceptional, and I'm now living a full, healthy life with my family.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Lakshmi Reddy",
      age: 38,
      story:
        "The transplant team saved my life. Their expertise and compassion during the entire process gave me hope and a second chance.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
  ];

  const faqs = [
    {
      question: "Who is eligible for a liver transplant?",
      answer:
        "Patients with end-stage liver disease, acute liver failure, or certain liver cancers may be eligible. Our team conducts thorough evaluations to determine candidacy based on medical history, overall health, and disease severity.",
    },
    {
      question: "How long is the waiting period?",
      answer:
        "Wait times vary based on blood type, disease severity, and donor availability. We work closely with national organ networks to minimize wait times and keep patients informed throughout the process.",
    },
    {
      question: "What is the success rate?",
      answer:
        "Our transplant program has a success rate exceeding 90% for one-year survival. Long-term outcomes depend on various factors including patient compliance with medications and follow-up care.",
    },
    {
      question: "What happens after the transplant?",
      answer:
        "Post-transplant care includes immediate ICU monitoring, regular follow-ups, immunosuppressive medications, and ongoing support. Our team provides comprehensive guidance for recovery and long-term health maintenance.",
    },
    {
      question: "Can family members be donors?",
      answer:
        "Yes, living donor transplants are possible when a healthy family member or friend donates a portion of their liver. We thoroughly evaluate potential donors to ensure their safety and compatibility.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Liver Transplant Consultation in Trichy | Expert Guidance | Liver Cure Clinic"
        description="Expert liver transplant consultation in Trichy by Dr. Kumaragurubaran MD, DM. Comprehensive evaluation, pre & post-transplant care. 100+ successful transplant consultations. Call: 95858 97676"
        keywords="liver transplant trichy, liver transplant consultation trichy, liver transplant doctor trichy, liver transplant specialist trichy, liver transplant evaluation trichy, pre transplant care trichy, post transplant care trichy, liver transplant surgeon trichy, best liver transplant doctor trichy"
        canonical="https://livercureclinic.com/transplant"
      />
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1920&h=800&fit=crop"
            alt="Medical surgery and operating room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Liver Transplant Program
            </h1>
            <p className="text-lg text-primary-foreground/90">
              A comprehensive transplant program offering hope, expertise, and exceptional care every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Your Transplant Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From initial evaluation to lifelong support, we're with you every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {timeline.map((step, index) => (
              <div key={index} className="relative">
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-light -z-10"></div>
                )}
                <Card className="border-0 shadow-soft hover-lift text-center h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-4 mx-auto">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground flex-grow">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real patients sharing their transformative experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-poppins font-semibold">{story.name}</h3>
                      <p className="text-sm text-muted-foreground">Age {story.age}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{story.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to common questions about liver transplants.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-0 shadow-soft rounded-lg px-6"
                >
                  <AccordionTrigger className="font-poppins font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Ready to Learn More About Our Transplant Program?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our transplant coordinators are available to answer your questions and guide you through the process.
          </p>
          <Button
            onClick={() => setShowAppointmentModal(true)}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            Contact Our Team
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

export default Transplant;
