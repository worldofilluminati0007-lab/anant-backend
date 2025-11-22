import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SiWhatsapp } from "react-icons/si";
import { Calendar, Clock, Phone } from "lucide-react";
import { insertConsultationSchema, type InsertConsultation } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function BookingForm() {
  const { toast } = useToast();

  const form = useForm<InsertConsultation>({
    resolver: zodResolver(insertConsultationSchema),
    defaultValues: {
      patientName: "",
      contactNumber: "",
      email: "",
      preferredTime: "",
      healthConcern: "",
    },
  });

  const createConsultationMutation = useMutation({
    mutationFn: async (data: InsertConsultation) => {
      return await apiRequest("POST", "/api/consultations", data);
    },
    onSuccess: (_, data) => {
      const whatsappMessage = `Hello, I would like to book a consultation.
    
Name: ${data.patientName}
Contact: ${data.contactNumber}
Email: ${data.email}
Preferred Time: ${data.preferredTime}
Health Concern: ${data.healthConcern}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/919999999999?text=${encodedMessage}`;
      
      window.open(whatsappUrl, "_blank");
      
      toast({
        title: "Booking Request Submitted",
        description: "We've received your consultation request. Opening WhatsApp to confirm your booking.",
      });
      
      form.reset();
    },
    onError: () => {
      toast({
        title: "Booking Failed",
        description: "There was an error submitting your booking. Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertConsultation) => {
    createConsultationMutation.mutate(data);
  };

  return (
    <section id="booking" className="py-16 md:py-24" data-testid="section-booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="text-booking-title">
            Book Your Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-booking-subtitle">
            Start your journey to wellness today. Fill out the form below and we'll connect with you via WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="p-8" data-testid="card-booking-form">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="patientName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          {...field} 
                          data-testid="input-patient-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="10-digit mobile number" 
                          {...field}
                          data-testid="input-contact-number"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com" 
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Consultation Time *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-preferred-time">
                            <SelectValue placeholder="Select a time slot" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                          <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="healthConcern"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Health Concern *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please describe your health concern or symptoms..."
                          className="min-h-[120px] resize-none"
                          {...field}
                          data-testid="textarea-health-concern"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full gap-2 text-lg"
                  size="lg"
                  disabled={createConsultationMutation.isPending}
                  data-testid="button-submit-booking"
                >
                  <SiWhatsapp className="w-5 h-5" />
                  {createConsultationMutation.isPending ? "Submitting..." : "Book via WhatsApp"}
                </Button>
              </form>
            </Form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6" data-testid="card-contact-info">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Phone className="w-6 h-6 text-primary" />
                Contact Information
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-foreground">Phone:</strong> +91 99999 99999</p>
                <p><strong className="text-foreground">Email:</strong> info@anantarogyasadan.com</p>
                <p><strong className="text-foreground">Registration:</strong> HC-REG-2024-XXXX</p>
              </div>
            </Card>

            <Card className="p-6" data-testid="card-clinic-hours">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                Clinic Hours
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Monday - Saturday:</strong> 9:00 AM - 7:00 PM</p>
                <p><strong className="text-foreground">Sunday:</strong> 10:00 AM - 2:00 PM</p>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5" data-testid="card-why-choose">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Why Choose Us?
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Personalized treatment plans tailored to your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Experienced and certified homoeopathic practitioners</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Convenient online consultations available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Proven track record of successful treatments</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
