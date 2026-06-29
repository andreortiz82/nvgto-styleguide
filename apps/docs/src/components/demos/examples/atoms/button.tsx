import { MagnifyingGlass, Heart } from "@phosphor-icons/react";
import { Button } from "@navigato/react";

export function ButtonDefaultDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Search</Button>
      <Button variant="outline">Filters</Button>
    </div>
  );
}

export function ButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}

export function ButtonSizesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Search">
        <MagnifyingGlass />
      </Button>
    </div>
  );
}

export function ButtonStatesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>
        Disabled outline
      </Button>
      <Button>
        <MagnifyingGlass data-icon="inline-start" />
        With icon
      </Button>
      <Button className="w-full max-w-xs">Full width</Button>
    </div>
  );
}
