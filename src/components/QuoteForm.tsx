import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ShieldCheck } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+()\-.\s]+$/, "Phone may only contain digits and ()-+."),
  zip: z.string().trim().regex(/^\d{5}$/, "Enter a 5-digit ZIP"),
  age: z.coerce.number().int().min(18, "Must be 18+").max(85, "Max age 85"),
  coverageType: z.string().min(1, "Select a coverage type"),
  coverageAmount: z.string().min(1, "Select a coverage amount"),
});

type FormState = {
  name: string;
  email: string;
  phone: string;
  zip: string;
  age: string;
  coverageType: string;
  coverageAmount: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  zip: "",
  age: "",
  coverageType: "",
  coverageAmount: "",
};

export const QuoteForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    // Simulated submission — replace with real lead endpoint later.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Thanks — we'll be in touch shortly.",
        description: "A licensed BSLU agent will call you within one business day.",
      });
    }, 700);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-card p-8 shadow-elegant text-center space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <ShieldCheck className="h-7 w-7" />
        </div>
        <h3 className="text-2xl font-display font-semibold">You're all set, {form.name.split(" ")[0]}.</h3>
        <p className="text-muted-foreground">
          A licensed agent will reach out within one business day at{" "}
          <span className="text-foreground font-medium">{form.phone}</span>.
        </p>
        <p className="text-sm text-muted-foreground">
          Need help sooner? Call{" "}
          <a className="text-accent font-medium" href="tel:+12244484735">
            +1 (224) 448-4735
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-card text-card-foreground p-6 sm:p-8 shadow-elegant space-y-5 border border-border"
      noValidate
    >
      <div className="space-y-1">
        <h3 className="text-2xl font-display font-semibold text-foreground">
          Get your free quote
        </h3>
        <p className="text-sm text-muted-foreground">
          Takes under a minute. No obligation, no exam required for most plans.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2 space-y-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Doe"
            maxLength={100}
            autoComplete="name"
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@email.com"
            maxLength={255}
            autoComplete="email"
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(224) 448-4735"
            maxLength={20}
            autoComplete="tel"
          />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="zip">ZIP code</Label>
          <Input
            id="zip"
            inputMode="numeric"
            value={form.zip}
            onChange={(e) => update("zip", e.target.value.replace(/\D/g, "").slice(0, 5))}
            placeholder="60601"
            maxLength={5}
            autoComplete="postal-code"
          />
          {errors.zip && <p className="text-xs text-destructive">{errors.zip}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            inputMode="numeric"
            value={form.age}
            onChange={(e) => update("age", e.target.value.replace(/\D/g, "").slice(0, 2))}
            placeholder="42"
            maxLength={2}
          />
          {errors.age && <p className="text-xs text-destructive">{errors.age}</p>}
        </div>

        <div className="space-y-1.5">
          <Label>Coverage type</Label>
          <Select value={form.coverageType} onValueChange={(v) => update("coverageType", v)}>
            <SelectTrigger>
              <SelectValue placeholder="Select coverage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="term">Term Life</SelectItem>
              <SelectItem value="whole">Whole Life</SelectItem>
              <SelectItem value="iul">Indexed Universal Life</SelectItem>
              <SelectItem value="mortgage">Mortgage Protection</SelectItem>
              <SelectItem value="final">Final Expense</SelectItem>
              <SelectItem value="not_sure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
          {errors.coverageType && (
            <p className="text-xs text-destructive">{errors.coverageType}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label>Coverage amount</Label>
          <Select
            value={form.coverageAmount}
            onValueChange={(v) => update("coverageAmount", v)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select amount" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under_50k">Under $50,000</SelectItem>
              <SelectItem value="50_100k">$50,000 – $100,000</SelectItem>
              <SelectItem value="100_250k">$100,000 – $250,000</SelectItem>
              <SelectItem value="250_500k">$250,000 – $500,000</SelectItem>
              <SelectItem value="500k_1m">$500,000 – $1M</SelectItem>
              <SelectItem value="1m_plus">$1M+</SelectItem>
            </SelectContent>
          </Select>
          {errors.coverageAmount && (
            <p className="text-xs text-destructive">{errors.coverageAmount}</p>
          )}
        </div>
      </div>

      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Sending…" : "Get my free quote"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to be contacted by a licensed BSLU agent. We never share your info.
      </p>
    </form>
  );
};

export default QuoteForm;
