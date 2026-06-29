import { Input, Label } from "@navigato/react";

export function InputDefaultDemo() {
  return <Input placeholder="Search destinations" className="max-w-sm" />;
}

export function InputTypesDemo() {
  return (
    <div className="grid w-full max-w-sm gap-3">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Guests" />
    </div>
  );
}

export function InputStatesDemo() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <div className="space-y-2">
        <Label htmlFor="dest">Destination</Label>
        <Input id="dest" placeholder="Where to?" />
      </div>
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Invalid" aria-invalid="true" />
    </div>
  );
}
