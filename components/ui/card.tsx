import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const cardVariants = cva(
  'rounded-lg border text-card-foreground',
  {
    variants: {
      variant: {
        default: 'bg-card',
        muted: 'bg-muted/40',
        transparent: 'bg-transparent',
      },
      interactive: {
        false: '',
        true: 'transition-colors hover:bg-accent/40',
      },
    },
    defaultVariants: {
      variant: 'default',
      interactive: false,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /**
   * Render the Card as another element (e.g. <a />, <section />) via Radix Slot.
   * Useful for clickable cards while keeping consistent styling.
   */
  asChild?: boolean;
}

export function Card({
  className,
  variant,
  interactive,
  asChild = false,
  ...props
}: CardProps) {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      data-slot="card"
      className={cn(
        cardVariants({ variant, interactive }),
        className
      )}
      {...props}
    />
  );
}

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn('flex flex-col gap-1.5 p-6', className)}
      {...props}
    />
  );
}

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        'text-base font-semibold leading-none tracking-tight',
        className
      )}
      {...props}
    />
  );
}

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({
  className,
  ...props
}: CardDescriptionProps) {
  return (
    <p
      data-slot="card-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function CardContent({
  className,
  ...props
}: CardContentProps) {
  return (
    <div
      data-slot="card-content"
      className={cn('p-6 pt-0', className)}
      {...props}
    />
  );
}

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  );
}
