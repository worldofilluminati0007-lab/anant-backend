import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, Check, X } from "lucide-react";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  problem: z.string().min(10, "Please describe your issue (at least 10 characters)"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  diseaseTitle?: string;
}

export default function BookingModal({ open, onOpenChange, diseaseTitle }: BookingModalProps) {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      problem: "",
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      return await apiRequest("POST", "/api/consultations", {
        patientName: data.name,
        email: data.email,
        contactNumber: data.mobile,
        healthConcern: `${diseaseTitle ? `Condition: ${diseaseTitle} - ` : ""}${data.problem}`,
        preferredTime: "flexible",
      });
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Consultation Booked Successfully!",
        description: "We will contact you shortly to confirm your appointment.",
      });
      setTimeout(() => {
        form.reset();
        setIsSubmitted(false);
        onOpenChange(false);
      }, 2000);
    },
    onError: () => {
      toast({
        title: "Booking Failed",
        description: "There was an error booking your consultation. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    bookingMutation.mutate(data);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!bookingMutation.isPending) {
      form.reset();
      setIsSubmitted(false);
      onOpenChange(newOpen);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md" data-testid="dialog-booking-modal">
        <DialogHeader>
          <DialogTitle className="text-2xl" data-testid="dialog-title">
            Book Your Consultation
          </DialogTitle>
          <DialogDescription data-testid="dialog-description">
            {diseaseTitle ? `For ${diseaseTitle}` : "Tell us about your health concern"}
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4" data-testid="success-state">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Booking Confirmed!</h3>
            <p className="text-center text-muted-foreground">
              We've received your consultation request. Our team will contact you shortly.
            </p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="booking-form">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        className="h-10"
                        data-testid="input-name"
                        disabled={bookingMutation.isPending}
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
                    <FormLabel className="font-semibold">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        {...field}
                        className="h-10"
                        data-testid="input-email"
                        disabled={bookingMutation.isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Mobile Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="10-digit mobile number"
                        {...field}
                        className="h-10"
                        data-testid="input-mobile"
                        disabled={bookingMutation.isPending}
                        maxLength={10}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="problem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Describe Your Issue</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please describe your health concern or symptoms in detail..."
                        {...field}
                        className="min-h-[100px] resize-none"
                        data-testid="textarea-problem"
                        disabled={bookingMutation.isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full gap-2"
                disabled={bookingMutation.isPending}
                data-testid="button-submit-booking"
              >
                {bookingMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Booking...
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    Book Consultation
                  </>
                )}
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
