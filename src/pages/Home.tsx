import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, ChevronRight, Star, Heart, Users, Stethoscope, Phone, MapPin, Mail, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import AppointmentModal from "@/components/AppointmentModal";

const Home = () => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const benefits = [
    {
      icon: Stethoscope,
      title: "Expert Hepatologist",
      description: "Dr. S. Kumaragurubaran MD, DM - Leading liver specialist in Trichy with extensive experience.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Heart,
      title: "Comprehensive Care",
      description: "Complete liver treatment from diagnosis to recovery with personalized care plans.",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Evening consultations and flexible scheduling designed around your needs.",
      color: "bg-green-50 text-green-600"
    },
  ];

  const services = [
    {
      title: "Hepatitis Treatment",
      description: "Expert care for Hepatitis A, B, C with latest antiviral therapies and monitoring.",
      features: ["Antiviral therapy", "Regular monitoring", "Prevention counseling"]
    },
    {
      title: "Liver Cirrhosis Care",
      description: "Advanced management of cirrhosis complications and transplant evaluation.",
      features: ["Ascites treatment", "Nutritional support", "Transplant evaluation"]
    },
    {
      title: "Fatty Liver Treatment",
      description: "Comprehensive NAFLD/NASH treatment with lifestyle and medical management.",
      features: ["Weight management", "Diabetes control", "Liver monitoring"]
    },
    {
      title: "Liver Transplant Consultation",
      description: "Complete transplant evaluation and coordination with leading centers.",
      features: ["Pre-transplant care", "Donor coordination", "Post-transplant follow-up"]
    },
    {
      title: "Liver Cancer Treatment",
      description: "Multidisciplinary approach to liver cancer with early detection protocols.",
      features: ["HCC screening", "Treatment planning", "Oncology coordination"]
    },
    {
      title: "Pediatric Liver Care",
      description: "Specialized liver care for children with family-centered approach.",
      features: ["Neonatal jaundice", "Pediatric hepatitis", "Growth monitoring"]
    }
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
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean & Modern */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                  🏥 Best Liver Hospital in Trichy
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-primary">Liver Cure</span>
                  <br />
                  Expert Liver Care
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Premier liver hospital in Trichy offering comprehensive liver treatment, 
                  liver transplant services, and expert hepatology care by Dr. S. Kumaragurubaran MD, DM.
                </p>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">Evening Hours</p>
                    <p className="text-sm text-gray-600">5:30 PM - 8:30 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">Call Now</p>
                    <p className="text-sm text-gray-600">95858 97676</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-sm text-gray-600">Thillainagar, Trichy</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setShowAppointmentModal(true)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-lg transition-all"
                >
                  <a href="tel:+919585897676">Call Now</a>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Dr. S. Kumaragurubaran - Best Liver Specialist in Trichy"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Dr. S. Kumaragurubaran</p>
                    <p className="text-sm text-gray-600">MD, DM (Hepatology)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Clean Design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Liver Cure?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class liver care at Trichy's premier hepatology center
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${benefit.color}`}>
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section - Clean Profile */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-[400px] lg:h-auto overflow-hidden">
                  <img
                    src="/doctor-kumaragurubaran.jpg"
                    alt="Dr. S. Kumaragurubaran - Best Liver Specialist in Trichy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
                        Leading Hepatologist in Trichy
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Dr. S. Kumaragurubaran
                      </h2>
                      <p className="text-lg text-primary font-semibold mb-2">
                        MD, DM (Hepatology), FPIC
                      </p>
                      <p className="text-gray-600">
                        Consultant Hepatologist & Liver Transplant Physician
                      </p>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      With extensive expertise in hepatology and liver transplant medicine, Dr. Kumaragurubaran 
                      provides personalized care for all liver conditions. His patient-centered approach and 
                      commitment to excellence make him the trusted choice for liver care in Trichy.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-primary">15+</p>
                        <p className="text-sm text-gray-600">Years Experience</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-primary">1000+</p>
                        <p className="text-sm text-gray-600">Patients Treated</p>
                      </div>
                    </div>

                    <Button asChild className="bg-primary hover:bg-primary/90 text-white w-fit">
                      <Link to="/about">Learn More About Dr. Kumaragurubaran</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials - Clean Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Patient Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from patients who found healing at Liver Cure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Modern Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Liver Treatment Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert liver care for all conditions at Trichy's leading hepatology center
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Clean & Organized */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert answers about liver care and treatment from Dr. S. Kumaragurubaran
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Who is the best liver specialist in Trichy?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. S. Kumaragurubaran MD, DM (Hepatology) is the leading liver specialist in Trichy, 
                  providing expert care for all liver diseases with years of experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What are the consultation timings?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Evening consultations from 5:30 PM to 8:30 PM, Monday to Saturday. 
                  Call +91-95858-97676 to book your appointment.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Where is Liver Cure located?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Located at Thillainagar West, Trichy - easily accessible from all parts of the city 
                  with ample parking facilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Do you provide liver transplant services?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, we provide comprehensive liver transplant consultation, evaluation, 
                  and coordination with leading transplant centers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean & Simple */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-white/90 text-xl mb-8 leading-relaxed">
              Book your consultation with Dr. S. Kumaragurubaran and experience expert liver care at Trichy's premier hepatology center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setShowAppointmentModal(true)}
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg"
              >
                Book Appointment Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg"
              >
                <a href="tel:+919585897676">Call: 95858 97676</a>
              </Button>
            </div>
            
            {/* Quick Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3 text-white/90">
                <Clock className="h-5 w-5" />
                <span>Evening: 5:30 PM - 8:30 PM</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white/90">
                <MapPin className="h-5 w-5" />
                <span>Thillainagar, Trichy</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white/90">
                <Mail className="h-5 w-5" />
                <span>livercare.trichy@gmail.com</span>
              </div>
            </div>
          </div>
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
