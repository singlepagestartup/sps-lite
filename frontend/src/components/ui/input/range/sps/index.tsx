import { IInputProps } from "../..";

export default function RangeInput(props: IInputProps) {
  const { min, max, value } = props;

  return (
    <div {...props} data-ui-variant="range">
      <div className="input-container">
        {max && value !== undefined ? (
          <>
            <div
              className="dragger"
              style={{
                // @ts-ignore
                left: `${(value / max) * 100}%`,
              }}
            >
              <p className="dragger-value">{value}</p>
            </div>
            <div
              className="ms-fill-lower"
              style={{
                // @ts-ignore
                width: `${(value / max) * 100}%`,
              }}
            ></div>
            <div
              className="ms-fill-upper"
              style={{
                // @ts-ignore
                width: `${((max - value) / max) * 100}%`,
              }}
            ></div>
          </>
        ) : null}
        <input {...props} />
        {min !== undefined && max !== undefined ? (
          <div className="limit-values-container">
            <p className="min">{min}</p>
            <p className="max">{max}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
