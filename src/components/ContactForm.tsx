
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, User, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Form submitted successfully!",
        description: "Our healthcare professionals will contact you shortly.",
      });
      setFormData({ name: "", email: "", phone: "" });
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md shadow-lg border-t-4 border-t-healthcare-600 animate-fade-in">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-healthcare-800">Contact Us</CardTitle>
        <CardDescription className="text-center">
          Fill out the form below and our healthcare professionals will reach out to you
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4 text-healthcare-600" /> Your Name
            </Label>
            <div className="relative">
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="pl-3 focus-visible:ring-healthcare-500"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-healthcare-600" /> Email Address
            </Label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="pl-3 focus-visible:ring-healthcare-500"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-healthcare-600" /> Phone Number
            </Label>
            <div className="relative">
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your contact number"
                value={formData.phone}
                onChange={handleChange}
                className="pl-3 focus-visible:ring-healthcare-500"
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-healthcare-600 hover:bg-healthcare-700 transition-all flex items-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>Processing...</>
            ) : (
              <>
                <Send className="h-4 w-4" /> Submit Request
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
