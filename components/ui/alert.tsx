import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const alertVariants = cva(
  'relative w-full rounded-lg border p-4 text-sm',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground border-border',
        info: 'bg-card text-card-foreground border-border',
        success:
          'bg-card text-card-foreground border-border [&_[data-slot=alert-indicator]]:text-success',
        warning:
          'bg-card text-card-foreground border-border [&_[data-slot=alert-indicator]]:text-warning',
        destructive:
          'bg-card text-card-foreground border-destructive/40 [&_[data-slot=alert-indicator]]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /**
   * If true, renders proper ARIA semantics for an alert.
   * Use `polite` for non-blocking messages, `assertive` for critical errors.
   */
  ariaLive?: 'off' | 'polite' | 'assertive';
}

export function Alert({
  className,
  variant,
  ariaLive = 'polite',
  ...props
}: AlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      aria-live={ariaLive}
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

export interface AlertTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <h5
      data-slot="alert-title"
      className={cn(
        'mb-1 font-medium leading-none tracking-tight',
        className
      )}
      {...props}
    />
  );
}

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function AlertDescription({
  className,
  ...props
}: AlertDescriptionProps) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'text-sm text-muted-foreground [&_p]:leading-relaxed',
        className
      )}
      {...props}
    />
  );
}

/**
 * Optional left indicator (icon or dot).
 * Keep it outside AlertTitle/AlertDescription for cleaner layout.
 */
export interface AlertIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export function AlertIndicator({
  className,
  ...props
}: AlertIndicatorProps) {
  return (
    <span
      data-slot="alert-indicator"
      className={cn(
        'absolute left-4 top-4 inline-flex size-5 items-center justify-center text-foreground',
        className
      )}
      {...props}
    />
  );
}

/**
 * Content wrapper to align text with indicator.
 * Use when AlertIndicator is present.
 */
export interface AlertContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function AlertContent({
  className,
  ...props
}: AlertContentProps) {
  return (
    <div
      data-slot="alert-content"
      className={cn('pl-8', className)}
      {...props}
    />
  );
}
