import React, { forwardRef, useId } from "react";

function Input(
  {
    label,
    type = "text",
    labelClassName = "",
    inputClassName = "",
    description = "",
    ...props
  },
  ref
) {
  const id = useId();
  return (
    <div className="w-full flex flex-col">
      {label && (
        <label
          className={`${labelClassName} text-lg font-semibold p-2`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`${inputClassName} py-3 px-5 bg-slate-700/50 rounded-lg`}
        ref={ref}
        {...props}
        id={id}
      />
      <p className="text-sm text-slate-400 p-2">{description}</p>
    </div>
  );
}

export default forwardRef(Input);
