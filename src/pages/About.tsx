import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Microscope, Award, GraduationCap, Languages, Heart } from "lucide-react";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="About Dr. Kumaragurubaran MD DM | Best Liver Specialist in Trichy | Liver Cure Clinic"
        description="Meet Dr. S. Kumaragurubaran MD, DM - Best Liver Specialist & Hepatologist in Trichy. Expert in liver diseases, transplant consultation. 15+ years experience at Liver Cure Clinic."
        keywords="Dr Kumaragurubaran, liver specialist trichy, hepatologist trichy, best liver doctor trichy, liver cure clinic, liver expert trichy, MD DM hepatology, liver transplant specialist trichy, experienced liver doctor, qualified hepatologist trichy"
        canonical="https://livercureclinic.com/about"
      />
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&h=800&fit=crop"
            alt="Modern hospital and medical facility"
            className="w-full h-full object-cover"
            width="1920"
            height="500"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">About Liver Cure</h1>
            <p className="text-2xl text-primary-foreground/90 italic mb-2">
              Heal the liver, restore life!
            </p>
            <p className="text-lg text-primary-foreground/90">
              Specialised Liver Clinic providing comprehensive care for all liver conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-soft hover-lift">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-light rounded-full mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-poppins font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide world-class liver care that combines advanced medical expertise with compassionate treatment, ensuring every patient receives personalized attention and the best possible outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover-lift">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-light rounded-full mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-poppins font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading center for liver care in India, recognized for our clinical excellence, innovative treatments, and patient-centered approach that gives hope to those facing liver disease.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctor Profile - Featured Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Meet Our Expert</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated specialist committed to your liver health and recovery
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-medium overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Doctor Image */}
                <div className="relative h-[400px] lg:h-auto overflow-hidden bg-gradient-hero">
                  <img
                    src="/doctor-kumaragurubaran.jpg"
                    alt="Dr. S. Kumaragurubaran"
                    className="w-full h-full object-cover"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>

                {/* Doctor Info */}
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl font-poppins font-bold text-foreground mb-2">
                      Dr. S. Kumaragurubaran
                    </h3>
                    <p className="text-xl text-primary font-semibold mb-1">
                      MBBS, MD, DM (Hepatology), FPIC
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Consultant Hepatologist & Liver Transplant Physician
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Dr. Kumaragurubaran S is a dedicated Hepatologist based in Trichy, Tamil Nadu, 
                      committed to staying abreast of the latest advancements in hepatology. His expertise 
                      encompasses the diagnosis and treatment of liver-related diseases, offering expert 
                      care for conditions such as hepatitis, fatty liver disease, and cirrhosis.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      With comprehensive education and specialized training, Dr. Kumaragurubaran provides 
                      high-quality, patient-centric care, ensuring each individual receives personalized 
                      attention tailored to their unique health needs.
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Comprehensive Education</p>
                        <p className="text-xs text-muted-foreground">MBBS, MD, DM, FPIC</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Specialized Expertise</p>
                        <p className="text-xs text-muted-foreground">Liver Disease Specialist</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                        <Languages className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Multilingual</p>
                        <p className="text-xs text-muted-foreground">English & Tamil</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Patient-Centric Care</p>
                        <p className="text-xs text-muted-foreground">Personalized Treatment</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Why Choose Dr. Kumaragurubaran?
              </h2>
              <p className="text-muted-foreground">
                Compassionate expertise combined with cutting-edge medical knowledge
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-soft hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold mb-2">Latest Medical Advancements</h4>
                      <p className="text-sm text-muted-foreground">
                        Committed to staying current with the latest developments in hepatology to provide 
                        the most effective treatments available.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold mb-2">Personalized Care Approach</h4>
                      <p className="text-sm text-muted-foreground">
                        Each patient receives individualized attention with treatment plans tailored to 
                        their specific health needs and circumstances.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                      <Languages className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold mb-2">Effective Communication</h4>
                      <p className="text-sm text-muted-foreground">
                        Fluent in English and Tamil, ensuring clear communication with diverse patients 
                        throughout the region.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold mb-2">Comprehensive Liver Care</h4>
                      <p className="text-sm text-muted-foreground">
                        Expert diagnosis and treatment for all liver conditions including hepatitis, 
                        fatty liver disease, cirrhosis, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Procedures */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-6">
                <Microscope className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Diagnostic Procedures
              </h2>
              <p className="text-muted-foreground">
                Advanced diagnostic tools for accurate assessment and treatment planning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-soft hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-4">
                    <Microscope className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-poppins font-semibold text-lg mb-2">Endoscopy</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced endoscopic procedures for diagnosis and treatment of gastrointestinal and liver conditions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-4">
                    <Microscope className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-poppins font-semibold text-lg mb-2">Colonoscopy</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive colonoscopy services for screening and diagnosis of colorectal conditions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-4">
                    <Microscope className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-poppins font-semibold text-lg mb-2">Fibroscan</h4>
                  <p className="text-sm text-muted-foreground">
                    Non-invasive liver stiffness measurement for assessing liver fibrosis and cirrhosis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
