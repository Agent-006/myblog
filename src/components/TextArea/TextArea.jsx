import React, { forwardRef, useId } from "react";

function TextArea(
  {
    label,
    cols = "20",
    rows = "20",
    className = "",
    textareaClassName = "",
    labelClassName = "",
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
      <textarea
        className={`${textareaClassName} py-3 px-5 bg-slate-700/50 rounded-lg`}
        name={label}
        id={id}
        cols={cols}
        rows={rows}
        {...props}
      />
      <p className="text-sm text-slate-400 p-2">{description}</p>
    </div>
  );
}

export default forwardRef(TextArea);
