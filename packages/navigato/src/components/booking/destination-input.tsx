"use client";

import { MapPin } from "@phosphor-icons/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export interface DestinationOption {
  label: string;
  value: string;
  subtitle?: string;
}

export interface DestinationInputProps {
  options?: DestinationOption[];
  value?: string;
  onChange?: (value: string, option?: DestinationOption) => void;
  placeholder?: string;
  className?: string;
}

const defaultOptions: DestinationOption[] = [
  { label: "Austin, TX", value: "austin-tx", subtitle: "Texas, United States" },
  { label: "Barcelona, Spain", value: "barcelona", subtitle: "Catalonia, Spain" },
  { label: "Tokyo, Japan", value: "tokyo", subtitle: "Kanto, Japan" },
  { label: "Paris, France", value: "paris", subtitle: "Île-de-France, France" },
];

export function DestinationInput({
  options = defaultOptions,
  value,
  onChange,
  placeholder = "Where to?",
  className,
}: DestinationInputProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <button
            type="button"
            className={cn(
              "flex h-9 w-full items-center rounded-lg border border-input bg-background px-3 text-sm outline-none hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring",
              className,
            )}
          />
        }
      >
        <MapPin size={16} className="mr-2 shrink-0 text-primary" />
        <span className={cn(!selected && "text-muted-foreground")}>
          {selected?.label ?? placeholder}
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--anchor-width)] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search destinations..." />
          <CommandList>
            <CommandEmpty>No destination found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label}
                  onSelect={() => {
                    onChange?.(option.value, option);
                    setOpen(false);
                  }}
                >
                  <div>
                    <p className="font-medium">{option.label}</p>
                    {option.subtitle ? (
                      <p className="text-xs text-muted-foreground">{option.subtitle}</p>
                    ) : null}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
