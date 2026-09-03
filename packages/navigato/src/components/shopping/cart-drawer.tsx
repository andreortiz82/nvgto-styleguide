"use client";

import { ShoppingBag } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartLine, type CartLineItem } from "./cart-line";
import { ProductPrice } from "./product-price";

export interface CartDrawerProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  items?: CartLineItem[];
  loading?: boolean;
  onQuantityChange?: (id: string, quantity: number) => void;
  onRemove?: (id: string) => void;
  onCheckout?: () => void;
  currency?: string;
  className?: string;
}

export function CartDrawer({
  open,
  defaultOpen,
  onOpenChange,
  trigger,
  items = [],
  loading = false,
  onQuantityChange,
  onRemove,
  onCheckout,
  currency = "$",
  className,
}: CartDrawerProps) {
  const triggerNode =
    trigger === undefined ? (
      <Button variant="outline">
        <ShoppingBag size={16} />
        Bag{items.length ? ` (${items.length})` : ""}
      </Button>
    ) : (
      trigger
    );

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const empty = !loading && items.length === 0;

  return (
    <Sheet open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {triggerNode ? <SheetTrigger>{triggerNode}</SheetTrigger> : null}
      <SheetContent className={cn("overflow-y-auto", className)}>
        <SheetHeader>
          <SheetTitle>Bag</SheetTitle>
        </SheetHeader>
        <div className="px-4">
          {loading ? (
            <div className="space-y-4 py-4" aria-busy="true">
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          ) : empty ? (
            <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
              <ShoppingBag size={40} className="mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold m-0">Your bag is empty</h3>
              <p className="mt-1 mb-0 max-w-xs text-sm text-muted-foreground">
                Pieces you add from the lookbook stay here. This demo does not check out.
              </p>
            </div>
          ) : (
            <div>
              {items.map((item) => (
                <CartLine
                  key={item.id}
                  {...item}
                  currency={item.currency ?? currency}
                  onQuantityChange={
                    onQuantityChange ? (quantity) => onQuantityChange(item.id, quantity) : undefined
                  }
                  onRemove={onRemove ? () => onRemove(item.id) : undefined}
                />
              ))}
            </div>
          )}
        </div>
        {!empty && !loading ? (
          <SheetFooter>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <ProductPrice amount={subtotal} currency={currency} />
            </div>
            <Button
              type="button"
              className="w-full uppercase tracking-[0.18em]"
              onClick={onCheckout}
            >
              Checkout
            </Button>
          </SheetFooter>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
