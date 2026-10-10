import {
  ButtonHTMLAttributes,
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ReactElement,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "uppercase tracking-wider inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-950 transition-all duration-300 hover:gap-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        destructive: "bg-red-600 text-white hover:bg-red-600/90",
        outline:
          "border border-neutral-200 bg-transparent hover:bg-neutral-100 text-neutral-300 hover:text-neutral-900",
        secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80",
        ghost: "hover:bg-neutral-100 text-neutral-900",
        link: "group inline-flex items-center gap-2 text-primary text-[0.7rem] tracking-[0.28em] uppercase transition-all hover:font-semibold px-0 py-0",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-5 scale-75 sm:scale-100",
        lg: "h-11  px-8",
        icon: "h-10 w-10",
        link: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }));

    if (asChild && Children.only(children)) {
      const child = Children.only(children) as ReactElement;

      if (isValidElement(child)) {
        return cloneElement(child as ReactElement<any>, {
          className: cn(
            classes,
            (child.props as { className?: string }).className,
          ),
        } as any);
      }
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
