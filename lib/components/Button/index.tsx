import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(26,26,26,1)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[rgba(26,26,26,1)] text-[#fafafa] hover:bg-[rgba(26,26,26,0.9)]",
        destructive:
          "bg-[rgba(191,26,26,1)] text-[#fafafa] hover:bg-[rgba(191,26,26,0.9)]",
        outline:
          "border border-[rgba(230,230,230,1)] bg-[rgba(255,255,255,1)] hover:bg-[rgba(242,242,242,1)] hover:text-[rgba(26,26,26,1)]",
        secondary:
          "bg-[rgba(242,242,242,1)] text-[rgba(26,26,26,1)] hover:bg-[rgba(242,242,242,0.8)]",
        ghost: "hover:bg-[rgba(242,242,242,1)] hover:text-[rgba(26,26,26,1)]",
        link: "text-[rgba(26,26,26,1)] underline-offset-4 hover:underline",
        warning:
          "bg-[rgba(245,159,10,1)] text-[#fafafa] hover:bg-[rgba(245,159,10,0.9)]",
        success:
          "bg-[rgba(34,197,94,1)] text-[#fafafa] hover:bg-[rgba(34,197,94,0.9)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonVariants>;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
