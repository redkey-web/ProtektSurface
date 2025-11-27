'use client';

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function SimpleContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Check for Turnstile token if configured
    if (!turnstileToken && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
      toast({
        title: "Verification required",
        description: "Please complete the security check and try again.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          turnstileToken,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        turnstileRef.current?.reset();
        setTurnstileToken(null);
        throw new Error(result.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
    } catch (error) {
      console.error('Contact submission error:', error);
      turnstileRef.current?.reset();
      setTurnstileToken(null);
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again or call us directly.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 sm:p-12 text-center">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Message Sent!
        </h3>
        <p className="text-base sm:text-lg text-muted-foreground mb-8">
          Thank you for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setTurnstileToken(null);
            turnstileRef.current?.reset();
            form.reset();
          }}
          variant="outline"
          data-testid="button-send-another"
        >
          Send Another Message
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Smith"
                    {...field}
                    data-testid="input-contact-name"
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
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                    data-testid="input-contact-email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="How can we help you?"
                    className="min-h-32"
                    {...field}
                    data-testid="textarea-contact-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Cloudflare Turnstile Widget */}
          {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
            <div className="flex justify-center">
              <Turnstile
                ref={turnstileRef}
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                onSuccess={(token) => setTurnstileToken(token)}
                onError={() => {
                  setTurnstileToken(null);
                  toast({
                    title: "Verification failed",
                    description: "Please refresh the page and try again.",
                    variant: "destructive",
                  });
                }}
                onExpire={() => setTurnstileToken(null)}
                options={{
                  theme: 'auto',
                  size: 'normal',
                }}
              />
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={form.formState.isSubmitting}
            data-testid="button-submit-contact"
          >
            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </Card>
  );
}
