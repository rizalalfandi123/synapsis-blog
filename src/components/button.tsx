import React from "react";
import { Loader2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { isLoading?: boolean }
>(function (props, ref) {
  const { className, children, isLoading, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      ref={ref}
      className={twMerge(
        "bg-teal-500 px-3 py-1 rounded-md font-medium",
        className
      )}
    >
      <Loader2
        className={twMerge(
          "hidden animate-spin w-4 h-4 mr-2",
          isLoading && "inline-flex"
        )}
      />

      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
