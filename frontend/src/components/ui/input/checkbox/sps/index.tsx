import { Switch as SwitchComp } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";
import { Props } from "..";

export default function SwitchInput(props: Props) {
  const { label, value } = props;

  return (
    <div data-ui-variant="switch" data-ui="input" className="input-container">
      {/* @ts-ignore */}
      <SwitchComp
        {...props}
        data-ui={undefined}
        className="switch"
        as="div"
        checked={
          value !== undefined && value !== "" ? (value ? true : false) : false
        }
      >
        <div role="tablist">
          <div
            aria-selected={
              value !== undefined && value !== ""
                ? value
                  ? true
                  : false
                : false
            }
            role="tab"
            className="check"
          >
            {value ? <CheckIcon /> : null}
          </div>
        </div>
      </SwitchComp>
      <div className="label">
        <label
          htmlFor={props.id}
          onClick={() => {
            if (props.onChange) {
              // @ts-ignore
              props.onChange(!props.value);
            }
          }}
        >
          {label ? <ReactMarkdown>{label}</ReactMarkdown> : null}
        </label>
      </div>
    </div>
  );
}
