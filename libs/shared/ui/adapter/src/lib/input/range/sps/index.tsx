"use client";

import { ChangeEvent, forwardRef, useEffect, useState } from "react";
import { Props } from "..";

const RangeInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [rightSideValue, setRightSideValue] = useState<number | undefined>(
    props.min || 0,
  );
  const { min, max } = props;

  useEffect(() => {
    if (Array.isArray(props.value) && props.value.length > 0) {
      const propsRightSideValue = props.value[props.value.length - 1];

      if (propsRightSideValue !== rightSideValue) {
        setRightSideValue(propsRightSideValue);
      }
    }
  }, [JSON.stringify(props.value)]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.value) {
      return;
    }

    setRightSideValue(parseInt(e?.target?.value));
  };

  useEffect(() => {
    if (props.onChange) {
      props.onChange([rightSideValue] as any);
    }
  }, [rightSideValue]);

  return (
    <div {...props} onChange={undefined} data-ui-variant="range">
      <div className="input-container">
        {max && rightSideValue !== undefined ? (
          <>
            <div
              className="dragger"
              style={{
                left: `${(rightSideValue / max) * 100}%`,
              }}
            >
              <p className="dragger-value">{rightSideValue}</p>
            </div>
            <div
              className="ms-fill-lower"
              style={{
                width: `${(rightSideValue / max) * 100}%`,
              }}
            ></div>
            <div
              className="ms-fill-upper"
              style={{
                width: `${((max - rightSideValue) / max) * 100}%`,
              }}
            ></div>
          </>
        ) : null}
        <input
          {...props}
          ref={ref}
          value={rightSideValue}
          onChange={onChange}
        />
        {min !== undefined && max !== undefined ? (
          <div className="limit-values-container">
            <p className="min">{min}</p>
            <p className="max">{max}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
});

export default RangeInput;
