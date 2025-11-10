import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
  });
  const location = useLocation();

  const handleAppointmentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
  };

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
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
          name: appointmentData.name,
          email: appointmentData.email,
          phone: appointmentData.phone,
          preferred_date: appointmentData.date,
          preferred_time: appointmentData.time,
          reason: appointmentData.reason,
          subject: 'New Appointment Request - Liver Cure',
          from_name: 'Liver Cure Appointment System',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        setAppointmentData({ name: "", email: "", phone: "", date: "", time: "", reason: "" });
        setTimeout(() => {
          setShowSuccess(false);
          setShowAppointmentModal(false);
        }, 3000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to book appointment. Please call us at 95858 97676');
    } finally {
      setIsSubmitting(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Transplant", path: "/transplant" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/liver-cure-logo.png" 
              alt="Liver Cure Logo" 
              className="h-20 md:h-24 w-auto group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-primary bg-primary-light"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => setShowAppointmentModal(true)}
              className="bg-gradient-hero hover:opacity-90"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-md font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-primary bg-primary-light"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                onClick={() => {
                  setIsOpen(false);
                  setShowAppointmentModal(true);
                }}
                className="bg-gradient-hero hover:opacity-90 w-full"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Appointment Booking Modal */}
      <Dialog open={showAppointmentModal} onOpenChange={setShowAppointmentModal}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-poppins flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              Book Appointment
            </DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll confirm your appointment within 24 hours.
            </DialogDescription>
          </DialogHeader>

          {showSuccess ? (
            <div className="py-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Appointment Request Sent!</h3>
              <p className="text-muted-foreground">
                We'll contact you within 24 hours to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleAppointmentSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="apt-name">Full Name *</Label>
                <Input
                  id="apt-name"
                  name="name"
                  value={appointmentData.name}
                  onChange={handleAppointmentChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="apt-email">Email *</Label>
                  <Input
                    id="apt-email"
                    name="email"
                    type="email"
                    value={appointmentData.email}
                    onChange={handleAppointmentChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apt-phone">Phone *</Label>
                  <Input
                    id="apt-phone"
                    name="phone"
                    type="tel"
                    value={appointmentData.phone}
                    onChange={handleAppointmentChange}
                    placeholder="Phone number"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="apt-date">Preferred Date *</Label>
                  <Input
                    id="apt-date"
                    name="date"
                    type="date"
                    value={appointmentData.date}
                    onChange={handleAppointmentChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apt-time">Preferred Time *</Label>
                  <Input
                    id="apt-time"
                    name="time"
                    type="time"
                    value={appointmentData.time}
                    onChange={handleAppointmentChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="apt-reason">Reason for Visit *</Label>
                <Textarea
                  id="apt-reason"
                  name="reason"
                  value={appointmentData.reason}
                  onChange={handleAppointmentChange}
                  placeholder="Please describe your symptoms or reason for consultation"
                  rows={4}
                  required
                />
              </div>

              <div className="bg-muted/50 p-3 rounded-lg text-sm text-muted-foreground">
                <p className="font-semibold mb-1">Consulting Hours:</p>
                <p>Evening: 5:30 pm to 8:30 pm (Monday to Saturday)</p>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-hero hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Book Appointment"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
