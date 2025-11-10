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
              Liver Cure - Best Liver Hospital in Trichy
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-white italic">
              Expert Liver Care & Treatment | Liver Transplant Services
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              🏥 Hospital in Trichy for all liver diseases | Expert liver care by Dr. S. Kumaragurubaran MD, DM | ✅ Liver Transplant ✅ Book Appointment ✅ Evening Consultations
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
              Expert Liver Care & Treatment - Hospital in Trichy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Best liver hospital in Trichy offering expert liver care, liver transplant services, and comprehensive treatment for all liver diseases. Book appointment today!
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
                      Dr. S. Kumaragurubaran - Expert Liver Care
                    </h2>
                    <p className="text-lg text-primary font-semibold mb-1">
                      MBBS, MD, DM (Hepatology), FPIC
                    </p>
                    <p className="text-muted-foreground">
                      Best Liver Transplant Specialist - Hospital in Trichy
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
              Liver Transplant & Treatment Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from patients who received expert liver care and liver transplant services at our hospital in Trichy.
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

      {/* Comprehensive Liver Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Comprehensive Liver Treatment Services at Best Hospital in Trichy
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Liver Cure offers complete liver care services including expert treatment for all liver diseases, 
              advanced liver transplant consultation, and specialized hepatology care in Trichy, Tamil Nadu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft hover-lift transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3 text-primary">
                  Hepatitis Treatment & Care
                </h3>
                <p className="text-muted-foreground mb-4">
                  Expert treatment for Hepatitis A, B, C, and other viral hepatitis conditions. Our hepatologist 
                  Dr. Kumaragurubaran provides comprehensive hepatitis care with latest antiviral therapies and 
                  monitoring protocols for complete recovery.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Hepatitis B & C treatment</li>
                  <li>• Antiviral therapy management</li>
                  <li>• Regular monitoring & follow-up</li>
                  <li>• Prevention counseling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover-lift transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3 text-primary">
                  Liver Cirrhosis Management
                </h3>
                <p className="text-muted-foreground mb-4">
                  Advanced treatment for liver cirrhosis including complications management, ascites treatment, 
                  and liver transplant evaluation. Our expert care helps slow disease progression and improve 
                  quality of life for cirrhosis patients.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cirrhosis staging & assessment</li>
                  <li>• Ascites & edema management</li>
                  <li>• Nutritional counseling</li>
                  <li>• Transplant evaluation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover-lift transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3 text-primary">
                  Fatty Liver Disease Treatment
                </h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive treatment for fatty liver disease (NAFLD/NASH) including lifestyle modification, 
                  dietary counseling, and medical management. Early intervention helps prevent progression to 
                  cirrhosis and liver failure.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• NAFLD/NASH treatment</li>
                  <li>• Weight management programs</li>
                  <li>• Diabetes control</li>
                  <li>• Regular liver monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover-lift transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3 text-primary">
                  Liver Transplant Consultation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Expert liver transplant evaluation and consultation services. Dr. Kumaragurubaran provides 
                  comprehensive assessment for liver transplant candidacy, pre-transplant care, and coordination 
                  with leading transplant centers.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Transplant evaluation</li>
                  <li>• Pre-transplant optimization</li>
                  <li>• Donor coordination</li>
                  <li>• Post-transplant follow-up</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover-lift transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3 text-primary">
                  Liver Cancer Treatment
                </h3>
                <p className="text-muted-foreground mb-4">
                  Advanced treatment options for liver cancer including hepatocellular carcinoma (HCC). 
                  Comprehensive cancer care with multidisciplinary approach, early detection protocols, 
                  and coordination with oncology specialists.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• HCC screening & diagnosis</li>
                  <li>• Staging & treatment planning</li>
                  <li>• Ablation therapy coordination</li>
                  <li>• Palliative care support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover-lift transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3 text-primary">
                  Pediatric Liver Care
                </h3>
                <p className="text-muted-foreground mb-4">
                  Specialized liver care for children including jaundice in newborns, pediatric hepatitis, 
                  Wilson's disease, and other childhood liver conditions. Family-centered care with 
                  age-appropriate treatment approaches.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Neonatal jaundice treatment</li>
                  <li>• Pediatric hepatitis care</li>
                  <li>• Wilson's disease management</li>
                  <li>• Growth & development monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Liver Cure - Detailed */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Why Liver Cure is the Best Liver Hospital in Trichy
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Liver Cure stands as the premier liver hospital in Trichy, offering world-class hepatology services 
              with a patient-centered approach. Our commitment to excellence makes us the top choice for liver care in Tamil Nadu.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-poppins font-semibold mb-6 text-primary">
                Expert Hepatologist Dr. S. Kumaragurubaran
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Dr. S. Kumaragurubaran brings extensive expertise in hepatology and liver transplant medicine to Trichy. 
                With his MD, DM (Hepatology) qualifications and years of experience treating complex liver diseases, 
                he provides personalized care for each patient. His expertise covers all aspects of liver diseases 
                from simple fatty liver to complex liver transplant evaluations.
              </p>
              
              <h3 className="text-2xl font-poppins font-semibold mb-6 text-primary">
                Advanced Liver Treatment Facilities
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our hospital in Trichy is equipped with state-of-the-art diagnostic and treatment facilities for 
                comprehensive liver care. From advanced imaging systems for accurate diagnosis to modern treatment 
                protocols, we ensure every patient receives the highest standard of liver care available in Tamil Nadu.
              </p>

              <h3 className="text-2xl font-poppins font-semibold mb-6 text-primary">
                Convenient Evening Consultations
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Understanding the busy schedules of our patients, Liver Cure offers convenient evening consultations 
                from 5:30 PM to 8:30 PM, Monday through Saturday. This flexibility allows working professionals and 
                families to access expert liver care without disrupting their daily routines. Book your appointment 
                today by calling 95858 97676.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-poppins font-semibold text-lg mb-2">Comprehensive Liver Care</h4>
                  <p className="text-muted-foreground">
                    From routine liver function tests to complex liver transplant evaluations, we provide 
                    complete liver care services under one roof at our Trichy hospital.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-poppins font-semibold text-lg mb-2">Patient-Centered Approach</h4>
                  <p className="text-muted-foreground">
                    Every treatment plan is personalized based on individual patient needs, ensuring 
                    optimal outcomes and improved quality of life for all liver disease patients.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-poppins font-semibold text-lg mb-2">Latest Treatment Protocols</h4>
                  <p className="text-muted-foreground">
                    We follow international guidelines and latest evidence-based treatment protocols 
                    to ensure our patients receive the most effective liver care available.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-poppins font-semibold text-lg mb-2">Accessible Location in Trichy</h4>
                  <p className="text-muted-foreground">
                    Conveniently located in Thillainagar, Trichy, our hospital is easily accessible 
                    from all parts of the city and surrounding areas in Tamil Nadu.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-foreground mb-6">
            Book Appointment - Best Liver Care Treatment
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Expert liver care team at the best hospital in Trichy. All liver diseases treated with advanced liver transplant services.
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
