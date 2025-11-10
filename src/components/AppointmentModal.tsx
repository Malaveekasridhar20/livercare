import { useState } from "react";
import { Calendar, CheckCircle } from "lucide-react";
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

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
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
          onClose();
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={appointmentData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={appointmentData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={appointmentData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date *</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={appointmentData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time *</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={appointmentData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Visit *</Label>
              <Textarea
                id="reason"
                name="reason"
                value={appointmentData.reason}
                onChange={handleChange}
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
  );
};

export default AppointmentModal;
