import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  `
  khrm-ui-inline-flex 
  khrm-ui-items-center 
  khrm-ui-justify-center 
  khrm-ui-whitespace-nowrap 
  khrm-ui-rounded-md 
  khrm-ui-text-sm 
  khrm-ui-font-medium 
  khrm-ui-ring-offset-background 
  khrm-ui-transition-colors 
  focus-visible:khrm-ui-outline-none 
  focus-visible:khrm-ui-ring-2 
  focus-visible:khrm-ui-ring-[rgba(26,26,26,1)] 
  focus-visible:khrm-ui-ring-offset-2 
  disabled:khrm-ui-pointer-events-none 
  disabled:khrm-ui-opacity-50
  `,
  {
    variants: {
      variant: {
        default: `
          khrm-ui-bg-[rgb(26,26,26)] 
          khrm-ui-text-[#fafafa] 
          khrm-ui-hover:bg-[rgba(26,26,26,0.9)]
          `,
        primary: `
          khrm-ui-bg-[rgb(59,130,246)]
          khrm-ui-text-[#fafafa]
          hover:khrm-ui-bg-[rgba(59,130,246,0.9)]
        `,
        destructive: `
          khrm-ui-bg-[rgb(191,26,26)] 
          khrm-ui-text-[#fafafa] 
          hover:khrm-ui-bg-[rgba(191,26,26,0.9)]
          `,
        outline: `
          khrm-ui-border 
          khrm-ui-border-[rgb(230,230,230)] 
          khrm-ui-bg-[rgb(255,255,255)] 
          hover:khrm-ui-bg-[rgb(242,242,242)] 
          hover:khrm-ui-text-[rgb(26,26,26)]`,
        secondary: ` color

          khrm-ui-bg-[rgb(242,242,242)] 
          khrm-ui-text-[rgb(26,26,26)] 
          hover:khrm-ui-bg-[rgba(242,242,242,0.8)]
          `,
        ghost: `
          hover:khrm-ui-bg-[rgb(242,242,242)] 
          hover:khrm-ui-text-[rgb(26,26,26)]
          `,
        link: `
        khrm-ui-text-[rgb(26,26,26)] 
        khrm-ui-underline-offset-4 
        hover:khrm-ui-underline
        `,
        warning: `
          khrm-ui-bg-[rgb(245,159,10)] 
          khrm-ui-text-[#fafafa] 
          hover:khrm-ui-bg-[rgba(245,159,10,0.9)]
          `,
        success: `
          khrm-ui-bg-[rgb(34,197,94)] 
          khrm-ui-text-[#fafafa] 
          hover:khrm-ui-bg-[rgba(34,197,94,0.9)]
          `,
      },
      size: {
        default: `
        khrm-ui-h-10 
        khrm-ui-px-4 
        khrm-ui-py-2
        `,
        sm: `
        khrm-ui-h-9 
        khrm-ui-rounded-md 
        khrm-ui-px-3
        `,
        lg: `
        khrm-ui-h-11 
        khrm-ui-rounded-md 
        khrm-ui-px-8
        `,
        icon: `
        khrm-ui-h-10 
        khrm-ui-w-10
        `,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
