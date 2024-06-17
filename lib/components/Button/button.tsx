import React from "react";
import { cn } from "../../utils";
import { LoaderIcon } from "../Icons";
import { buttonVariants, ButtonVariants } from "./button-variants";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    icon?: React.ReactElement;
    isPending?: boolean;
  };

export function Button({
  className,
  children,
  variant,
  size,
  isPending,
  disabled,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isPending}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isPending || disabled ? (
        <>
          {icon ? (
            icon
          ) : (
            <LoaderIcon className="khrm-ui-animate-spin khrm-ui-mr-2 khrm-ui-h-5 khrm-ui-w-5" />
          )}{" "}
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </button>
  );
}
