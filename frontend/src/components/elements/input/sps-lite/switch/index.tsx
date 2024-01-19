import Switch from "~components/ui/input/checkbox/sps";
import { IElement } from "../..";
import FormField from "~components/ui/form-field";

export default function SwitchInput(props: IElement) {
  return (
    <>
      {/* <FormField
        {...props}
        data-component="elements.input"
        ui="sps"
        label={"sps | " + props.label || undefined}
        type="checkbox"
      /> */}
      <FormField
        {...props}
        data-component="elements.input"
        ui="shadcn"
        label={"shadcn | " + props.label || undefined}
        type="checkbox"
      />
    </>
  );

  // return (
  //   <Switch
  //     {...props}
  //     data-component="elements.input"
  //     label={props.label || undefined}
  //     placeholder={props.placeholder || undefined}
  //     multiple={undefined}
  //     className={props.className || ""}
  //     type="date"
  //     step={undefined}
  //     min={undefined}
  //     max={undefined}
  //     value={undefined}
  //     id={undefined}
  //   />
  // );
}
