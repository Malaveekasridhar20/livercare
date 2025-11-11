import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c8c1bbb9-50c8-42fd-8e0a-67bfcd871056',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: 'New Contact Form Submission - Liver Cure',
          from_name: 'Liver Cure Website',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please call us at 95858 97676 or email livercare.trichy@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Liver Cure Clinic Trichy | Book Appointment | Call: 95858 97676"
        description="Contact Liver Cure Clinic in Trichy. Book appointment with Dr. Kumaragurubaran. Address: D-116, Thillainagar West, Trichy. Evening consultations 5:30-8:30 PM. Call: 95858 97676"
        keywords="liver cure contact, liver clinic trichy contact, book appointment liver cure, liver doctor trichy contact, liver cure phone number, liver cure address, liver cure location, thillainagar liver clinic, liver cure trichy address, liver hospital trichy contact"
        canonical="https://livercureclinic.com/contact"
      />
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?w=1920&h=800&fit=crop"
            alt="Hospital reception and patient care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Get In Touch</h1>
            <p className="text-lg text-primary-foreground/90">
              We're here to answer your questions and schedule your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-poppins font-semibold mb-1">Address</h3>
                      <p className="text-sm text-muted-foreground">
                        No. D-116, 9th Cross West,
                        <br />
                        Thillainagar West, Trichy - 620 018
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-poppins font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+919585897676"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        95858 97676
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-poppins font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:livercare.trichy@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        livercare.trichy@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-poppins font-semibold mb-1">Consulting Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Evening: 5:30 pm to 8:30 pm
                        <br />
                        (Monday to Saturday)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-soft">
                <CardContent className="p-8">
                  {showSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-semibold text-green-800">Message Sent Successfully!</p>
                        <p className="text-sm text-green-700">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}
                  <h2 className="text-2xl font-poppins font-bold mb-6">
                    Send Us a Message
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your inquiry or appointment request"
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="bg-gradient-hero hover:opacity-90 w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-soft overflow-hidden max-w-6xl mx-auto">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5847!2d78.7025!3d10.8165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50f4c6e1c8d%3A0x1234567890abcdef!2sD-116%2C%209th%20Cross%20W%20St%2C%20West%20Thillai%20Nagar%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620018!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Liver Cure - D-116, 9th Cross West, Thillainagar, Trichy"
              ></iframe>
            </div>
          </Card>
          <div className="text-center mt-6">
            <Button
              asChild
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <a
                href="https://www.google.com/maps/dir//D-116,+9th+Cross+W+St,+West+Thillai+Nagar,+Tiruchirappalli,+Tamil+Nadu+620018"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Get Directions in Google Maps
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
