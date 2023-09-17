import React from "react";
import { twMerge } from "tailwind-merge";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  function (props, ref) {
    const { className, ...inputProps } = props;
    return (
      <input
        {...inputProps}
        ref={ref}
        className={twMerge(
          "placeholder:italic placeholder:text-slate-400 block bg-slate-800 shadow-sm w-full rounded-md py-1.5 px-2 focus:outline-none focus:border-teal-400 focus:ring-teal-400 focus:ring-2 sm:text-sm",
          className
        )}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
