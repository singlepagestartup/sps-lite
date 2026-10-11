import { useId } from "react";
export interface ISupportInputProps {
  variant?: string;
  id?: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  options?: string[];
  onChange: (value: string) => void;
}
export function Component({
  variant = "support-ai-chat",
  id: suppliedId,
  name,
  label,
  placeholder,
  value,
  error,
  options,
  onChange,
}: ISupportInputProps) {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;
  const attributes = {
    id,
    name,
    value,
    required: true,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${id}-error` : undefined,
    className:
      "min-h-12 w-full min-w-0 rounded-xl border border-sps-line bg-sps-white px-4 py-3 text-base text-sps-graphite placeholder:text-sps-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sps-graphite aria-invalid:border-sps-danger",
  };
  return (
    <div
      className="grid min-w-0 gap-2"
      data-module="crm"
      data-model="input"
      data-variant={variant}
    >
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      {options ? (
        <select
          {...attributes}
          onChange={(event) => onChange(event.target.value)}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <textarea
          {...attributes}
          placeholder={placeholder}
          rows={name === "details" ? 5 : 4}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-sps-danger">
          {error}
        </p>
      )}
    </div>
  );
}
