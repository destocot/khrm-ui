import { cn } from "../../utils";
import { LoaderIcon } from "../Icons";
import { buttonVariants, ButtonVariants } from "./button-variants";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    isPending?: boolean;
  };

export function Button({
  className,
  children,
  variant,
  size,
  isPending,
  disabled,
  icon: Icon,
  ...props
}: ButtonProps) {
  const ActualIcon = Icon ?? LoaderIcon;

  return (
    <button
      disabled={disabled || isPending}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isPending || disabled ? (
        <>
          <ActualIcon className="khrm-ui-h-4 khrm-ui-w-4 khrm-ui-animate-spin khrm-ui-mr-2" />{" "}
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
}
