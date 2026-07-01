import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Button,
} from "@navigato/react";

export function CardDefaultDemo() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Listing summary</CardTitle>
        <CardDescription>Mar 12–15 · 2 guests</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">$189 / night before taxes</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Reserve</Button>
      </CardFooter>
    </Card>
  );
}

export function TabsDefaultDemo() {
  return (
    <Tabs defaultValue="photos" className="max-w-md w-full">
      <TabsList>
        <TabsTrigger value="photos">Photos</TabsTrigger>
        <TabsTrigger value="amenities">Amenities</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="photos" className="text-sm text-muted-foreground">
        Photo gallery content
      </TabsContent>
      <TabsContent value="amenities" className="text-sm text-muted-foreground">
        WiFi, pool, parking
      </TabsContent>
      <TabsContent value="reviews" className="text-sm text-muted-foreground">
        4.9 average · 128 reviews
      </TabsContent>
    </Tabs>
  );
}

export function SelectDefaultDemo() {
  return (
    <Select defaultValue="recommended">
      <SelectTrigger className="w-44">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="recommended">Recommended</SelectItem>
        <SelectItem value="price-asc">Price: low to high</SelectItem>
        <SelectItem value="price-desc">Price: high to low</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function SheetDefaultDemo() {
  return (
    <Sheet>
      <SheetTrigger className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">
        Open filters
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <p className="text-sm text-muted-foreground p-4">Price, amenities, and more.</p>
      </SheetContent>
    </Sheet>
  );
}

export function DialogDefaultDemo() {
  return (
    <Dialog>
      <DialogTrigger className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium">
        View cancellation policy
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Free cancellation</DialogTitle>
        <p className="text-sm text-muted-foreground">
          Cancel before check-in for a full refund.
        </p>
      </DialogContent>
    </Dialog>
  );
}
