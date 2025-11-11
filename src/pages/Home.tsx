import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, ChevronRight, Star, Users, Calendar, TrendingUp, Heart, Stethoscope, Activity, AlertCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import AppointmentModal from "@/components/AppointmentModal";
import SEO from "@/components/SEO";

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "", shouldStart }: { value: number; suffix?: string; shouldStart: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * value);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value); // Ensure we end at exact value
      }
    };
    
    requestAnimationFrame(animate);
  }, [value, shouldStart]);

  return <span>{count}{suffix}</span>;
};

const Home = () => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const benefits = [
    {
      icon: Shield,
      title: "Expert Specialists",
      description: "Board-certified hepatologists with decades of experience.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Award,
      title: "Advanced Facilities",
      description: "State-of-the-art diagnostic and surgical equipment.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: Clock,
      title: "24×7 Care",
      description: "Round-the-clock emergency services and support.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center"
    },
  ];

  const statistics = [
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Lives Transformed"
    },
    {
      icon: Calendar,
      value: 15,
      suffix: "+",
      label: "Years of Excellence"
    },
    {
      icon: TrendingUp,
      value: 95,
      suffix: "%",
      label: "Success Rate"
    },
    {
      icon: Heart,
      value: 100,
      suffix: "+",
      label: "Transplants"
    },
  ];

  const services = [
    {
      icon: Heart,
      title: "Liver Transplant",
      description: "Advanced transplant procedures with comprehensive care.",
      link: "/transplant",
      highlight: "Life-saving",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Stethoscope,
      title: "Hepatitis Treatment",
      description: "Complete hepatitis B & C treatment with latest therapies.",
      link: "/services",
      highlight: "Cure available",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: Activity,
      title: "Liver Cancer Care",
      description: "Comprehensive cancer treatment with modern technology.",
      link: "/services",
      highlight: "Advanced care",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: AlertCircle,
      title: "Emergency Services",
      description: "24/7 emergency liver care with immediate response.",
      link: "/contact",
      highlight: "24×7 available",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop&crop=center"
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
      <SEO 
        title="Liver Cure Clinic | Best Liver Hospital in Trichy | Dr. Kumaragurubaran MD DM"
        description="Liver Cure Clinic - #1 Best Liver Hospital in Trichy by Dr. Kumaragurubaran MD, DM. Expert treatment for Hepatitis, Cirrhosis, Fatty Liver, Liver Cancer & Transplant. Evening consultations 5:30-8:30 PM. Call: 95858 97676"
        keywords="liver cure, liver cure clinic, best liver hospital in trichy, liver specialist trichy, hepatologist trichy, Dr Kumaragurubaran, liver treatment trichy, hepatitis treatment trichy, cirrhosis treatment trichy, fatty liver treatment trichy, liver transplant trichy"
        canonical="https://livercureclinic.com/"
      />
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Best Liver Hospital in Trichy - Liver Cure Clinic with Dr. Kumaragurubaran"
            className="w-full h-full object-cover object-center"
            width="1920"
            height="700"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4 sm:mb-6 leading-tight">
              Best Liver Hospital in Trichy
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 leading-relaxed">
              Expert Liver Care & Transplant Services by Dr. S. Kumaragurubaran MD, DM
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                onClick={() => setShowAppointmentModal(true)}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold w-full sm:w-auto text-base sm:text-lg py-6 sm:py-3"
              >
                Book Appointment
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto text-base sm:text-lg py-6 sm:py-3"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-3 sm:mb-4">
              Proven Results
            </h2>
            <p className="text-white/90 text-base sm:text-lg">Excellence in Liver Care & Treatment</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {statistics.map((stat, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105 hover:shadow-2xl">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-2 sm:mb-3 tracking-tight">
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix} 
                      shouldStart={statsVisible} 
                    />
                  </div>
                  
                  {/* Label */}
                  <div className="text-white/90 font-poppins font-medium text-xs sm:text-sm md:text-base px-2">
                    {stat.label}
                  </div>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-1 bg-white/30 rounded-full group-hover:w-20 sm:group-hover:w-24 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Comprehensive liver care with advanced treatment options
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift transition-all group overflow-hidden h-full flex flex-col">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - Liver Cure Clinic Trichy`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width="400"
                    height="250"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-secondary text-white text-xs font-semibold rounded-full shadow-lg">
                      {service.highlight}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-poppins font-semibold mb-2 sm:mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                    {service.description}
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all text-sm">
                    <Link to={service.link}>
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Experience excellence in liver care with our expert team
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift transition-all group bg-white h-full">
                <CardContent className="p-6 sm:p-8 text-center flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <benefit.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-poppins font-semibold text-foreground mb-3 sm:mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-medium overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2 relative h-[250px] sm:h-[300px] lg:h-auto overflow-hidden">
                  <img
                    src="/doctor-kumaragurubaran.jpg"
                    alt="Dr. S. Kumaragurubaran MD DM - Best Liver Specialist in Trichy"
                    className="w-full h-full object-cover object-center"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20"></div>
                </div>
                <CardContent className="lg:col-span-3 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-bold text-foreground mb-2 sm:mb-3">
                      Dr. S. Kumaragurubaran - Expert Liver Care
                    </h2>
                    <p className="text-base sm:text-lg text-primary font-semibold mb-1 sm:mb-2">
                      MBBS, MD, DM (Hepatology), FPIC
                    </p>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Best Liver Transplant Specialist - Hospital in Trichy
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                    Dedicated specialist providing compassionate, patient-centric care with expertise in all liver conditions. 
                    Personalized treatment with latest medical advancements.
                  </p>
                  <Button asChild className="bg-gradient-hero hover:opacity-90 w-full sm:w-fit text-sm sm:text-base">
                    <Link to="/about">Learn More About Our Expert</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
              Patient Success Stories
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Real experiences from our patients who trusted us with their care
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft hover-lift transition-all h-full">
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="flex mb-4 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm sm:text-base mb-6 italic leading-relaxed flex-1">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-poppins font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">{testimonial.condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-primary-foreground mb-4 sm:mb-6">
            Book Your Appointment Today
          </h2>
          <p className="text-primary-foreground/90 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Expert liver care team ready to help you with advanced treatment options.
          </p>
          <Button
            onClick={() => setShowAppointmentModal(true)}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold w-full sm:w-auto text-base sm:text-lg py-6 sm:py-3 px-6 sm:px-8"
          >
            Schedule a Consultation <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
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
