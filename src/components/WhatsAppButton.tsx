import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919585897676";
  const message = "Hello! I'd like to know more about Liver Cure's services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-secondary rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative flex items-center space-x-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-3 rounded-full shadow-medium transition-all group-hover:scale-105">
          <MessageCircle className="h-6 w-6" />
          <span className="hidden md:block font-medium text-sm">Chat with us!</span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
