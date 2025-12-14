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

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

export function QuoteRequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const { toast } = useToast();

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    if (!turnstileToken && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
      toast({
        title: "Verification required",
        description: "Please complete the security check and try again.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch('/api/quote', {
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
        throw new Error(result.error || 'Failed to submit quote request');
      }

      setIsSubmitted(true);
      toast({
        title: "Quote Request Sent!",
        description: "We've received your request and will contact you within 24 hours.",
      });
    } catch (error) {
      console.error('Quote submission error:', error);
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
      <Card className="p-8 sm:p-12 text-center max-w-2xl mx-auto">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Quote Request Received!
        </h3>
        <p className="text-base sm:text-lg text-muted-foreground mb-8">
          Thank you for your interest. We&apos;ll review your requirements and contact
          you within 24 hours with a detailed quote.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setTurnstileToken(null);
            turnstileRef.current?.reset();
            form.reset();
          }}
          variant="outline"
          data-testid="button-submit-another"
        >
          Submit Another Request
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    {...field}
                    data-testid="input-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0400 000 000"
                    {...field}
                    data-testid="input-phone"
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
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
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
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your project..."
                    className="min-h-24"
                    {...field}
                    data-testid="textarea-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
            data-testid="button-submit-quote"
          >
            {form.formState.isSubmitting ? "Submitting..." : "Get Free Quote"}
          </Button>
        </form>
      </Form>
    </Card>
  );
}
