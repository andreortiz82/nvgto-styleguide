import { Check } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export interface BookingStep {
  id: string;
  label: string;
}

export interface BookingStepsProps {
  steps: BookingStep[];
  currentStep: string;
  className?: string;
}

export function BookingSteps({ steps, currentStep, className }: BookingStepsProps) {
  const currentIndex = steps.findIndex((s) => s.id === currentStep);

  return (
    <ol className={cn("flex flex-wrap gap-2 md:gap-4", className)}>
      {steps.map((step, index) => {
        const done = index < currentIndex;
        const active = step.id === currentStep;

        return (
          <li
            key={step.id}
            className={cn(
              "flex items-center gap-2 text-sm",
              active && "font-semibold text-primary",
              done && "text-muted-foreground",
              !active && !done && "text-muted-foreground/60",
            )}
          >
            <span
              className={cn(
                "flex size-6 items-center justify-center rounded-full border text-xs",
                active && "border-primary bg-primary text-primary-foreground",
                done && "border-primary bg-primary/10 text-primary",
              )}
            >
              {done ? <Check size={12} weight="bold" /> : index + 1}
            </span>
            {step.label}
          </li>
        );
      })}
    </ol>
  );
}

export const defaultBookingSteps: BookingStep[] = [
  { id: "details", label: "Details" },
  { id: "payment", label: "Payment" },
  { id: "confirm", label: "Confirmation" },
];
