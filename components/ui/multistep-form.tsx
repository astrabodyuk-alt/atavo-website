"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const steps = [
  { id: "details",  title: "Your Details" },
  { id: "business", title: "Your Business" },
  { id: "service",  title: "Service" },
  { id: "design",   title: "Design" },
  { id: "budget",   title: "Budget" },
  { id: "extras",   title: "Extras" },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  industry: string;
  serviceInterest: string;
  primaryGoal: string;
  stylePreference: string;
  inspirations: string;
  budget: string;
  timeline: string;
  features: string[];
  message: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

export default function MultistepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    industry: "",
    serviceInterest: "",
    primaryGoal: "",
    stylePreference: "",
    inspirations: "",
    budget: "",
    timeline: "",
    features: [],
    message: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const toggleFeature = (feature: string) => {
    setFormData((prev) => {
      const list = [...prev.features];
      return {
        ...prev,
        features: list.includes(feature)
          ? list.filter((f) => f !== feature)
          : [...list, feature],
      };
    });
  };

  const nextStep = () => currentStep < steps.length - 1 && setCurrentStep((p) => p + 1);
  const prevStep = () => currentStep > 0 && setCurrentStep((p) => p - 1);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0: return formData.name.trim() !== "" && formData.email.trim() !== "";
      case 1: return formData.businessName.trim() !== "" && formData.industry !== "";
      case 2: return formData.serviceInterest !== "";
      case 3: return formData.stylePreference !== "";
      case 4: return formData.budget !== "" && formData.timeline !== "";
      default: return true;
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-20 h-20 rounded-full bg-[#2283FF]/20 border-2 border-[#2283FF]/50 flex items-center justify-center mb-6"
        >
          <Check className="w-8 h-8 text-[#2283FF]" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-white mb-3"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          We&apos;ve received your brief!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-[#A0A0A0] max-w-sm"
        >
          Thanks {formData.name.split(" ")[0]}! The ATAVO team will be in touch within 24 hours to kick things off.
        </motion.p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto py-8">
      {/* Progress dots */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between mb-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={cn(
                  "w-3.5 h-3.5 rounded-full cursor-pointer transition-colors duration-300",
                  index < currentStep
                    ? "bg-[#2283FF]"
                    : index === currentStep
                      ? "bg-[#2283FF] ring-4 ring-[#2283FF]/25"
                      : "bg-[#333333]"
                )}
                onClick={() => index <= currentStep && setCurrentStep(index)}
                whileTap={{ scale: 0.95 }}
              />
              <span
                className={cn(
                  "text-[10px] mt-1.5 hidden sm:block",
                  index === currentStep
                    ? "text-[#2283FF] font-medium"
                    : "text-[#525252]"
                )}
              >
                {step.title}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="w-full bg-[#1c1c1c] h-1 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#2283FF]"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <Card className="border border-[#282828] bg-[#1c1c1c] text-white rounded-3xl overflow-hidden shadow-xl shadow-black/40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={contentVariants}
            >
              {/* ── Step 1: Your Details ── */}
              {currentStep === 0 && (
                <>
                  <CardHeader>
                    <CardTitle className="text-white" style={{ fontFamily: "var(--font-syne)" }}>
                      Tell us about yourself
                    </CardTitle>
                    <CardDescription className="text-[#A0A0A0]">
                      Let&apos;s start with the basics so we can reach you.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { id: "name", label: "Full Name", placeholder: "John Smith", type: "text", field: "name" as const },
                      { id: "email", label: "Email Address", placeholder: "john@business.com", type: "email", field: "email" as const },
                      { id: "phone", label: "Phone (optional)", placeholder: "+44 7700 000000", type: "tel", field: "phone" as const },
                    ].map((f, i) => (
                      <motion.div key={f.id} variants={fadeInUp} className="space-y-2" custom={i}>
                        <Label htmlFor={f.id} className="text-[#A0A0A0]">{f.label}</Label>
                        <Input
                          id={f.id}
                          type={f.type}
                          placeholder={f.placeholder}
                          value={formData[f.field]}
                          onChange={(e) => update(f.field, e.target.value)}
                          className="bg-[#202020] border-[#333333] text-white placeholder:text-[#444444] focus-visible:ring-[#2283FF]/40 focus-visible:border-[#2283FF]"
                        />
                      </motion.div>
                    ))}
                  </CardContent>
                </>
              )}

              {/* ── Step 2: Your Business ── */}
              {currentStep === 1 && (
                <>
                  <CardHeader>
                    <CardTitle className="text-white" style={{ fontFamily: "var(--font-syne)" }}>
                      About your business
                    </CardTitle>
                    <CardDescription className="text-[#A0A0A0]">
                      Help us understand your business and market.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label className="text-[#A0A0A0]">Business name</Label>
                      <Input
                        placeholder="Your Business Ltd"
                        value={formData.businessName}
                        onChange={(e) => update("businessName", e.target.value)}
                        className="bg-[#202020] border-[#333333] text-white placeholder:text-[#444444] focus-visible:ring-[#2283FF]/40 focus-visible:border-[#2283FF]"
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label className="text-[#A0A0A0]">Business type</Label>
                      <Select value={formData.businessType} onValueChange={(v) => update("businessType", v)}>
                        <SelectTrigger className="bg-[#202020] border-[#333333] text-white focus:ring-[#2283FF]/40">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#202020] border-[#333333] text-white">
                          {["Sole trader", "Limited company", "Startup", "Franchise", "Non-profit", "Other"].map((t) => (
                            <SelectItem key={t} value={t.toLowerCase().replace(" ", "-")} className="focus:bg-[#2283FF]/20 focus:text-white">{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label className="text-[#A0A0A0]">Industry</Label>
                      <Select value={formData.industry} onValueChange={(v) => update("industry", v)}>
                        <SelectTrigger className="bg-[#202020] border-[#333333] text-white focus:ring-[#2283FF]/40">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#202020] border-[#333333] text-white">
                          {["Retail & E-commerce", "Hospitality & Food", "Health & Fitness", "Professional Services", "Technology", "Creative & Media", "Construction & Trades", "Other"].map((ind) => (
                            <SelectItem key={ind} value={ind.toLowerCase().replace(/\s+/g, "-")} className="focus:bg-[#2283FF]/20 focus:text-white">{ind}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </CardContent>
                </>
              )}

              {/* ── Step 3: Service ── */}
              {currentStep === 2 && (
                <>
                  <CardHeader>
                    <CardTitle className="text-white" style={{ fontFamily: "var(--font-syne)" }}>
                      What do you need?
                    </CardTitle>
                    <CardDescription className="text-[#A0A0A0]">
                      Tell us which ATAVO service fits your goals.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label className="text-[#A0A0A0]">Service interest</Label>
                      <RadioGroup
                        value={formData.serviceInterest}
                        onValueChange={(v) => update("serviceInterest", v)}
                        className="space-y-2"
                      >
                        {[
                          { value: "starter-website", label: "Starter Website — £499", desc: "5 pages, delivered in 7 days" },
                          { value: "pro-website",     label: "Pro / E-Commerce — £999", desc: "Full business system" },
                          { value: "app-saas",        label: "App / SaaS Platform — £300/mo", desc: "Loyalty app or automation" },
                          { value: "seo",             label: "SEO Services", desc: "Get found on Google" },
                          { value: "not-sure",        label: "Not sure yet", desc: "Happy to discuss on a call" },
                        ].map((opt, i) => (
                          <motion.div
                            key={opt.value}
                            className={cn(
                              "flex items-start space-x-3 rounded-xl border p-3 cursor-pointer transition-colors",
                              formData.serviceInterest === opt.value
                                ? "border-[#2283FF]/60 bg-[#2283FF]/10"
                                : "border-[#2a2a2a] hover:border-[#333333] bg-[#202020]"
                            )}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0, transition: { delay: 0.08 * i } }}
                          >
                            <RadioGroupItem value={opt.value} id={`svc-${i}`} className="mt-0.5 border-[#525252] text-[#2283FF]" />
                            <Label htmlFor={`svc-${i}`} className="cursor-pointer flex flex-col gap-0.5">
                              <span className="text-white font-semibold text-sm">{opt.label}</span>
                              <span className="text-[#A0A0A0] text-xs">{opt.desc}</span>
                            </Label>
                          </motion.div>
                        ))}
                      </RadioGroup>
                    </motion.div>
                  </CardContent>
                </>
              )}

              {/* ── Step 4: Design ── */}
              {currentStep === 3 && (
                <>
                  <CardHeader>
                    <CardTitle className="text-white" style={{ fontFamily: "var(--font-syne)" }}>
                      Design preferences
                    </CardTitle>
                    <CardDescription className="text-[#A0A0A0]">
                      Help us nail the look and feel you&apos;re after.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label className="text-[#A0A0A0]">Preferred style</Label>
                      <RadioGroup
                        value={formData.stylePreference}
                        onValueChange={(v) => update("stylePreference", v)}
                        className="space-y-2"
                      >
                        {[
                          { value: "modern-dark",  label: "Modern & Dark", desc: "Sleek, high-contrast, premium" },
                          { value: "clean-light",  label: "Clean & Light", desc: "Minimal, airy, professional" },
                          { value: "bold-vibrant", label: "Bold & Vibrant", desc: "Colourful, energetic, standout" },
                          { value: "corporate",    label: "Corporate & Trustworthy", desc: "Formal, authoritative, structured" },
                        ].map((style, i) => (
                          <motion.div
                            key={style.value}
                            className={cn(
                              "flex items-start space-x-3 rounded-xl border p-3 cursor-pointer transition-colors",
                              formData.stylePreference === style.value
                                ? "border-[#2283FF]/60 bg-[#2283FF]/10"
                                : "border-[#2a2a2a] hover:border-[#333333] bg-[#202020]"
                            )}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.08 * i } }}
                          >
                            <RadioGroupItem value={style.value} id={`style-${i}`} className="mt-0.5 border-[#525252] text-[#2283FF]" />
                            <Label htmlFor={`style-${i}`} className="cursor-pointer flex flex-col gap-0.5">
                              <span className="text-white font-semibold text-sm">{style.label}</span>
                              <span className="text-[#A0A0A0] text-xs">{style.desc}</span>
                            </Label>
                          </motion.div>
                        ))}
                      </RadioGroup>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label className="text-[#A0A0A0]">Any websites you like? (optional)</Label>
                      <Textarea
                        placeholder="e.g. apple.com, stripe.com — paste links or describe the vibe"
                        value={formData.inspirations}
                        onChange={(e) => update("inspirations", e.target.value)}
                        className="bg-[#202020] border-[#333333] text-white placeholder:text-[#444444] focus-visible:ring-[#2283FF]/40 focus-visible:border-[#2283FF] min-h-[80px]"
                      />
                    </motion.div>
                  </CardContent>
                </>
              )}

              {/* ── Step 5: Budget & Timeline ── */}
              {currentStep === 4 && (
                <>
                  <CardHeader>
                    <CardTitle className="text-white" style={{ fontFamily: "var(--font-syne)" }}>
                      Budget &amp; Timeline
                    </CardTitle>
                    <CardDescription className="text-[#A0A0A0]">
                      Let&apos;s make sure we find the right fit for your investment.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label className="text-[#A0A0A0]">Budget range</Label>
                      <Select value={formData.budget} onValueChange={(v) => update("budget", v)}>
                        <SelectTrigger className="bg-[#202020] border-[#333333] text-white focus:ring-[#2283FF]/40">
                          <SelectValue placeholder="Select your budget" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#202020] border-[#333333] text-white">
                          {[
                            { v: "under-500",   l: "Under £500" },
                            { v: "500-1000",    l: "£500 – £1,000" },
                            { v: "1000-2000",   l: "£1,000 – £2,000" },
                            { v: "2000-plus",   l: "£2,000+" },
                            { v: "monthly-300", l: "£300/mo (App/SaaS)" },
                          ].map((b) => (
                            <SelectItem key={b.v} value={b.v} className="focus:bg-[#2283FF]/20 focus:text-white">{b.l}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label className="text-[#A0A0A0]">Ideal timeline</Label>
                      <RadioGroup
                        value={formData.timeline}
                        onValueChange={(v) => update("timeline", v)}
                        className="space-y-2"
                      >
                        {[
                          { value: "asap",       label: "ASAP — let's go!" },
                          { value: "1-month",    label: "Within 1 month" },
                          { value: "1-3-months", label: "1–3 months" },
                          { value: "flexible",   label: "I'm flexible" },
                        ].map((t, i) => (
                          <motion.div
                            key={t.value}
                            className={cn(
                              "flex items-center space-x-3 rounded-xl border p-3 cursor-pointer transition-colors",
                              formData.timeline === t.value
                                ? "border-[#2283FF]/60 bg-[#2283FF]/10"
                                : "border-[#2a2a2a] hover:border-[#333333] bg-[#202020]"
                            )}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0, transition: { delay: 0.08 * i } }}
                          >
                            <RadioGroupItem value={t.value} id={`time-${i}`} className="border-[#525252] text-[#2283FF]" />
                            <Label htmlFor={`time-${i}`} className="cursor-pointer text-white text-sm">{t.label}</Label>
                          </motion.div>
                        ))}
                      </RadioGroup>
                    </motion.div>
                  </CardContent>
                </>
              )}

              {/* ── Step 6: Extras ── */}
              {currentStep === 5 && (
                <>
                  <CardHeader>
                    <CardTitle className="text-white" style={{ fontFamily: "var(--font-syne)" }}>
                      Any extras?
                    </CardTitle>
                    <CardDescription className="text-[#A0A0A0]">
                      Select the features you&apos;d like and add any final notes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label className="text-[#A0A0A0]">Features needed</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "Contact Form",
                          "Live Chat",
                          "Blog / CMS",
                          "E-commerce Store",
                          "Booking System",
                          "Loyalty App",
                          "Email Automation",
                          "Analytics Setup",
                        ].map((feature, i) => (
                          <motion.div
                            key={feature}
                            className={cn(
                              "flex items-center space-x-2 rounded-xl border p-3 cursor-pointer transition-colors",
                              formData.features.includes(feature.toLowerCase())
                                ? "border-[#2283FF]/60 bg-[#2283FF]/10"
                                : "border-[#2a2a2a] hover:border-[#333333] bg-[#202020]"
                            )}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.04 * i } }}
                            onClick={() => toggleFeature(feature.toLowerCase())}
                          >
                            <Checkbox
                              id={`feat-${feature}`}
                              checked={formData.features.includes(feature.toLowerCase())}
                              onCheckedChange={() => toggleFeature(feature.toLowerCase())}
                              className="border-[#525252] data-[state=checked]:bg-[#2283FF] data-[state=checked]:border-[#2283FF]"
                            />
                            <Label htmlFor={`feat-${feature}`} className="cursor-pointer text-white text-xs">{feature}</Label>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label className="text-[#A0A0A0]">Anything else we should know?</Label>
                      <Textarea
                        placeholder="Tell us about your project, challenges, or anything specific you want us to know..."
                        value={formData.message}
                        onChange={(e) => update("message", e.target.value)}
                        className="bg-[#202020] border-[#333333] text-white placeholder:text-[#444444] focus-visible:ring-[#2283FF]/40 focus-visible:border-[#2283FF] min-h-[100px]"
                      />
                    </motion.div>
                  </CardContent>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Footer nav */}
          <CardFooter className="flex justify-between pt-4 pb-5 border-t border-[#1c1c1c]">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-1 rounded-2xl bg-transparent border-[#333333] text-[#A0A0A0] hover:bg-[#1c1c1c] hover:text-white hover:border-[#525252] disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
                disabled={!isStepValid() || isSubmitting}
                className="flex items-center gap-1 rounded-2xl bg-[#2283FF] hover:bg-[#4fa8ff] text-white disabled:opacity-40 shadow-lg shadow-[#2283FF]/20"
              >
                {isSubmitting ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                ) : currentStep === steps.length - 1 ? (
                  <>Send Brief <Check className="h-4 w-4" /></>
                ) : (
                  <>Next <ChevronRight className="h-4 w-4" /></>
                )}
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Step counter */}
      <motion.p
        className="mt-4 text-center text-xs text-[#525252]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Step {currentStep + 1} of {steps.length} — {steps[currentStep].title}
      </motion.p>
    </div>
  );
}
